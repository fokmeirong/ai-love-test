"use client"

import { GeistSans } from 'geist/font/sans'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from '../progress-bar'
import { questions } from './questions'

// interface Question {
//   id: number
//   title: string
//   description?: string
//   options: {
//     id: string
//     text: string
//     description?: string
//   }[]
// }

export default function TestQuestions() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(180) // 3分钟倒计时
  const [isExiting, setIsExiting] = useState(false)

  // 键盘支持
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const optionKeys = ['1', '2', '3', '4']
      const currentOptions = questions[currentQuestion].options
      
      if (optionKeys.includes(e.key) && currentOptions[Number(e.key) - 1]) {
        handleAnswer(questions[currentQuestion].id, currentOptions[Number(e.key) - 1].id)
      }
      
      // 支持返回上一题
      if (e.key === 'Backspace' && currentQuestion > 0) {
        handlePrevQuestion()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentQuestion])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setIsExiting(true)
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1)
        setIsExiting(false)
      }, 300)
    }
  }

  const handleAnswer = (questionId: number, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId }
    setAnswers(newAnswers)
    setIsExiting(true)
    
    // 保存答案到 localStorage
    localStorage.setItem('testAnswers', JSON.stringify(newAnswers))
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
        setIsExiting(false)
      } else {
        router.push('/test/result')
      }
    }, 300)
  }

  const question = questions[currentQuestion]

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col">
      {/* 返回按钮 */}
      <button
        onClick={handlePrevQuestion}
        disabled={currentQuestion === 0}
        className={`
          mt-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors
          ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>返回上一题</span>
      </button>

      {/* Progress Bar */}
      <div className="py-6">
        <ProgressBar 
          current={currentQuestion + 1} 
          total={questions.length}
          timeLeft={timeLeft}
        />
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: isExiting ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isExiting ? 100 : -100 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* Question Title */}
              <h2 className={`${GeistSans.className} text-2xl font-semibold mb-8`}>
                {question.title}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(question.id, option.id)}
                    className={`
                      w-full p-4 rounded-xl text-left transition-all duration-300
                      ${answers[question.id] === option.id
                        ? 'bg-purple-100 border-purple-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                      }
                      border-2
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{index + 1}</span>
                      <div>
                        <div className="font-medium text-gray-900">
                          {option.text}
                        </div>
                        {option.description && (
                          <div className="text-sm text-gray-500 mt-1">
                            {option.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
} 