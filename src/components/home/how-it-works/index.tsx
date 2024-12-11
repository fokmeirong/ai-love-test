import { GeistSans } from 'geist/font/sans'

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`${GeistSans.className} text-3xl font-semibold text-center mb-16`}>
          三步开启你的情感解析之旅
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative p-6 bg-gray-50 rounded-xl">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className="mb-4">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">选择测试类型</h3>
            <p className="text-gray-600">
              单人成长测试 / 双人匹配测试
            </p>
            <p className="text-sm text-gray-500 mt-2">
              耗时：1分钟
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 bg-gray-50 rounded-xl">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className="mb-4">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">完成趣味测试</h3>
            <p className="text-gray-600">
              简单有趣的心理测试题
            </p>
            <p className="text-sm text-gray-500 mt-2">
              耗时：3分钟
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 bg-gray-50 rounded-xl">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className="mb-4">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">获取专业报告</h3>
            <p className="text-gray-600">
              AI深度分析 + 专业建议
            </p>
            <p className="text-sm text-gray-500 mt-2">
              耗时：1分钟
            </p>
          </div>
        </div>

        {/* Connecting Lines - Only show on desktop */}
        <div className="hidden md:block">
          <div className="absolute left-1/3 top-1/2 w-1/3 h-0.5 bg-gradient-to-r from-purple-600/20 to-purple-400/20"></div>
          <div className="absolute left-2/3 top-1/2 w-1/3 h-0.5 bg-gradient-to-r from-purple-400/20 to-purple-200/20"></div>
        </div>
      </div>
    </section>
  )
} 