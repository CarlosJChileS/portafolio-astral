import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowDown, LinkedinLogo, GithubLogo, List, X, DownloadSimple, Pause, Play, Sun, Moon } from '@phosphor-icons/react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'motion/react'
import { projects, moreProjects } from './projects'
import { useMotionControl } from './useMotionControl'
import { identity } from './identity'
import { AquariusConstellation, AquariusMark, StarMark } from './components/IdentityMark'
import SceneChapter from './components/SceneChapter'
import GrimoireLibrary from './components/GrimoireLibrary'
import StackCarousel from './components/StackCarousel'
const OrbitScene = lazy(() => import('./components/OrbitScene'))

const github = 'https://github.com/CarlosJChileS'
const linkedin = 'https://www.linkedin.com/in/carloschile/'
const sectionLinks = [['inicio', 'Inicio'], ['tecnologias', 'Stack'], ['proyectos', 'Proyectos'], ['perfil', 'Sobre mí'], ['contacto', 'Contacto']]
  const catalogue = Array.from(new Map([...projects.slice(3), ...moreProjects].map(project => [project.repo, project])).values())
  const compactTechnologyAreas = [
    { title: 'IA y agentes', tags: ['Python', 'FastAPI', 'LangGraph', 'RAG', 'TensorFlow.js'], repo: 'prompt-y-reza' },
    { title: 'Desarrollo web', tags: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express'], repo: 'prompt-y-reza' },
    { title: 'Datos y visualización', tags: ['PostgreSQL', 'Supabase', 'SQLAlchemy', 'D3.js', 'Three.js'], repo: 'd3js-interactive-guide' },
    { title: 'Entrega de producto', tags: ['Docker', 'GitHub Actions', 'Vercel', 'Android', 'Playwright'], repo: 'taskmate' },
  ]
function OutLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={18} aria-hidden="true"/></a>
}
function Orbit({ enabled, y, x, pointerY }) {
  const orbitRef = useRef(null)
  const inView = useInView(orbitRef)
  const active = enabled && inView
  const [threeReady, setThreeReady] = useState(false)
  return <motion.div ref={orbitRef} className={threeReady ? 'observatory has-three' : 'observatory'} aria-hidden="true" style={{ y: enabled ? y : 0, x: enabled ? x : 0 }}><Suspense fallback={null}><OrbitScene enabled={active} onReady={setThreeReady}/></Suspense><motion.div className="orbit-fallback" style={{ y: enabled ? pointerY : 0 }}>
    <svg viewBox="0 0 900 900" className="orbital-art">
      <defs>
        <radialGradient id="planet" cx="28%" cy="23%" r="79%"><stop offset="0" stopColor="#a1ada2"/><stop offset=".36" stopColor="#59645c"/><stop offset=".72" stopColor="#242d29"/><stop offset="1" stopColor="#101714"/></radialGradient>
        <linearGradient id="orbit-line"><stop stopColor="#dce2ce" stopOpacity=".07"/><stop offset=".5" stopColor="#e8eadc" stopOpacity=".75"/><stop offset="1" stopColor="#e8eadc" stopOpacity=".12"/></linearGradient>
        <clipPath id="sphere"><circle cx="450" cy="450" r="263"/></clipPath>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".76" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".15"/></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light"/></filter>
      </defs>
      <g className={active ? "coordinate-rings is-active" : "coordinate-rings"} fill="none" stroke="#778477" strokeWidth=".65" opacity=".38"><circle cx="450" cy="450" r="350"/><circle cx="450" cy="450" r="395"/><path d="M450 30V870M30 450H870" strokeDasharray="2 9"/>{Array.from({length:48},(_,i)=><path key={i} d="M450 47v8" transform={'rotate('+i*7.5+' 450 450)'}/>)}</g>
      <g clipPath="url(#sphere)"><circle cx="450" cy="450" r="263" fill="url(#planet)" filter="url(#grain)"/></g>
      <g clipPath="url(#sphere)" fill="none" stroke="#cdd8c6" strokeWidth=".8" opacity=".25" transform="rotate(-24 450 450)">
        {[-210,-160,-100,-35,35,100,160,210].map(y=><ellipse key={y} cx="450" cy={450+y} rx={Math.sqrt(263*263-y*y)} ry="35"/>)}
        {[45,105,175,235,263].map(x=><ellipse key={x} cx="450" cy="450" rx={x} ry="263"/>)}
      </g>
      <g fill="none" stroke="url(#orbit-line)" transform="rotate(-27 450 450)"><ellipse cx="450" cy="450" rx="415" ry="125" strokeWidth="1.1"/><ellipse cx="450" cy="450" rx="425" ry="139" strokeWidth=".45"/></g>
            <g transform="rotate(-27 450 450)"><g className="satellite" transform={active ? undefined : 'translate(865 450)'}><circle r="5" fill="#d2a47d"/><circle r="13" fill="none" stroke="#d2a47d" strokeWidth=".6"/>{active && <animateMotion dur="22s" repeatCount="indefinite" path="M865 450 A415 125 0 1 1 35 450 A415 125 0 1 1 865 450"/>}</g></g>
      <g fill="#adb6a8" fontSize="9" fontFamily="monospace" letterSpacing="2"><text x="585" y="100">SISTEMAS EN CONEXIÓN</text><text x="525" y="794">CC / OBSERVATORIO DIGITAL</text></g>
    </svg>
    <span className="orbit-coordinate">00° 00′ / ECUADOR</span>
  </motion.div></motion.div>
}
function ProjectDiagram({ index }) {
  return <div className={'diagram diagram-'+index} aria-hidden="true">
    <span className="diagram-label">ESTUDIO / 0{index+1}</span><span className="diagram-scan"/>
    {index===0 ? <><div className="signal-ring"/><svg viewBox="0 0 500 170"><path d="M0 95H75L94 75 115 110 145 35 178 145 211 65 232 95H285L310 50 340 125 370 82 390 95H500" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg><span className="diagram-word">PULSE</span></> : index===1 ? <><div className="learning-orbits"><i/><i/><i/></div><span className="diagram-word">LEARN<br/>PRO.</span></> : <><div className="digit-grid">{Array.from({length:35},(_,i)=><span className={[2,3,8,12,17,21,22,23,24,27,32].includes(i)?'lit':''} key={i}/>)}</div><span className="diagram-word">0 → 9</span></>}
    <span className="diagram-caption">Interpretación gráfica del proyecto</span>
  </div>
}
export default function App() {
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-32% 0px -52% 0px', threshold: [0, .1, .4] })
    sectionLinks.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const { enabled, paused, setPaused, reduced } = useMotionControl()
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const { scrollYProgress } = useScroll()
  const planetY = useTransform(heroProgress, [0, 1], [0, 95])
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 65, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 65, damping: 24 })
  function followPointer(event) {
    if (!enabled || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 28)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - .5) * 20)
  }
  function resetPointer() { pointerX.set(0); pointerY.set(0) }
  const reveal = !enabled ? { initial: false, animate: { opacity: 1, y: 0 } } : {initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.1},transition:{duration:.65}}
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <nav className="quick-navigation" aria-label="Accesos rápidos">{sectionLinks.filter(([id]) => id !== 'perfil').map(([id, label]) => <a key={id} href={'#' + id} aria-current={activeSection === id ? 'page' : undefined}>{label}</a>)}</nav>
    <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true"/><main id="contenido" className="portfolio-main"><section ref={heroRef} className="hero" id="inicio" onPointerMove={followPointer} onPointerLeave={resetPointer}>
      <header className="header shell"><a className="brand" href="#inicio">Carlos Chile<span>IA · agentes · full stack</span></a><div className="header-actions"><button className="theme-toggle" onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'} aria-pressed={theme === 'light'}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}<span>{theme === 'dark' ? 'Claro' : 'Oscuro'}</span></button><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label={menu?'Cerrar menú':'Abrir menú'} aria-expanded={menu} aria-controls="navigation">{menu?<X size={25}/>:<List size={25}/>}</button></div><nav id="navigation" className={menu?'navigation is-open':'navigation'} aria-label="Navegación principal">{sectionLinks.slice(1).map(([id,label])=><a href={'#'+id} key={id} onClick={()=>setMenu(false)} aria-current={activeSection === id ? 'page' : undefined}>{label}</a>)}</nav></header>
      <Orbit enabled={enabled} y={planetY} x={smoothX} pointerY={smoothY}/>
      <div className="hero-speedlines" aria-hidden="true"><i/><i/><i/></div><div className="hero-topnote"><AquariusMark className="hero-aquarius"/>Desde Ecuador.<br/>Conectando posibilidades.</div>
      <div className="hero-copy shell"><p className="serif-intro">Entre la lógica <span>y la curiosidad.</span></p><h1><span className="title-mask"><span className="title-line">AI SYSTEMS</span></span><span className="title-mask title-second"><span className="title-line">&amp; EXPLORER<StarMark className="title-star"/></span></span></h1><div className="hero-signature"><AquariusConstellation/><span>{identity.sign} / {identity.birthDate}</span><small>{identity.constellationLabel}</small></div><div className="hero-bottom"><p>Soy Carlos Chile Silva. Construyo productos con IA,<br/>agentes, datos y experiencias full stack.</p><a className="round-link" href="#proyectos" aria-label="Explorar proyectos"><ArrowDown size={23}/></a><div className="hero-controls"><span className="edition">PORTAFOLIO / 2026<br/>IA · AGENTES · DATOS · WEB</span><button className="motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused || !!reduced} disabled={!!reduced}>{paused || reduced ? <Play size={12}/> : <Pause size={12}/>}<span>{reduced ? "Movimiento reducido" : paused ? "Activar movimiento" : "Pausar movimiento"}</span></button></div></div></div>
    </section>
    <div className="discipline-strip" aria-label="Especialidades"><span>AGENTES Y LLMs</span><StarMark/><span>INTELIGENCIA ARTIFICIAL</span><StarMark/><span>VISIÓN Y AUDIO</span><StarMark/><span>PRODUCTOS FULL STACK</span></div>
    <SceneChapter id="perfil" index="01" kicker="ORIGEN" enabled={enabled} className="about shell section-space"><p className="eyebrow">01 / Origen</p><div className="about-grid"><motion.h2 {...reveal}>La curiosidad<br/>es mi punto<br/><em>de partida.</em></motion.h2><div className="about-copy"><StarMark className="small-cross"/><p>Hola, soy Carlos. Construyo productos de IA que conectan modelos, agentes, interfaces, datos y servicios.</p><p>Me interesan los sistemas que convierten información compleja en decisiones: agentes con herramientas, análisis documental, voz, visión por computador y experiencias full stack.</p><div className="inline-links"><OutLink href={linkedin}>LinkedIn</OutLink><OutLink href={github}>GitHub</OutLink></div><div className="cv-status"><DownloadSimple size={16}/><span>CV · disponible próximamente</span></div></div></div></SceneChapter>
    <SceneChapter id="proyectos" index="02" kicker="MISIONES" enabled={enabled} className="work shell section-space"><div className="section-heading"><div><p className="eyebrow">02 / Misiones seleccionadas</p><h2>Órbitas de<br/><em>exploración.</em></h2></div><p>Investigación, agentes y productos de IA.<br/>Código abierto cuando está disponible.</p></div><div className="featured">{projects.slice(0,3).map((project,index)=><motion.article className="featured-project" key={project.repo || project.title} {...reveal} whileHover={enabled ? { y: -5 } : undefined} transition={{ duration: .5, ease: [.2, .65, .3, 1] }}><ProjectDiagram index={index}/><div className="featured-info"><span className="mission-stamp" aria-hidden="true">MISIÓN / 0{index+1}</span><p className="eyebrow">0{index+1} / {project.category}</p><h3>{project.title}</h3><p>{project.description}</p><p className="project-detail">{project.detail}</p><div className="tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>{project.privateCase?<span className="private-case">Caso de tesis · repositorio privado</span>:<OutLink className="underline-link" href={project.url || github+'/'+project.repo}>Explorar el código</OutLink>}</div></motion.article>)}</div>
      <GrimoireLibrary projects={catalogue} enabled={enabled} github={github}/>
    </SceneChapter>
    <SceneChapter id="tecnologias" index="02" kicker="SISTEMAS" enabled={enabled} className="stack-section section-space"><div className="shell"><div className="stack-heading"><p className="eyebrow">02 / Stack técnico</p><h2>Mi <em>stack.</em></h2><p>Herramientas con las que convierto ideas en productos.</p></div><StackCarousel groups={compactTechnologyAreas}/></div></SceneChapter>
    </main><SceneChapter id="contacto" index="04" kicker="TRANSMISIÓN" enabled={enabled} className="contact shell section-space"><p className="eyebrow">04 / La próxima conexión</p><p className="contact-intro">¿Construimos algo juntos?</p><OutLink className="contact-title" href={linkedin}>HABLEMOS.</OutLink><div className="footer-bottom"><span>© 2026 Carlos Chile Silva<br/><span className="muted">Desde Ecuador, hacia nuevas ideas.</span></span><div className="inline-links"><OutLink href={github}><GithubLogo size={17}/>GitHub</OutLink><OutLink href={linkedin}><LinkedinLogo size={17}/>LinkedIn</OutLink><a href="#inicio">Volver arriba ↑</a></div><span className="footer-monogram">CC<StarMark/></span><span className="footer-signature"><AquariusConstellation/>{identity.birthDate}</span></div></SceneChapter>
  </>
}




