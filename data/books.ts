// 每个测评的推荐书籍
// 京东联盟链接占位 — 注册京粉后替换为推广链接 (格式: https://u.jd.com/xxxxx)

export interface BookRecommendation {
  title: string;
  author: string;
  description: string;
  jdUrl: string;
}

export const bookRecommendations: Record<string, BookRecommendation[]> = {
  'attachment-style': [
    {
      title: '依恋的形成',
      author: '[美] 卡伦·霍妮',
      description: '深入解析依恋模式的形成根源，帮助你理解为什么你在亲密关系中总是重复同样的模式。',
      jdUrl: 'https://search.jd.com/Search?keyword=依恋的形成',
    },
    {
      title: '安全的旅程',
      author: '[美] 丹尼尔·西格尔',
      description: '从神经科学角度解读依恋如何塑造大脑，提供从非安全型走向安全型的实践路径。',
      jdUrl: 'https://search.jd.com/Search?keyword=安全的旅程+依恋',
    },
  ],
  'love-language': [
    {
      title: '爱的五种语言',
      author: '[美] 盖瑞·查普曼',
      description: '本书是"爱的语言"理论的原始出处，教你识别自己和伴侣的表达方式，让爱不再被误解。',
      jdUrl: 'https://search.jd.com/Search?keyword=爱的五种语言+查普曼',
    },
  ],
  'relationship-satisfaction': [
    {
      title: '幸福的婚姻',
      author: '[美] 约翰·戈特曼',
      description: '戈特曼基于40年婚姻研究，揭示幸福婚姻的7个法则，帮你系统提升关系满意度。',
      jdUrl: 'https://search.jd.com/Search?keyword=幸福的婚姻+戈特曼',
    },
  ],
  'breakup-recovery': [
    {
      title: '亲密关系',
      author: '[加] 克里斯多福·孟',
      description: '从关系破裂到自我疗愈，帮助你理性看待分手，找到修复或放下的方向。',
      jdUrl: 'https://search.jd.com/Search?keyword=亲密关系+克里斯多福',
    },
  ],
  'partner-matching': [
    {
      title: '亲密关系',
      author: '[美] 罗兰·米勒',
      description: '心理学经典教材，系统讲解择偶心理学、吸引力法则和匹配机制，帮你科学择偶。',
      jdUrl: 'https://search.jd.com/Search?keyword=亲密关系+罗兰米勒',
    },
  ],
  'sternberg-love-triangle': [
    {
      title: '爱情心理学',
      author: '[美] 罗伯特·斯腾伯格',
      description: '斯腾伯格本人著作，深入讲解爱情三角理论的原始模型，理解亲密、激情与承诺的平衡。',
      jdUrl: 'https://search.jd.com/Search?keyword=爱情心理学+斯腾伯格',
    },
  ],
  'gottman-conflict': [
    {
      title: '爱的博弈',
      author: '[美] 约翰·戈特曼',
      description: '戈特曼"末日四骑士"理论的完整解读，教你识别冲突中的破坏性模式并有效改变。',
      jdUrl: 'https://search.jd.com/Search?keyword=爱的博弈+戈特曼',
    },
  ],
  'empathy-capacity': [
    {
      title: '共情的力量',
      author: '[美] 亚瑟·乔拉米利',
      description: '从心理学角度深入解读共情机制，帮助你在关系中真正理解他人的感受。',
      jdUrl: 'https://search.jd.com/Search?keyword=共情的力量',
    },
  ],
};

// 默认推荐书籍（当测评没有特定推荐时使用）
export const defaultBooks: BookRecommendation[] = [
  {
    title: '亲密关系',
    author: '[美] 罗兰·米勒',
    description: '心理学经典教材，全面讲解亲密关系的形成、维护与修复。',
    jdUrl: 'https://search.jd.com/Search?keyword=亲密关系+罗兰米勒',
  },
];

export function getBooksForAssessment(assessmentId: string): BookRecommendation[] {
  return bookRecommendations[assessmentId] || defaultBooks;
}

// 分享话术配置
export const shareConfig: Record<string, { phrase: string }> = {
  'attachment-style': { phrase: '想了解你身边人的依恋类型吗？' },
  'love-language': { phrase: '想知道你最需要哪种爱的表达吗？' },
  'relationship-satisfaction': { phrase: '你的关系健康度有多高？' },
  'breakup-recovery': { phrase: '理性看待分手，做出最好的选择。' },
  'partner-matching': { phrase: '你和TA的匹配度有多高？' },
  'sternberg-love-triangle': { phrase: '你的爱情属于哪种类型？' },
  'gottman-conflict': { phrase: '你吵架时的破坏性习惯是什么？' },
  'empathy-capacity': { phrase: '你理解他人感受的能力有多强？' },
};

export function getSharePhrase(assessmentId: string): string {
  return shareConfig[assessmentId]?.phrase || '你也来测测吧！';
}
