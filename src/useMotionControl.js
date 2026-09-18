import { useEffect, useState } from 'react'

export function useMotionControl() {
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(preference.matches)
    preference.addEventListener('change', update)
    update()
    return () => preference.removeEventListener('change', update)
  }, [])
  const [visible, setVisible] = useState(() => !document.hidden)
  useEffect(() => {
    const update = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])
  const enabled = !reduced && !paused && visible
  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? 'on' : 'off'
    return () => { delete document.documentElement.dataset.motion }
  }, [enabled])
  return { enabled, paused, setPaused, reduced }
}

