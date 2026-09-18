import { Brain } from '@phosphor-icons/react'
import { technologyIcons } from './TechnologyConstellation'

export default function StackCarousel({ groups }) {
  const loop = [...groups, ...groups]
  return <div className="stack-carousel" aria-label={`Tecnologías: ${groups.flatMap(group => group.tags).join(', ')}`}>
    <div className="stack-carousel-track">
      {loop.map((group, groupIndex) => <section className="stack-carousel-group" key={`${group.title}-${groupIndex}`} aria-label={group.title}>
        <p>{group.title}</p><div>{group.tags.map(tag => {
          const Icon = technologyIcons[tag] || Brain
          return <span className="stack-carousel-icon" key={tag} title={tag} aria-label={tag} tabIndex="0"><Icon weight="duotone" aria-hidden="true" /><span>{tag}</span></span>
        })}</div>
      </section>)}
    </div>
  </div>
}
