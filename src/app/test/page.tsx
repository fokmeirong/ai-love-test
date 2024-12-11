import { Metadata } from 'next'
import TestStart from '@/components/test-analysis/test-start'

export const metadata: Metadata = {
  title: '3分钟了解你的心理特征 - AI情感分析',
  description: '通过简单的测试，快速了解你的心理特征和情感模式',
}

export default function TestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <TestStart />
    </main>
  )
} 