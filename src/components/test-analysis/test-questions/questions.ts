export interface Question {
  id: number
  title: string
  description?: string
  options: {
    id: string
    text: string
    description?: string
    score?: {
      extroversion?: number
      openness?: number
      emotional?: number
      rational?: number
    }
  }[]
}

export const questions: Question[] = [
  {
    id: 1,
    title: "在社交场合中，你通常会？",
    description: "想象一个朋友的生日派对场景",
    options: [
      { 
        id: "a", 
        text: "成为人群的焦点",
        description: "主动带动气氛，与大家互动",
        score: { extroversion: 5, emotional: 3 }
      },
      { 
        id: "b", 
        text: "与熟悉的朋友小范围交谈",
        description: "保持舒适的社交距离",
        score: { extroversion: 3, rational: 3 }
      },
      { 
        id: "c", 
        text: "安静地观察他人互动",
        description: "享受独处的时光",
        score: { rational: 4, openness: 3 }
      },
      { 
        id: "d", 
        text: "来回穿梭于不同的小群体",
        description: "��活调整社交方式",
        score: { openness: 4, extroversion: 4 }
      }
    ]
  },
  {
    id: 2,
    title: "面对感情中的分歧时，你倾向于？",
    description: "当你和伴侣产生不同意见时",
    options: [
      { 
        id: "a", 
        text: "直接表达自己的感受",
        description: "让对方明白你的情绪和想法",
        score: { emotional: 4, extroversion: 3 }
      },
      { 
        id: "b", 
        text: "先冷静分析情况",
        description: "理性思考解决方案",
        score: { rational: 5, openness: 2 }
      },
      { 
        id: "c", 
        text: "寻求双方都能接受的妥协",
        description: "注重平衡与和谐",
        score: { emotional: 3, rational: 3 }
      },
      { 
        id: "d", 
        text: "给彼此一些独处的时间",
        description: "等待合适的沟通时机",
        score: { openness: 4, rational: 3 }
      }
    ]
  },
  {
    id: 3,
    title: "当关系遇到挫折时，你会？",
    description: "面对感情中的困难时刻",
    options: [
      { 
        id: "a", 
        text: "积极寻求外界帮助",
        description: "咨询朋友或专业人士",
        score: { extroversion: 4, openness: 3 }
      },
      { 
        id: "b", 
        text: "独自思考解决方案",
        description: "整理思绪和情绪",
        score: { rational: 4, openness: 3 }
      },
      { 
        id: "c", 
        text: "与伴侣深入沟通",
        description: "共同面对和解决问题",
        score: { emotional: 4, extroversion: 3 }
      },
      { 
        id: "d", 
        text: "暂时回避问题",
        description: "等待更好的处理时机",
        score: { emotional: 2, rational: 2 }
      }
    ]
  },
  {
    id: 4,
    title: "你理想中的约会方式是？",
    description: "选择最吸引你的约会场景",
    options: [
      { 
        id: "a", 
        text: "刺激的户外活动",
        description: "如攀岩、滑雪等冒险项目",
        score: { extroversion: 5, openness: 4 }
      },
      { 
        id: "b", 
        text: "安静的文艺活动",
        description: "看展览、听音乐会",
        score: { rational: 3, openness: 4 }
      },
      { 
        id: "c", 
        text: "温馨的居家时光",
        description: "一起做饭、看电影",
        score: { emotional: 4, rational: 2 }
      },
      { 
        id: "d", 
        text: "尝试新奇的体验",
        description: "探索未知的餐厅或活动",
        score: { openness: 5, extroversion: 3 }
      }
    ]
  },
  {
    id: 5,
    title: "在做重要决定时，你通常会？",
    description: "比如规划未来或改变现状时",
    options: [
      { 
        id: "a", 
        text: "跟随内心的直觉",
        description: "相信自己的感觉",
        score: { emotional: 5, openness: 3 }
      },
      { 
        id: "b", 
        text: "详细分析利弊",
        description: "列出清单仔细对比",
        score: { rational: 5, openness: 2 }
      },
      { 
        id: "c", 
        text: "征求他人意见",
        description: "听取多方建议",
        score: { extroversion: 4, rational: 3 }
      },
      { 
        id: "d", 
        text: "尝试不同可能",
        description: "保持选择的灵活性",
        score: { openness: 4, emotional: 3 }
      }
    ]
  },
  {
    id: 6,
    title: "对于未来的规划，你更倾向于？",
    description: "思考人生和关系的发展方向",
    options: [
      { 
        id: "a", 
        text: "制定详细的计划",
        description: "明确的目标和时间表",
        score: { rational: 5, extroversion: 2 }
      },
      { 
        id: "b", 
        text: "保持开放和灵活",
        description: "随机��变，顺其自然",
        score: { openness: 5, emotional: 3 }
      },
      { 
        id: "c", 
        text: "关注当下感受",
        description: "活在当下，享受过程",
        score: { emotional: 4, openness: 3 }
      },
      { 
        id: "d", 
        text: "平衡规划与随性",
        description: "有方向但保持弹性",
        score: { rational: 3, openness: 4 }
      }
    ]
  },
  {
    id: 7,
    title: "在处理矛盾时，你最看重？",
    description: "面对分歧和冲突的态度",
    options: [
      { 
        id: "a", 
        text: "情感的交流",
        description: "重视彼此的感受",
        score: { emotional: 5, extroversion: 3 }
      },
      { 
        id: "b", 
        text: "问题的解决",
        description: "找到实际的解决方案",
        score: { rational: 5, openness: 2 }
      },
      { 
        id: "c", 
        text: "关系的和谐",
        description: "维护长期的关系稳定",
        score: { emotional: 4, rational: 3 }
      },
      { 
        id: "d", 
        text: "个人的成长",
        description: "从矛盾中学习和进步",
        score: { openness: 5, rational: 3 }
      }
    ]
  },
  {
    id: 8,
    title: "你认为理想的感情是？",
    description: "对感情的期待和理解",
    options: [
      { 
        id: "a", 
        text: "激情四射的冒险",
        description: "充满新鲜感和刺激",
        score: { extroversion: 5, openness: 4 }
      },
      { 
        id: "b", 
        text: "稳定可靠的港湾",
        description: "相互信任和依靠",
        score: { rational: 4, emotional: 3 }
      },
      { 
        id: "c", 
        text: "深入的灵魂交流",
        description: "精神层面的契合",
        score: { emotional: 5, openness: 3 }
      },
      { 
        id: "d", 
        text: "共同成长的旅程",
        description: "互相支持和进步",
        score: { openness: 4, rational: 3 }
      }
    ]
  }
] 