import { GeistSans } from 'geist/font/sans'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-16">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className={`${GeistSans.className} text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500`}>
              AI智能分析你的感情密码
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-normal">
              5分钟测试，解锁你的感情潜力
            </p>
            
            <p className="text-gray-600">
              基于心理学原理，结合AI深度分析
              <br />
              帮你找到最适合的相处方式
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              立即免费测试
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>10000+ 用户信赖</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>95% 匹配准确率</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>3分钟 快速完成</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] hidden lg:block">
            {/* We'll add the 3D scene or illustration here later */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-2xl animate-pulse">
              {/* Placeholder for 3D scene */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 