import {
  SiAndroid, SiDocker, SiExpress, SiFastapi, SiGithubactions, SiLangchain,
  SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSqlalchemy,
  SiSupabase, SiTensorflow, SiThreedotjs, SiTypescript, SiVercel,
} from 'react-icons/si'
import { Brain, ChartLine, TestTube } from '@phosphor-icons/react'

export const technologyIcons = {
  Python: SiPython, FastAPI: SiFastapi, LangGraph: SiLangchain, RAG: Brain,
  'TensorFlow.js': SiTensorflow, React: SiReact, TypeScript: SiTypescript,
  'Next.js': SiNextdotjs, 'Node.js': SiNodedotjs, Express: SiExpress,
  PostgreSQL: SiPostgresql, Supabase: SiSupabase, SQLAlchemy: SiSqlalchemy,
  'D3.js': ChartLine, 'Three.js': SiThreedotjs, Docker: SiDocker,
  'GitHub Actions': SiGithubactions, Vercel: SiVercel, Android: SiAndroid,
  Playwright: TestTube,
}

export default function TechnologyConstellation({ tags }) {
  return <div className="technology-constellation" aria-label={`Tecnologías: ${tags.join(', ')}`}>
    <div className="technology-stars">{tags.map((tag, index) => {
      const Icon = technologyIcons[tag] || Brain
      return <span key={tag} className={`tech-star tech-star-${index % 5}`} title={tag} aria-label={tag} tabIndex="0"><Icon weight="duotone" aria-hidden="true" /></span>
    })}</div>
  </div>
}
