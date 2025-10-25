import type { JSXElement } from '../App'
import { GlowCard } from './GlowEffect'

export default function Tag({ children }: { children: JSXElement }) {
  return <GlowCard className='inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400'>{children}</GlowCard>
}
