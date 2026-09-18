const props = (className) => ({ className, viewBox: '0 0 100 100', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true, focusable: false })

export function StarMark({ className = '' }) {
  return <svg {...props(className)}><path d="M50 5 57 43 95 50 57 57 50 95 43 57 5 50 43 43Z" fill="currentColor"/></svg>
}

export function AquariusMark({ className = '' }) {
  return <svg {...props(className)}><path d="m12 34 16-13 16 13 16-13 16 13M12 66l16-13 16 13 16-13 16 13" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/></svg>
}

export function AquariusConstellation({ className = '' }) {
  const nodes = [[8,60],[20,49],[32,57],[44,37],[55,46],[65,25],[74,43],[84,35],[91,55],[70,67],[48,73]]
  return <svg {...props(className)}><path d="M8 60 20 49 32 57 44 37 55 46 65 25 74 43 84 35 91 55 70 67 48 73 32 57" stroke="currentColor" strokeWidth="1.5"/><path d="M20 49 44 37M55 46 74 43M48 73 70 67" stroke="currentColor" strokeWidth=".8" opacity=".6"/>{nodes.map(([cx,cy],index)=><circle key={index} cx={cx} cy={cy} r={index===5?3:2} fill="currentColor"/>)}</svg>
}
