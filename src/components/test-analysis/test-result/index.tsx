"use client"

import { GeistSans } from 'geist/font/sans'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { 
  calculateScores, 
  getPersonalityType, 
  generateSummary, 
  generateDetails, 
  generateSuggestions 
} from './calculate-result'

// 动态导入雷达图组件，避免SSR问题
const RadarChart = dynamic(() => import('./radar-chart'), { ssr: false })

interface ResultData {
  scores: {
    extroversion: number
    openness: number
    emotional: number
    rational: number
  }
  type: string
  summary: string
  details: {
    title: string
    content: string
  }[]
  suggestions: string[]
}

export default function TestResult() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState<ResultData | null>(null)

  useEffect(() => {
    const answers = localStorage.getItem('testAnswers')
    const userInfo = localStorage.getItem('userInfo')
    
    if (!answers || !userInfo) {
      router.push('/test')
      return
    }

    const parsedAnswers = JSON.parse(answers)
    const scores = calculateScores(parsedAnswers)
    const type = getPersonalityType(scores)

    setResult({
      scores,
      type,
      summary: generateSummary(scores, type),
      details: generateDetails(scores),
      suggestions: generateSuggestions(scores)
    })
    
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">AI正在分析你的测试结果...</p>
        </div>
      </div>
    )
  }

  if (!result) return null

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className={`${GeistSans.className} text-3xl md:text-4xl font-semibold mb-4`}>
          你的情感分析报告
        </h1>
        <p className="text-xl text-gray-600">类型：{result.type}</p>
      </motion.div>

      {/* Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">总体评价</h2>
        <p className="text-gray-600 text-lg">{result.summary}</p>
      </motion.div>

      {/* Radar Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6">维度分析</h2>
        <div className="aspect-square max-w-2xl mx-auto">
          <RadarChart data={result.scores} />
        </div>
        
        {/* 维度说明 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-500" />
            <div>
              <div className="font-medium text-gray-900">外向性</div>
              <div className="text-gray-500 mt-0.5">
                社交活跃度和表达倾向
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-500" />
            <div>
              <div className="font-medium text-gray-900">开放性</div>
              <div className="text-gray-500 mt-0.5">
                对新事物的接受程度
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-500" />
            <div>
              <div className="font-medium text-gray-900">情感性</div>
              <div className="text-gray-500 mt-0.5">
                情感敏感度和表达能力
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-500" />
            <div>
              <div className="font-medium text-gray-900">理性</div>
              <div className="text-gray-500 mt-0.5">
                理性思考和决策能力
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detailed Analysis */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {result.details.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
            <p className="text-gray-600">{detail.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl shadow-sm p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">改善建议</h2>
        <ul className="space-y-4">
          {result.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">•</span>
              <span className="text-gray-600">{suggestion}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => router.push('/test')}
          className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          重新测试
        </button>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:shadow-md transition-shadow">
          分享结果
        </button>
      </div>
    </div>
  )
} 