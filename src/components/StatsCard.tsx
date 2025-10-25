import { GlowCard } from './GlowEffect'

const colors = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400',
  cyan: 'text-cyan-400'
}

export default function StatsCard({ upperText, type, lowerText, color }: { upperText: number; type?: 'number' | 'percent'; lowerText: string; color: keyof typeof colors }) {
  return (
    <GlowCard className='p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-xl transition-all duration-300'>
      <div className={`text-3xl font-bold ${colors[color]} mb-2`}>
        {upperText}
        {type != null && (type === 'number' ? '+' : '%')}
      </div>
      <div className='text-slate-500 text-sm'>{lowerText}</div>
    </GlowCard>
  )
}
