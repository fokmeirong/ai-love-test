interface ProgressBarProps {
  current: number
  total: number
  timeLeft: number
}

export default function ProgressBar({ current, total, timeLeft }: ProgressBarProps) {
  const progress = (current / total) * 100

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full bg-gray-100 rounded-full h-4 relative overflow-hidden">
      {/* Progress Fill */}
      <div 
        className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      
      {/* Progress Info */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 text-xs text-white">
        <span>题目 {current}/{total}</span>
        <span>剩余 {formatTime(timeLeft)}</span>
      </div>
    </div>
  )
} 