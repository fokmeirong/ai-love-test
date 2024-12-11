"use client"

import { GeistSans } from 'geist/font/sans'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface UserInfo {
  gender: string
  age: string
  status: string
}

export default function TestStart() {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: '',
    age: '',
    status: ''
  })

  const handleStartTest = () => {
    // 这里可以添加数据存储逻辑
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    // 导航到测试题目页面
    router.push('/test/questions')
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="bg-white rounded-2xl shadow-sm p-8">
        {/* Header */}
        <h1 className={`${GeistSans.className} text-3xl md:text-4xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500`}>
          3分钟了解你的心理特征
        </h1>
        
        <p className="text-gray-600 text-center mb-12">
          简单几题，快速测试你的情感模式
        </p>

        {/* Quick Info Form */}
        <div className="space-y-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                性别
              </label>
              <select 
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={userInfo.gender}
                onChange={(e) => setUserInfo(prev => ({ ...prev, gender: e.target.value }))}
              >
                <option value="">请选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
                <option value="other">其他</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                年龄段
              </label>
              <select 
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={userInfo.age}
                onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
              >
                <option value="">请选择</option>
                <option value="18-24">18-24岁</option>
                <option value="25-30">25-30岁</option>
                <option value="31-40">31-40岁</option>
                <option value="40+">40岁以上</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                感情状态
              </label>
              <select 
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={userInfo.status}
                onChange={(e) => setUserInfo(prev => ({ ...prev, status: e.target.value }))}
              >
                <option value="">请选择</option>
                <option value="single">单身</option>
                <option value="dating">恋爱中</option>
                <option value="married">已婚</option>
                <option value="other">其他</option>
              </select>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button 
          onClick={handleStartTest}
          className={`
            w-full py-4 rounded-xl text-white text-lg font-medium
            transition-all duration-300
            ${Object.values(userInfo).every(v => v) 
              ? 'bg-gradient-to-r from-purple-600 to-purple-400 hover:shadow-lg hover:scale-[1.02]' 
              : 'bg-gray-300 cursor-not-allowed'
            }
          `}
          disabled={!Object.values(userInfo).every(v => v)}
        >
          开始测试
        </button>

        {/* Additional Info */}
        <div className="mt-6 flex justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>约3分钟完成</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>数据安全保护</span>
          </div>
        </div>
      </div>
    </div>
  )
} 