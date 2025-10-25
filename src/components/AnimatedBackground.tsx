export default function AnimatedBackground() {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none'>
      <div className='absolute w-96 h-96 bg-blue-600/5 rounded-full blur-3xl top-0 left-1/4 animate-pulse' style={{ animationDuration: '8s' }}></div>
      <div className='absolute w-96 h-96 bg-purple-600/5 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse' style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className='absolute w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse' style={{ animationDuration: '12s', animationDelay: '4s' }} />
    </div>
  )
}
