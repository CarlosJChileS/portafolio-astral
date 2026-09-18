import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ORBIT_COLOR = 0xcfd4bd
const ACCENT = 0xd0a580

function disposeMaterial(material) {
  if (Array.isArray(material)) material.forEach(disposeMaterial)
  else material?.dispose()
}

export default function OrbitScene({ enabled, onReady }) {
  const canvasRef = useRef(null)
  const enabledRef = useRef(enabled)

  useEffect(() => {
    enabledRef.current = enabled
  }, [enabled])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      onReady(false)
      return undefined
    }
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0, 0, 15)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)

    const observatory = new THREE.Group()
    observatory.rotation.set(-0.2, 0.35, -0.12)
    scene.add(observatory)
    const globeMaterial = new THREE.MeshStandardMaterial({ color: 0x39463b, roughness: 0.78, metalness: 0.1, emissive: 0x132017, emissiveIntensity: .22, transparent: true, opacity: 0.92 })
    const globe = new THREE.Mesh(new THREE.SphereGeometry(3.25, 64, 64), globeMaterial)
    observatory.add(globe)
    const wire = new THREE.Mesh(new THREE.SphereGeometry(3.29, 26, 18), new THREE.MeshBasicMaterial({ color: 0xbfc9ba, wireframe: true, transparent: true, opacity: 0.3 }))
    observatory.add(wire)
    const longitude = new THREE.Group()
    for (let index = 0; index < 6; index += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(3.34, 0.006, 4, 96), new THREE.MeshBasicMaterial({ color: 0xd6deca, transparent: true, opacity: 0.18 }))
      ring.rotation.y = (Math.PI / 6) * index
      ring.rotation.x = Math.PI / 2
      longitude.add(ring)
    }
    observatory.add(longitude)
    const orbit = new THREE.Group()
    orbit.rotation.set(0.72, -0.45, -0.2)
    observatory.add(orbit)
    const constellation = new THREE.Group()
    const constellationPoints = [[1.7, 3.9, .2],[2.2, 3.45, .1],[2.72, 3.8, .2],[3.1, 3.1, .1],[3.58, 3.42, 0],[4.05, 2.72, .1],[4.38, 3.25, .1],[4.82, 2.98, 0],[5.1, 3.55, .1],[4.2, 4.05, 0],[3.15, 4.3, .2]]
    const constellationGeometry = new THREE.BufferGeometry().setFromPoints(constellationPoints.map(([x, y, z]) => new THREE.Vector3(x, y, z)))
    constellation.add(new THREE.Line(constellationGeometry, new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: .72 })))
    constellationPoints.forEach(([x, y, z], index) => {
      const node = new THREE.Mesh(new THREE.SphereGeometry(index === 5 ? .07 : .045, 8, 8), new THREE.MeshBasicMaterial({ color: index === 5 ? ACCENT : ORBIT_COLOR }))
      node.position.set(x, y, z)
      constellation.add(node)
    })
    observatory.add(constellation)
    const waterRings = new THREE.Group()
    for (const [index, radius] of [3.95, 4.35].entries()) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, .012, 5, 96), new THREE.MeshBasicMaterial({ color: index ? ACCENT : ORBIT_COLOR, transparent: true, opacity: index ? .28 : .38 }))
      ring.scale.y = .17
      ring.position.y = -3.35 - index * .13
      waterRings.add(ring)
    }
    observatory.add(waterRings)
    for (const scale of [1, 1.07]) {
      const line = new THREE.Mesh(new THREE.TorusGeometry(4.65 * scale, 0.012, 5, 120), new THREE.MeshBasicMaterial({ color: ORBIT_COLOR, transparent: true, opacity: scale === 1 ? 0.6 : 0.2 }))
      line.scale.y = 0.32
      orbit.add(line)
    }
    const satellite = new THREE.Group()
    satellite.position.set(4.65, 0, 0)
    satellite.add(new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshBasicMaterial({ color: ACCENT })))
    satellite.add(new THREE.Mesh(new THREE.RingGeometry(0.19, 0.205, 32), new THREE.MeshBasicMaterial({ color: ACCENT, side: THREE.DoubleSide, transparent: true, opacity: 0.8 })))
    orbit.add(satellite)
    const stars = new THREE.BufferGeometry()
    const starPositions = new Float32Array(260 * 3)
    for (let index = 0; index < 260; index += 1) {
      const radius = 5.5 + Math.random() * 3.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      starPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      starPositions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      starPositions[index * 3 + 2] = radius * Math.cos(phi)
    }
    stars.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const starField = new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xc9d0bd, size: 0.025, transparent: true, opacity: 0.42 }))
    scene.add(starField)
    scene.add(new THREE.HemisphereLight(0xdbe2d0, 0x0a100c, 1.9))
    const key = new THREE.DirectionalLight(0xe8eddc, 2.3)
    key.position.set(-5, 5, 7)
    scene.add(key)
    const rim = new THREE.PointLight(ACCENT, 2.1, 16)
    rim.position.set(5, -2, 4)
    scene.add(rim)

    const pointer = new THREE.Vector2()
    const onMove = event => { pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.7; pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.45 }
    window.addEventListener('pointermove', onMove, { passive: true })
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    onReady(true)
    const startedAt = performance.now()
    let frame
    const render = () => {
      const elapsed = (performance.now() - startedAt) / 1000
      if (enabledRef.current) {
        globe.rotation.y = elapsed * 0.08
        wire.rotation.y = elapsed * 0.08
        longitude.rotation.y = elapsed * 0.08
        orbit.rotation.z = elapsed * 0.09
        satellite.rotation.z = -elapsed * 0.2
        starField.rotation.y = elapsed * 0.01
        constellation.rotation.z = elapsed * .035
        waterRings.rotation.z = elapsed * .07
        waterRings.position.y = Math.sin(elapsed * .7) * .08
        globeMaterial.emissiveIntensity = .2 + Math.sin(elapsed * .85) * .06
        rim.intensity = 1.9 + Math.sin(elapsed * 1.1) * .35
        observatory.rotation.y += (0.35 + pointer.x - observatory.rotation.y) * 0.025
        observatory.rotation.x += (-0.2 - pointer.y - observatory.rotation.x) * 0.025
      }
      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    render()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      observer.disconnect()
      scene.traverse(object => { if (object.geometry) object.geometry.dispose(); if (object.material) disposeMaterial(object.material) })
      renderer.dispose()
    }
  }, [])
  return <canvas className="orbit-webgl" ref={canvasRef} aria-hidden="true" />
}
