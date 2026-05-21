export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F5F1E6] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 relative">
          <img src="/assets/logo.png" alt="SaxalWér" className="w-full h-full object-contain animate-pulse" />
        </div>
        <span className="text-xs text-[#7D5A44]/50 font-light tracking-widest uppercase">SaxalWér</span>
      </div>
    </div>
  )
}
