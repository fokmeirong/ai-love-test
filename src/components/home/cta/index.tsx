import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-400">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-semibold mb-8">
          开启你的情感觉醒之旅
        </h2>
        <Link 
          href="/test"
          className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          立即免费测试
        </Link>
      </div>
    </section>
  )
} 