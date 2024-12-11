import { questions } from '../test-questions/questions'

interface Answer {
  [key: number]: string
}

interface Scores {
  extroversion: number
  openness: number
  emotional: number
  rational: number
}

export function calculateScores(answers: Answer): Scores {
  // 初始化分数
  const scores = {
    extroversion: 0,
    openness: 0,
    emotional: 0,
    rational: 0
  }
  
  // 计算每个维度的得分
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find(q => q.id === parseInt(questionId))
    if (!question) return
    
    const option = question.options.find(opt => opt.id === answerId)
    if (!option?.score) return
    
    // 累加各维度分数
    Object.entries(option.score).forEach(([dimension, score]) => {
      if (dimension in scores) {
        scores[dimension as keyof Scores] += score
      }
    })
  })
  
  // 将分数标准化到0-100
  const maxPossibleScore = questions.length * 5 // 假设每题最高5分
  Object.keys(scores).forEach(key => {
    scores[key as keyof Scores] = Math.round((scores[key as keyof Scores] / maxPossibleScore) * 100)
  })
  
  return scores
}

type PersonalityType = 
  | '热情开朗型'
  | '社交探索型'
  | '领导决策型'
  | '创意感性型'
  | '开放思考型'
  | '平衡全面型'
  | '平衡发展型'

const typeMap: Record<string, PersonalityType> = {
  'extroversion,emotional': '热情开朗型',
  'extroversion,openness': '社交探索型',
  'extroversion,rational': '领导决策型',
  'openness,emotional': '创意感性型',
  'openness,rational': '开放思考型',
  'emotional,rational': '平衡全面型'
}

export function getPersonalityType(scores: Scores): PersonalityType {
  const dominantTraits = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 2)
    .map(([trait]) => trait)

  return typeMap[dominantTraits.join(',')] || '平衡发展型'
}

export function generateSummary(scores: Scores, type: string): string {
  const summaries: Record<PersonalityType, string> = {
    '热情开朗型': '你是一个充满活力和热情的人，善于表达情感，乐于与他人互动。在感情中，你倾向于主动表达爱意，创造温暖的氛围。',
    '社交探索型': '你善于在社交中寻找新的可能性，乐于尝试不同的交往方式。你的开放态度让你能够建立广泛而有趣的人际关系。',
    '领导决策型': '你具有较强的决策能力和领导意识，善于在感情中把握方向。你的理性思维帮助你在关系中保持清晰的判断。',
    '创意感性型': '你富有创造力和同理心，能够敏锐地捕捉他人的情感需求。你在感情中既重视创新，也注重情感的深度连接。',
    '开放思考型': '你善于理性分析同时保持开放态度，能够客观看待感情中的各种可能性。你的思维方式有助于处理复杂的情感问题。',
    '平衡全面型': '你在感性和理性之间找到了良好的平衡，能够灵活应对不同的情感场景。你的全面发展让你在感情中表现得更加成熟。',
    '平衡发展型': '你在各个维度上都表现出均衡的特质，这种平衡使你能够以更包容的心态面对感情。你善于在不同场合展现适当的一面。'
  }

  return summaries[type as PersonalityType] || summaries['平衡发展型']
}

export function generateDetails(scores: Scores) {
  return [
    {
      title: '社交特质',
      content: scores.extroversion > 70 
        ? '你在社交场合表现活跃，善于建立新的人际关系。'
        : scores.extroversion > 40
        ? '你能够在需要时展现社交能力，同时也享受独处的时光。'
        : '你倾向于深度的社交关系，更喜欢小范围的交往。'
    },
    {
      title: '思维方式',
      content: scores.rational > scores.emotional
        ? '你倾向于用理性和逻辑来分析问题，这有助于你做出明智的决定。'
        : '你重视感受和直觉，这让你能够更好地理解他人的情感需求。'
    },
    {
      title: '创新倾向',
      content: scores.openness > 70
        ? '你对新事物充满好奇，乐于尝试不同的可能性。'
        : scores.openness > 40
        ? '你在保持稳定的同时也愿意接受适度的改变。'
        : '你更看重稳定和可预测性，这让你在关系中更有安全感。'
    }
  ]
}

export function generateSuggestions(scores: Scores): string[] {
  const suggestions: string[] = []

  if (scores.extroversion < 60) {
    suggestions.push('适当参与更多社交活动，扩展人际圈')
  }
  if (scores.openness < 60) {
    suggestions.push('尝试接触新的事物和体验，增加生活的多样性')
  }
  if (scores.emotional < 60) {
    suggestions.push('多关注自己和他人的情感需求，提升情感表达能力')
  }
  if (scores.rational < 60) {
    suggestions.push('在重要决定前，试着列出利弊进行分析')
  }

  // 添加通用建议
  suggestions.push(
    '保持开放和包容的心态，接纳不同的观点',
    '在关系中保持真诚的沟通和理解'
  )

  return suggestions
} 