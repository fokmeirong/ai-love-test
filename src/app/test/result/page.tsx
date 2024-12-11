import { Metadata } from 'next'
import TestResult from '@/components/test-analysis/test-result'

export const metadata: Metadata = {
  title: '测试结果 - AI情感分析',
  description: '查看你的个性化情感分析报告',
}

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <TestResult />
    </main>
  )
} 