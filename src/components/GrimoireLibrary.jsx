import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, MagnifyingGlass, X } from '@phosphor-icons/react'
import { useMemo, useState } from 'react'

const shelves = [
  { id: 'ai', title: 'IA y LLMs', subtitle: 'Modelos, visión y agentes', sigil: 'I' },
  { id: 'data', title: 'Datos', subtitle: 'Mapas, análisis y decisiones', sigil: 'II' },
  { id: 'fullstack', title: 'Full stack', subtitle: 'Sistemas y productos', sigil: 'III' },
  { id: 'mobile', title: 'Móvil', subtitle: 'Experiencias de bolsillo', sigil: 'IV' },
  { id: 'collaboration', title: 'Colaboraciones', subtitle: 'Proyectos de equipo', sigil: 'V' },
]

function shelfFor(project) {
  if (project.shelf) return project.shelf
  if (project.category.includes('Colaboración')) return 'collaboration'
  if (project.category.includes('Móvil')) return 'mobile'
  if (project.category.includes('Datos')) return 'data'
  if (project.category.includes('IA')) return 'ai'
  return 'fullstack'
}

export default function GrimoireLibrary({ projects, enabled, github }) {
  const grouped = useMemo(() => Object.fromEntries(shelves.map(shelf => [shelf.id, projects.filter(project => shelfFor(project) === shelf.id)])), [projects])
  const available = shelves.filter(shelf => grouped[shelf.id].length)
  const [activeShelf, setActiveShelf] = useState(available[0]?.id || 'ai')
  const [query, setQuery] = useState('')
  const active = available.find(shelf => shelf.id === activeShelf) || available[0]
  const pages = (grouped[active?.id] || []).filter(project => `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()))
  function chooseShelf(id) { setActiveShelf(id); setQuery('') }
  if (!pages.length) return null
  return <section className="orbital-library" aria-label="Biblioteca orbital de proyectos">
    <div className="library-heading"><div><p className="eyebrow">ARCHIVO / ÓRBITAS</p><h3>La biblioteca<br/><em>de proyectos.</em></h3></div><p>Las áreas de trabajo orbitan un núcleo. Selecciona una señal para abrir sus proyectos.</p></div>
    <div className="archive-orbit" aria-hidden="true"><span/><i/><i/></div>
    <div className="library-toolbar"><div className="library-filters" role="tablist" aria-label="Filtrar proyectos por área">{available.map(shelf => <button key={shelf.id} role="tab" aria-selected={activeShelf === shelf.id} onClick={() => chooseShelf(shelf.id)}><span>{shelf.sigil}</span>{shelf.title}<small>{grouped[shelf.id].length}</small></button>)}</div><label className="library-search"><MagnifyingGlass size={15}/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar proyecto o tecnología" aria-label="Buscar proyecto o tecnología" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Limpiar búsqueda"><X size={14}/></button>}</label></div>
    <div className="library-results" aria-live="polite"><p className="result-label">{active.title} · {pages.length} {pages.length === 1 ? 'proyecto' : 'proyectos'}</p><AnimatePresence mode="wait" initial={false}>{pages.length ? <motion.div className="project-library-grid" key={`${active.id}-${query}`} initial={enabled ? { opacity: 0, y: 14 } : false} animate={{ opacity: 1, y: 0 }} exit={enabled ? { opacity: 0, y: -10 } : undefined} transition={{ duration: .32, ease: [.2,.65,.3,1] }}>{pages.map((project, index) => <motion.article className="library-card" key={project.repo} initial={enabled ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: .32, delay: Math.min(index * .05, .25) }} whileHover={enabled ? { y: -5 } : undefined}><p className="page-mark">{String(index + 1).padStart(2, '0')} / {project.category}</p><h4>{project.title}</h4><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="page-link" href={project.url || `${github}/${project.repo}`} target="_blank" rel="noreferrer">Abrir repositorio <ArrowUpRight size={18}/></a></motion.article>)}</motion.div> : <motion.div className="library-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><p>No encontré proyectos en esta órbita.</p><button type="button" onClick={() => setQuery('')}>Limpiar búsqueda</button></motion.div>}</AnimatePresence></div>
  </section>
}
