import { Metadata } from 'next'
import TestQuestions from '@/components/test-analysis/test-questions'

export const metadata: Metadata = {
  title: '测试进行中 - AI情感分析',
  description: '正在进行心理特征测试',
}

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <TestQuestions />
    </main>
  )
} 