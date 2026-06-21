import { Assessment } from '@/lib/types';

const partnerMatching: Assessment = {
  meta: {
    id: 'partner-matching',
    title: '择偶画像测试',
    subtitle: '你真正需要什么样的伴侣',
    description: '基于价值观一致性理论与需求互补模型，从核心价值、生活方式、情感需求、成长方向四个维度描绘你的择偶画像——你知道自己真正需要什么吗？',
    icon: '🎯',
    category: '自我认知',
    questionCount: 20,
    estimatedMinutes: 8,
    popularity: 90,
  },
  dimensions: [
    { id: 'core-values', name: '核心价值', description: '你最看重的人生原则和道德取向', color: '#48bb78' },
    { id: 'lifestyle', name: '生活方式', description: '你对日常生活的节奏和方式的偏好', color: '#ed8936' },
    { id: 'emotional-needs', name: '情感需求', description: '你在关系中需要被满足的情感', color: '#e53e3e' },
    { id: 'growth-direction', name: '成长方向', description: '你希望伴侣在哪个方向与你共同成长', color: '#9f7aea' },
  ],
  questions: [
    {
      id: 'q1', text: '在选择伴侣时，以下哪个对你最重要？',
      options: [
        { id: 'q1a', text: '价值观一致——三观合才是最基础的', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q1b', text: '生活节奏匹配——能一起过日子比什么都实际', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q1c', text: '情感满足——他/她能让我感到被爱和被理解', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q1d', text: '共同成长——两个人一起变得更好', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q2', text: '你对伴侣的物质条件要求？',
      options: [
        { id: 'q2a', text: '不太重要，人品和价值观比收入更重要', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q2b', text: '稳定就好，能一起过舒适的生活就行', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q2c', text: '不在意物质更在意他/她怎么对我', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q2d', text: '更看重他/她的事业心和上进心', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q3', text: '你最受不了伴侣哪种特质？',
      options: [
        { id: 'q3a', text: '虚伪、不诚实——违背我的核心价值观', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q3b', text: '邋遢、生活混乱——我受不了没秩序的生活', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q3c', text: '冷漠、不表达爱——我需要感受到被在乎', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q3d', text: '得过且过、不上进——我需要一个人一起往前走', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q4', text: '理想的周末你们会做什么？',
      options: [
        { id: 'q4a', text: '一起做一些有意义的事——公益活动、深度讨论', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q4b', text: '一起做饭打扫然后放松——日常的温馨感', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q4c', text: '一起聊天分享内心感受——情感连接最重要', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q4d', text: '一起学习或运动——做让自己变得更好的事', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q5', text: '伴侣和你意见不一致时你最希望？',
      options: [
        { id: 'q5a', text: '能理性讨论找到共同认可的原则', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q5b', text: '不影响日常生活节奏就好各做各的也行', scores: { 'core-values': 0, lifestyle: 2, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q5c', text: '即使意见不同也能互相理解和支持', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q5d', text: '能在讨论中互相学习对方的视角', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q6', text: '你更看重伴侣的外在还是内在？',
      options: [
        { id: 'q6a', text: '内在——人品价值观决定了他/她是谁', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q6b', text: '外在和内在都要——至少生活品味要合拍', scores: { 'core-values': 0, lifestyle: 2, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q6c', text: '内在——他/她对我的态度和情感最重要', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q6d', text: '内在——上进心和成长意愿决定了未来', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q7', text: '你对独立空间的需求？',
      options: [
        { id: 'q7a', text: '需要自己的空间但价值观层面要高度一致', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q7b', text: '需要规律的生活节奏包括独立的习惯时间', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q7c', text: '情感连接比空间重要——我需要他/她随时在', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q7d', text: '需要空间各自成长然后在一起分享收获', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q8', text: '你认为好的关系应该建立在什么基础上？',
      options: [
        { id: 'q8a', text: '共同的价值观和人生信念', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q8b', text: '日常生活的默契和习惯的兼容', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q8c', text: '彼此的情感满足和安全感', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q8d', text: '互相激励一起成长的动力', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q9', text: '伴侣的事业和家庭选择上，你更倾向？',
      options: [
        { id: 'q9a', text: '看他/她的人品和责任感——选择不重要态度重要', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q9b', text: '要找到一个能和我过稳定日常生活的节奏', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q9c', text: '只要他/她愿意陪伴我理解我，事业家庭都好', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q9d', text: '要有上进心——事业和家庭都需要成长', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q10', text: '你最希望伴侣在哪个方面和你"一致"？',
      options: [
        { id: 'q10a', text: '三观——对人生对世界的基本看法要一致', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q10b', text: '生活习惯——早起还是晚睡、爱出门还是宅家', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q10c', text: '情感需求——都需要被爱的方式和频率', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q10d', text: '成长节奏——学习和进步的速度和方向', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q11', text: '你看到伴侣做了一件让你刮目相看的事，那件事更可能是？',
      options: [
        { id: 'q11a', text: '在道德困境面前做出了正确的选择', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q11b', text: '把生活打理得井井有条让我安心', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q11c', text: '在我最需要的时候默默出现了', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q11d', text: '突破了自己做了以前不敢做的事', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q12', text: '你对"互补"的看法？',
      options: [
        { id: 'q12a', text: '核心价值观必须一致，其他可以互补', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q12b', text: '生活习惯互补好——一个做饭一个打扫', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q12c', text: '情感需求互补——他/她能给我我缺的东西', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q12d', text: '成长方向互补——不同的领域互相带动', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q13', text: '你心目中的"灵魂伴侣"更像？',
      options: [
        { id: 'q13a', text: '三观完全合拍——和他/她聊什么都觉得"对"', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q13b', text: '一起过日子特别舒服——默契到不用说话', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q13c', text: '完全理解我——我不用说他就知道我需要什么', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q13d', text: '互相推动——他/她让我想做更好的自己', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q14', text: '你和伴侣遇到重大决策时你的方式？',
      options: [
        { id: 'q14a', text: '基于共同的价值观来做判断——原则先行', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q14b', text: '看哪种选择能让日常生活更稳定和舒适', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q14c', text: '尊重对方感受做让两人都安心舒心的选择', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q14d', text: '选择那个能让两个人都学到更多成长更多的', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q15', text: '你觉得"合适"最重要的标志是什么？',
      options: [
        { id: 'q15a', text: '三观不冲突——大方向一致', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q15b', text: '生活不摩擦——日常相处很顺畅', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q15c', text: '情感不匮乏——他/她能满足我的核心需求', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q15d', text: '成长不停滞——在一起都在变好', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q16', text: '你对伴侣的朋友圈？',
      options: [
        { id: 'q16a', text: '关心他/她的朋友人品如何——这反映了价值观', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q16b', text: '希望朋友圈和我们生活节奏合拍能一起活动', scores: { 'core-values': 0, lifestyle: 2, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q16c', text: '不在意朋友圈更在意他/她在我身边的情感投入', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q16d', text: '希望朋友圈多元化有正能量——能互相激发成长', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q17', text: '你理想中的吵架结局？',
      options: [
        { id: 'q17a', text: '最终能回到共同的原则底线上来', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q17b', text: '吵完还是得正常过日子不能影响生活', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q17c', text: '吵完要确认对方还在乎我——情感修复最重要', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q17d', text: '吵完两个人都学到什么下次更好', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q18', text: '你觉得最不能"妥协"的是什么？',
      options: [
        { id: 'q18a', text: '核心价值观——做人做事的基本底线不能不一致', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q18b', text: '生活方式——住在一起生活节奏必须合拍', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q18c', text: '情感需求——如果他/她不能满足我核心的爱的需求不行', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q18d', text: '成长意愿——没有上进心得过且过的人我受不了', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q19', text: '你觉得"相似的两个人"vs"互补的两个人"哪个更好？',
      options: [
        { id: 'q19a', text: '价值观要相似其他都好说——根基必须稳固', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q19b', text: '生活方式相似好——日常相处摩擦少', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q19c', text: '情感需求互补好——我缺的他/她有他/她缺的我有', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q19d', text: '成长方向互补好——不同领域互相刺激', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
    {
      id: 'q20', text: '用一句话概括"你对伴侣最核心的需求"？',
      options: [
        { id: 'q20a', text: '"和我看世界的方式一样"', scores: { 'core-values': 3, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q20b', text: '"和我过日子的节奏一样"', scores: { 'core-values': 0, lifestyle: 3, 'emotional-needs': 0, 'growth-direction': 0 } },
        { id: 'q20c', text: '"能让我感到被爱和被理解"', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 3, 'growth-direction': 0 } },
        { id: 'q20d', text: '"能让我想做更好的自己"', scores: { 'core-values': 0, lifestyle: 0, 'emotional-needs': 0, 'growth-direction': 3 } },
      ],
    },
  ],
  profiles: [
    {
      id: 'value-aligned', name: '价值一致型', dimensionId: 'core-values',
      brief: '你最看重三观一致——价值观是你选择伴侣的首要标准，做人做事的原则不能不一致。',
      description: '价值一致型的人择偶最看重核心价值观的一致性。对你来说，三观合拍是关系的根基——如果做人做事的基本看法不一致，其他一切匹配都是表面的。你需要一个和你对世界有相似理解的人：什么是重要的、什么是对的、人生应该怎么过。价值观一致让你们在大方向上不会分歧，也让你们在面对困难时有共同的判断标准。生活方式可以磨合，情感可以培养，但价值观很难改变——所以你把它放在第一位。',
      traits: ['三观合比什么都重要', '人品和责任感是硬性标准', '大方向一致小摩擦可以磨合', '看重对方做人做事的原则', '择偶时最先关注的是价值观'],
      suggestions: ['价值一致型是最稳固的择偶基础——三观合确实比什么都重要', '注意：价值观一致不等于完全一样——核心原则一致即可细节可以不同', '不要因为价值观一致就忽视生活方式和情感需求——这些也需要兼容', '价值观是择偶的门槛而非全部——过关后还需要其他层面的匹配', '好的关系是价值观+生活方式+情感需求+成长方向都基本合拍'],
      compatibilityNotes: [
        { withDimensionId: 'emotional-needs', note: '与情感需求型搭档的潜在冲突：你看重三观他看重被爱——三观合但情感不满足还是会不满' },
      ],
    },
    {
      id: 'lifestyle-compatible', name: '生活合拍型', dimensionId: 'lifestyle',
      brief: '你最看重生活节奏匹配——能一起过舒服的日子，比深度对话和情感满足更实在。',
      description: '生活合拍型的人择偶最看重生活方式的兼容性。对你来说，关系不是抽象的价值观或情感概念，而是每天怎么过日子——早起还是晚睡、爱出门还是宅家、整洁还是随意、勤俭还是享受。你需要一个和你生活节奏合拍的人，让日常相处顺滑无摩擦。价值观可以慢慢磨合，情感可以培养，但生活方式如果不兼容每天的摩擦会让你崩溃。你择偶的标准很实际：能一起过日子比什么都重要。',
      traits: ['生活节奏匹配比三观更重要', '择偶标准很实际——怎么过日子', '受不了生活混乱和不自律', '日常相处的舒适度是核心指标', '比聊人生哲学更喜欢聊今天吃什么做什么'],
      suggestions: ['生活合拍型是最接地气的择偶标准——过日子确实是关系的主要内容', '生活方式可以磨合但需要双方愿意——不要期望对方完全改变', '生活合拍很重要但价值观也不能太冲突——否则大方向会分裂', '日常舒适不等于关系深度——也需要情感连接和共同意义', '最好的关系是既能一起过日子又有精神层面的连接'],
      compatibilityNotes: [
        { withDimensionId: 'growth-direction', note: '与成长方向型搭档的潜在冲突：你想过舒服日子他/她要不停进步——节奏可能不匹配' },
      ],
    },
    {
      id: 'emotion-seeker', name: '情感需求型', dimensionId: 'emotional-needs',
      brief: '你最看重情感满足——被爱、被理解、被在乎的感觉是你在关系中最核心的需求。',
      description: '情感需求型的人择偶最看重情感满足。对你来说，关系中最重要的是"他/她能让我感到被爱和被理解"。价值观可以不完全一致，生活方式可以磨合，但如果情感需求不被满足——如果他/她不表达爱、不理解你、不在乎你的感受——一切都是空的。你需要一个能读懂你情感需求并愿意满足的人。你的择偶标准不是"三观合"或"过日子舒服"而是"和他/她在一起我感到被珍视"。',
      traits: ['最需要的是被爱和被理解', '择偶标准是对方怎么对待我', '情感匮乏会让你迅速离开关系', '比起"能过日子"更需要"能心动"', '容易被对方的关心和温暖打动'],
      suggestions: ['情感需求型是最人性化的择偶标准——爱确实是关系的核心', '但要注意：情感满足不能替代价值观和生活方式的兼容', '不要因为"他/她很爱我"就忽视三观冲突——爱会消退但三观不会', '不要因为情感匮乏就急于进入关系——先确认其他层面也基本合拍', '最好的关系是情感满足+价值观一致+生活合拍+共同成长'],
      compatibilityNotes: [
        { withDimensionId: 'core-values', note: '与价值一致型搭档的潜在冲突：你想要被爱他看重三观——三观合但情感不满足你会很不满' },
      ],
    },
    {
      id: 'growth-partner', name: '成长搭档型', dimensionId: 'growth-direction',
      brief: '你最看重共同成长——你需要一个和你一起往前走的人，而不是安于现状的人。',
      description: '成长搭档型的人择偶最看重成长方向的一致性。对你来说，伴侣不是一个"陪我在原地生活"的人而是"和我一起往前走"的人。你需要对方有上进心、有成长意愿、愿意突破舒适区——因为你也这样。你受不了得过且过、安于现状的人，因为他/她会让你觉得生活没有前进的动力。你的择偶标准不是"三观完美一致"或"生活特别舒服"而是"他/她让我想做更好的自己"。',
      traits: ['最看重上进心和成长意愿', '需要伴侣和你一起往前走', '受不了得过且过和安于现状', '把伴侣当作成长搭档而非依赖对象', '择偶标准包含对方是否激励你进步'],
      suggestions: ['成长搭档型是最有活力的择偶标准——共同成长让关系有持续动力', '但要注意：成长不是比赛——不要用"谁进步更快"来衡量关系', '成长方向一致不等于做同样的事——各自领域互补也能一起成长', '不要因为对方上进就忽视生活方式的兼容——天天进步但日子过不舒服也不行', '最好的成长是两个人互相激励又互相包容——在进步中也有温暖'],
      compatibilityNotes: [
        { withDimensionId: 'lifestyle', note: '与生活合拍型搭档的潜在冲突：你要进步他/她要舒适——成长节奏可能不匹配' },
      ],
    },
  ],
  detailedSections: [
    { title: '择偶的四个核心维度', content: '择偶不是简单的"喜欢不喜欢"而是多层面的匹配。基于价值观一致性理论和需求互补模型，择偶匹配有四个核心维度：核心价值（Core Values）——做人做事的基本原则和信念，这是关系的根基，不一致则大方向分裂；生活方式（Lifestyle）——日常生活的节奏、习惯和偏好，这是关系的主要内容，不兼容则每天摩擦；情感需求（Emotional Needs）——关系中需要被满足的核心情感，不被满足则关系空洞；成长方向（Growth Direction）——人生发展的目标和节奏，不一致则一个人在前进另一个人在原地。关键洞察：每个维度都很重要，但不同人最看重的维度不同——了解你最看重的维度能帮你更精准地择偶，也帮你避免"因为一个维度合拍就忽视其他维度"。最好的关系是四个维度都基本合拍，而非某一个维度完美其他维度严重冲突。' },
    { title: '找到合适伴侣的策略', content: '价值一致型→先筛三观再看其他，人品和责任感是硬性门槛过关后再看生活情感成长；生活合拍型→先体验一起过日子再看其他，生活方式兼容是基础但也需要价值观和情感；情感需求型→先感受他/她怎么对你再看其他，情感满足很重要但不能替代三观和生活方式；成长搭档型→先看他/她的上进心和成长意愿再看其他，成长很重要但也要能一起过日子。所有人的共同建议：四个维度都重要不要只看一个——"三观合但过日子不舒服"或"很爱我但三观冲突"都是问题；知道自己最看重什么也了解自己的底线在哪里——最看重的维度必须合拍，底线维度不能严重冲突；择偶画像不是固定不变的——随着成长你的核心需求可能会变化，定期重新审视自己的择偶画像。' },
  ],
};

export default partnerMatching;