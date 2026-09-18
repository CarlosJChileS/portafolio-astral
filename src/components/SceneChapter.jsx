import { motion } from 'motion/react'

export default function SceneChapter({ id, index, kicker, enabled, className = '', children }) {
  const motionProps = enabled ? { initial: { opacity: 0, y: 34, scale: .985 }, whileInView: { opacity: 1, y: 0, scale: 1 }, viewport: { once: true, amount: .16 }, transition: { duration: .72, ease: [.05, .7, .1, 1] } } : { initial: false }
  return <motion.section id={id} className={`scene-chapter ${className}`} {...motionProps}>
    <div className="chapter-rail" aria-hidden="true"><span className="chapter-number">{index}</span><span className="chapter-line"/><span className="chapter-flare"/></div>
    <span className="sr-only">Capítulo {index}: {kicker}</span>
    {children}
  </motion.section>
}
