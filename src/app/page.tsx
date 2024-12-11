import { Metadata } from 'next'
import Hero from '@/components/home/hero'
import Features from '@/components/home/features'
import HowItWorks from '@/components/home/how-it-works'
import CTA from '@/components/home/cta'

export const metadata: Metadata = {
  title: 'AI情感分析 - 解锁你的感情密码',
  description: '5分钟测试，基于心理学原理和AI深度分析，帮你找到最适合的相处方式',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </main>
  )
}