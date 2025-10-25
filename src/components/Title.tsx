import type { JSXElement } from '../App'

export default function Title({ children }: { children: JSXElement }) {
  return <h2 className='text-4xl md:text-6xl font-bold text-slate-100'>{children}</h2>
}
