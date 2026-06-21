import { Assessment } from '@/lib/types';

const empathyCapacity: Assessment = {
  meta: {
    id: 'empathy-capacity',
    title: '共情能力测试',
    subtitle: '你理解他人感受的能力有多强',
    description: '基于Davis人际反应指数模型，从观点采择、共情关注、个人痛苦、幻想投射四个维度评估你的共情画像。',
    icon: '🧠',
    category: '能力测评',
    questionCount: 20,
    estimatedMinutes: 8,
    popularity: 86,
  },
  dimensions: [
    { id: 'perspective-taking', name: '观点采择', description: '能够站在他人立场理解其想法和感受', color: '#48bb78' },
    { id: 'empathic-concern', name: '共情关注', description: '对他人的困境产生自然的关心和同情', color: '#ed8936' },
    { id: 'personal-distress', name: '个人痛苦', description: '看到他人受苦时自己也感到焦虑和不适', color: '#e53e3e' },
    { id: 'fantasy', name: '幻想投射', description: '容易代入虚构角色和情境中的情感体验', color: '#4299e1' },
  ],
  questions: [
    {
      id: 'q1', text: '当你看到朋友在社交媒体上发了一条很悲伤的状态，你的第一反应？',
      options: [
        { id: 'q1a', text: '试着从对方的角度理解发生了什么', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q1b', text: '真心为对方担心，想要帮助或安慰', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q1c', text: '自己也变得焦虑不安，不知所措', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q1d', text: '会想象如果自己经历同样的事会多痛苦', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q2', text: '看一部关于苦难的电影时，你通常的反应？',
      options: [
        { id: 'q2a', text: '理性分析角色的处境和动机', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q2b', text: '为角色感到心疼和同情', scores: { 'perspective-taking': 0, 'empathic-concern': 2, 'personal-distress': 0, fantasy: 1 } },
        { id: 'q2c', text: '感到不适甚至想离开，太过沉重了', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q2d', text: '完全沉浸在角色的情感中，仿佛自己就是那个角色', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q3', text: '伴侣跟你抱怨工作中的委屈，你通常会？',
      options: [
        { id: 'q3a', text: '尝试理解对方为什么会有那样的感受，换位思考', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q3b', text: '真心为对方难过，想要安慰和支持', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q3c', text: '自己也变得烦躁不安，心情被带坏了', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q3d', text: '脑海里浮现自己在那个情境下的感受画面', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 2 } },
      ],
    },
    {
      id: 'q4', text: '对于观点跟你完全相反的人，你的态度？',
      options: [
        { id: 'q4a', text: '好奇对方为什么会有那样的观点，想理解背后的逻辑', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q4b', text: '虽然不赞同但尊重对方的立场', scores: { 'perspective-taking': 2, 'empathic-concern': 1, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q4c', text: '感到不舒服，想尽快结束对话', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 2, fantasy: 0 } },
        { id: 'q4d', text: '会代入对方的立场想象如果我持有那个观点会怎样', scores: { 'perspective-taking': 1, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 2 } },
      ],
    },
    {
      id: 'q5', text: '在公共场合看到一个陌生人看起来很痛苦，你会？',
      options: [
        { id: 'q5a', text: '观察判断对方可能遇到了什么情况', scores: { 'perspective-taking': 2, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q5b', text: '内心涌起关心的感觉，想要帮忙', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q5c', text: '自己也变得紧张不安，想要尽快远离', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q5d', text: '想象如果是我自己遭遇那样的事会怎样', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q6', text: '读小说或看剧时，你更容易被什么打动？',
      options: [
        { id: 'q6a', text: '角色的心理变化和成长逻辑', scores: { 'perspective-taking': 2, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 1 } },
        { id: 'q6b', text: '角色之间的温情和关怀场景', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q6c', text: '紧张刺激的场面让我心跳加速不舒服', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q6d', text: '完全代入角色的情感，感觉像是自己的经历', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q7', text: '同事在会议上被领导批评了，你注意到他表情很难过。你会？',
      options: [
        { id: 'q7a', text: '分析领导批评的逻辑是否合理，以及同事可能的心理状态', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q7b', text: '会后主动找他聊几句，表达关心', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q7c', text: '感到紧张不安，害怕自己也可能被批评', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q7d', text: '想象如果是自己被批评会有多难堪', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q8', text: '朋友跟你倾诉他最近的烦恼，但你其实不太理解他为什么这么在意。你会？',
      options: [
        { id: 'q8a', text: '认真尝试理解他的视角，即使我的感受不同', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q8b', text: '虽然不理解但还是表达关心和支持', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q8c', text: '有点烦躁，觉得自己也不开心他还要来影响我', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 2, fantasy: 0 } },
        { id: 'q8d', text: '幻想如果我遇到同样的情况会不会比他反应更大', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q9', text: '伴侣最近一直不开心但不愿说原因，你会？',
      options: [
        { id: 'q9a', text: '通过观察行为和表情推断可能的原因，然后温和地试探', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q9b', text: '默默陪伴在身边，做一些让他开心的小事', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q9c', text: '感到焦虑不安，觉得是不是自己做了什么让他不开心', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q9d', text: '想象各种可能的原因，脑补各种剧情', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q10', text: '你看到新闻里报道了一个灾难事件，你的反应？',
      options: [
        { id: 'q10a', text: '思考灾难对当地人的各方面影响，理性了解情况', scores: { 'perspective-taking': 2, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q10b', text: '为受灾的人感到难过，希望他们能得到帮助', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q10c', text: '感到恐慌不安，担心类似的事会不会发生在自己身边', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q10d', text: '脑海里浮现灾难现场的画面，仿佛身临其境', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q11', text: '你和一个性格完全不同的人合作完成项目，过程中你会？',
      options: [
        { id: 'q11a', text: '主动理解他的工作方式和思维逻辑，找到合作节奏', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q11b', text: '关心他的感受，确保合作中双方都舒适', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q11c', text: '觉得和不同的人合作很不自在，想要快点结束', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q11d', text: '想象如果我是他那种性格的人会怎么处理这个项目', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q12', text: '一个不太熟的人突然对你敞开心扉讲述他的痛苦，你会？',
      options: [
        { id: 'q12a', text: '尝试理解他为什么选择跟你说这些，梳理他的感受脉络', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q12b', text: '虽然不太熟但还是认真倾听，为他感到心疼', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q12c', text: '感到不知所措和尴尬，不知道该怎么回应', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q12d', text: '联想到自己类似的经历，沉浸在那段记忆的情感中', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q13', text: '伴侣的父母对你的态度不太好，你会怎么处理？',
      options: [
        { id: 'q13a', text: '从他们角度理解可能的担忧或偏见，理性分析原因', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q13b', text: '关心伴侣夹在中间的感受，想帮他减轻压力', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q13c', text: '自己变得很焦虑，担心关系会被破坏', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q13d', text: '脑补各种可能的未来发展情节', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q14', text: '你看到路边有一只受伤的小动物，你的反应？',
      options: [
        { id: 'q14a', text: '判断它可能是什么伤，评估最好的处理方式', scores: { 'perspective-taking': 2, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q14b', text: '心疼它，想把它带去治疗或至少给它食物', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q14c', text: '看到受伤的画面觉得很不舒服，想赶紧走开', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q14d', text: '想象如果自己是那只小动物会有多害怕多痛', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q15', text: '在社交聚会上有人讲了一个让你觉得不太舒服的笑话，你会？',
      options: [
        { id: 'q15a', text: '思考为什么他觉得这个笑话好笑，理解他的视角', scores: { 'perspective-taking': 2, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q15b', text: '注意到可能被冒犯的人，关心他们的感受', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q15c', text: '自己感到不舒服和尴尬，想离开这个场合', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q15d', text: '联想到类似的情境和故事中的角色反应', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 2 } },
      ],
    },
    {
      id: 'q16', text: '朋友做了一个你认为很错误的决定，你会？',
      options: [
        { id: 'q16a', text: '尝试理解他做这个决定的逻辑和背后的需求', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q16b', text: '担心这个决定会给他带来不好的后果，想提醒他', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q16c', text: '感到焦虑，怕他出事会影响我或者让我也担心', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 2, fantasy: 0 } },
        { id: 'q16d', text: '想象如果我做了同样的决定会有怎样的故事线展开', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q17', text: '你读到一篇讲述某个群体困境的深度报道，你？',
      options: [
        { id: 'q17a', text: '梳理其中的逻辑和原因，理解社会结构如何造成这些困境', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q17b', text: '被文中人物的故事打动，想要做点什么帮助他们', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q17c', text: '感到压抑沉重，读了一会儿就不想继续了', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q17d', text: '代入文中人物的角色，仿佛亲身经历那些困境', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q18', text: '伴侣想跟你讨论一个你们的分歧，但你觉得很累，你会？',
      options: [
        { id: 'q18a', text: '即使累也尝试理解对方的立场，理性地梳理分歧', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q18b', text: '感受到对方的急切，虽然累但还是耐心陪伴', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q18c', text: '觉得烦躁不安，只想赶紧结束对话', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q18d', text: '在心里想象各种可能的对话走向和结局', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q19', text: '当你得知一个远方的陌生遭遇了不幸，你的感受？',
      options: [
        { id: 'q19a', text: '思考造成不幸的社会和制度原因', scores: { 'perspective-taking': 2, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q19b', text: '虽然不认识但内心为他难过，希望他得到帮助', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q19c', text: '联想到自己可能的处境而感到不安', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 2, fantasy: 1 } },
        { id: 'q19d', text: '脑海中构建起那个陌生人的人生故事画面', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
    {
      id: 'q20', text: '你对"理解一个人"这件事的看法？',
      options: [
        { id: 'q20a', text: '理解意味着能站在对方立场看世界，这是分析过程', scores: { 'perspective-taking': 3, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q20b', text: '理解意味着真心为他着想，这是发自内心的关心', scores: { 'perspective-taking': 0, 'empathic-concern': 3, 'personal-distress': 0, fantasy: 0 } },
        { id: 'q20c', text: '理解意味着我能感受到他的痛苦，这让我也很难受', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 3, fantasy: 0 } },
        { id: 'q20d', text: '理解意味着我能想象他的经历和感受，像在体验他的人生', scores: { 'perspective-taking': 0, 'empathic-concern': 0, 'personal-distress': 0, fantasy: 3 } },
      ],
    },
  ],
  profiles: [
    {
      id: 'rational-understander', name: '理性理解型', dimensionId: 'perspective-taking',
      brief: '你善于站在他人立场思考，但情感共鸣较少——你理解但不一定感同身受。',
      description: '理性理解型的共情画像以观点采择为主导。你擅长换位思考，能够理性地理解对方为什么会有那样的感受和反应。在关系中，你是一个好的"倾听者+分析师"——你能帮伴侣理清思路，但也可能让对方觉得你"理解但不心疼"。你的共情更偏向认知层面而非情感层面，这意味着你不容易被他人的情绪淹没，但有时会显得"冷理性"。',
      traits: ['擅长换位思考和逻辑分析', '能理解他人感受但不一定被感动', '在冲突中能保持冷静理性', '不容易被他人的负面情绪感染', '可能显得过于冷静而缺少温暖'],
      suggestions: ['你的理解能力是宝贵的，但加上情感表达会更温暖', '试着在理解后多说一句"我能感受到你的难过"', '偶尔放下理性防线，让自己被对方的故事打动', '理解+关心=真正的共情，两者缺一不可'],
      compatibilityNotes: [],
    },
    {
      id: 'warm-compassionate', name: '温暖关怀型', dimensionId: 'empathic-concern',
      brief: '你自然地关心他人，容易被他人的困境触动，是关系中的情感港湾。',
      description: '温暖关怀型的共情画像以共情关注为主导。你对他人的困境有自然的同情和关心——不是因为你想象自己经历同样的事，而是因为你真心为他人的遭遇难过。在关系中，你是伴侣的情感港湾，对方知道你不仅会理解，还会心疼。这种共情是关系中最需要的——既温暖又稳定。',
      traits: ['看到他人难过时会自然产生关心', '愿意付出时间和精力帮助他人', '伴侣觉得在你身边被理解和被心疼', '不容易被他人的情绪淹没（区别于个人痛苦型）', '关心是真诚的而非表演式的'],
      suggestions: ['温暖关怀型是关系中最理想的共情模式', '注意不要过度付出而忽略自己的需求', '关心他人的同时也要关心自己——这是可持续的共情', '你的关怀很珍贵，但也要学会设置边界'],
      compatibilityNotes: [],
    },
    {
      id: 'emotional-overwhelmed', name: '情绪过载型', dimensionId: 'personal-distress',
      brief: '他人的痛苦会让你自己也变得焦虑不安——你感同身受但难以自控。',
      description: '情绪过载型的共情画像以个人痛苦为主导。当你看到他人受苦时，你自己也变得焦虑、不安、甚至恐慌。这不是真正的共情——你不是在关心对方，而是在被对方的情绪淹没后产生自我保护的需要。在关系中，伴侣难过时你也会变得烦躁，甚至想逃避。这种"共情"的代价很高：你不仅帮不了对方，连自己也陷入了痛苦。',
      traits: ['他人难过时自己也会焦虑不安', '很难在安慰别人的同时保持自己的稳定', '有时候想远离痛苦的人来保护自己', '情绪容易被传染和放大', '虽然"感同身受"但反应更偏向自我保护'],
      suggestions: ['情绪过载型不是真正的共情——你需要先稳定自己', '学习区分"为他难过"和"自己也变难过"', '建立自我安抚能力：在关注他人前先确认自己的状态', '练习"关心的旁观者"角色：关心但不被淹没', '必要时先给自己空间再回来关心对方'],
      compatibilityNotes: [],
    },
    {
      id: 'imaginative-immersive', name: '沉浸幻想型', dimensionId: 'fantasy',
      brief: '你容易代入虚构情境的情感——丰富的内心世界，但也可能与现实共情脱节。',
      description: '沉浸幻想型的共情画像以幻想投射为主导。你很容易代入小说、电影、故事中的角色情感——仿佛自己就是那个角色在经历那些事。这让你拥有丰富的情感体验和想象力，但在现实中，这种能力可能让你过于沉浸在自己的情感投射中，而非真正关注眼前那个真实的人。在关系中，你可能更擅长想象对方的感受而非直接感知。',
      traits: ['看电影读小说时情感投入极深', '想象力丰富，情感体验细腻', '容易将虚构情感投射到现实关系中', '可能对真实的人的感受不够敏感', '丰富的内心世界但与现实有距离感'],
      suggestions: ['幻想投射能力让你的情感世界丰富，但需要与现实连接', '注意区分"我想象对方会怎样"和"对方实际感觉怎样"', '在关心伴侣时先确认：这是我的想象还是对方的真实感受', '将幻想能力转化为创造力而非替代真实共情', '把丰富的想象力用来理解而非想象——用"如果我是他"来思考而非体验'],
      compatibilityNotes: [],
    },
  ],
  detailedSections: [
    { title: '共情能力的四个维度', content: 'Mark Davis在1980年提出了人际反应指数（IRI），将共情分为四个维度：观点采择（Perspective Taking）——自发地站在他人立场理解其观点的能力；共情关注（Empathic Concern）——对他人遭遇产生自然的同情和关心的情感；个人痛苦（Personal Distress）——在目睹他人受苦时自己也感到焦虑和不安的反应；幻想投射（Fantasy）——将自己代入虚构角色和情境中体验其情感的能力。前两个维度是"健康的共情"，后两个维度可能带来问题——个人痛苦让人被情绪淹没而非真正关心对方，幻想投射让人沉浸于想象而非关注真实的人。' },
    { title: '如何在关系中运用共情', content: '最好的关系共情是观点采择+共情关注的组合：你能理解对方为什么那样感受（认知层面），同时真心为对方的遭遇心疼（情感层面）。如果你偏理性理解型→多表达情感关心，让对方感受到温度；如果你偏温暖关怀型→保持你的关心，但也用理性理解确保你真的"懂"了对方；如果你偏情绪过载型→先学会稳定自己，否则帮不了对方也帮不了自己；如果你偏沉浸幻想型→将想象力用在理解真实的人而非虚构的角色上。共情不是天赋而是技能，所有类型都可以向"理性理解+温暖关怀"的组合发展。' },
  ],
};

export default empathyCapacity;