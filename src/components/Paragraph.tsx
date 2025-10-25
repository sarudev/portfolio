import type { JSXElement } from '../App'

export default function Paragraph({ children }: { children: JSXElement }) {
  return <p className='text-slate-400 leading-relaxed'>{children}</p>
}
