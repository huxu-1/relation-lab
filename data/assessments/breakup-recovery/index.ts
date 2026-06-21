import { Assessment } from '@/lib/types';

const breakupRecovery: Assessment = {
  meta: {
    id: 'breakup-recovery',
    title: '分手修复测试',
    subtitle: '你走出分手阴影了吗',
    description: '基于依恋理论与哀伤阶段模型，从情感执念、自我重建、关系反思、成长转化四个维度评估你的分手修复状态——你是在沉沦、在挣扎、还是在重生？',
    icon: '🌱',
    category: '自我成长',
    questionCount: 20,
    estimatedMinutes: 8,
    popularity: 85,
  },
  dimensions: [
    { id: 'attachment-lingering', name: '情感执念', description: '对前任的情感依赖和思念程度', color: '#e53e3e' },
    { id: 'self-rebuilding', name: '自我重建', description: '重新建立独立自我和生活秩序的进展', color: '#48bb78' },
    { id: 'relationship-reflection', name: '关系反思', description: '对过去关系客观分析和理解的深度', color: '#4299e1' },
    { id: 'growth-transformation', name: '成长转化', description: '从分手中获得成长和走向新阶段的程度', color: '#9f7aea' },
  ],
  questions: [
    {
      id: 'q1', text: '你现在还会想起前任吗？',
      options: [
        { id: 'q1a', text: '经常想，他/她的影子无处不在', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q1b', text: '偶尔想，但已经开始有了自己的生活节奏', scores: { 'attachment-lingering': 1, 'self-rebuilding': 2, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q1c', text: '会想但更多是在反思那段关系教会了我什么', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q1d', text: '很少想了，我已经走出来了并开始新的阶段', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q2', text: '你看到前任的社交媒体动态时？',
      options: [
        { id: 'q2a', text: '心跳加速，反复看他/她发了什么有没有新的人', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q2b', text: '看一眼就关了，不想让这影响我正在重建的生活', scores: { 'attachment-lingering': 1, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q2c', text: '会比较平静地想"原来他/她也在过自己的生活"', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q2d', text: '没什么感觉，就像看到一个普通人的动态', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q3', text: '你现在的生活状态怎样？',
      options: [
        { id: 'q3a', text: '一团糟，生活秩序全乱了，每天浑浑噩噩', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q3b', text: '在重新建立——开始健身、社交、找新爱好', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q3c', text: '稳定了，有时会思考那段关系的模式和问题', scores: { 'attachment-lingering': 0, 'self-rebuilding': 1, 'relationship-reflection': 2, 'growth-transformation': 0 } },
        { id: 'q3d', text: '比分手前更好——我知道自己需要什么了', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q4', text: '关于那段关系，你现在能客观地看待吗？',
      options: [
        { id: 'q4a', text: '不能，要么觉得他/她什么都好要么什么都坏', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q4b', text: '正在尝试客观看，但情绪还是会干扰判断', scores: { 'attachment-lingering': 1, 'self-rebuilding': 1, 'relationship-reflection': 1, 'growth-transformation': 0 } },
        { id: 'q4c', text: '能看清了——有好有坏，我们各自有问题', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q4d', text: '看清了，也从中学习了很多关于自己和他人的东西', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 1, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q5', text: '你认为自己从分手中学到了什么？',
      options: [
        { id: 'q5a', text: '什么都没学到，只觉得痛苦和被抛弃', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q5b', text: '学到我需要更独立，不能依赖一个人', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q5c', text: '学到我在关系中的模式和需要改善的地方', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q5d', text: '学到了很多——关于自己、关系和什么对我真正重要', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q6', text: '你还在保留前任的东西吗？',
      options: [
        { id: 'q6a', text: '都留着，不敢扔怕失去最后的连接', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q6b', text: '正在逐步清理，给自己腾出新的空间', scores: { 'attachment-lingering': 1, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q6c', text: '大部分已清理，留下的只是让我反思的东西', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q6d', text: '清理干净了，新的空间新的生活', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q7', text: '你做梦还会梦见前任吗？',
      options: [
        { id: 'q7a', text: '经常梦到，醒来特别难受', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q7b', text: '偶尔梦到但不太影响情绪了', scores: { 'attachment-lingering': 2, 'self-rebuilding': 1, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q7c', text: '很少梦到，偶尔梦到也是在反思场景', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q7d', text: '基本不梦到了，梦境转向新的主题', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q8', text: '你现在的社交状态？',
      options: [
        { id: 'q8a', text: '几乎封闭，不想见人只想窝在家', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q8b', text: '在恢复——开始和朋友出去重建社交', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q8c', text: '正常社交了，和朋友聊到前任时也能冷静', scores: { 'attachment-lingering': 0, 'self-rebuilding': 1, 'relationship-reflection': 2, 'growth-transformation': 0 } },
        { id: 'q8d', text: '社交活跃，在结识新的人新的圈子', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q9', text: '你如何评价那段关系的质量？',
      options: [
        { id: 'q9a', text: '觉得是完美的，只是被他/她毁了', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q9b', text: '不好评价，现在我只想关注自己', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q9c', text: '能看到关系中的问题和我们各自的不足', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q9d', text: '看到了全貌——好的坏的都教会了我很多', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q10', text: '你有没有试图联系前任？',
      options: [
        { id: 'q10a', text: '经常想联系，控制不住刷他/她的动态', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q10b', text: '控制住了没联系，在用自律重建生活', scores: { 'attachment-lingering': 1, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q10c', text: '不想联系了，更需要的是想清楚那段关系', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q10d', text: '完全不想联系，我的生活已经不在那个方向了', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q11', text: '你对"再也不会遇到这样的人"这个想法？',
      options: [
        { id: 'q11a', text: '深信不疑，觉得他/她是唯一的不可替代的', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q11b', text: '开始怀疑这种想法了，也许我值得更好的', scores: { 'attachment-lingering': 0, 'self-rebuilding': 2, 'relationship-reflection': 0, 'growth-transformation': 1 } },
        { id: 'q11c', text: '知道这不是事实——关系模式可以分析，人可以再遇', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q11d', text: '已经放下了这个想法，我相信未来有更好的可能性', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q12', text: '你现在的自我感觉如何？',
      options: [
        { id: 'q12a', text: '很差，觉得自己不够好才被抛弃', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q12b', text: '在恢复，开始做一些让自己有成就感的事', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q12c', text: '能客观看自己了——有自己的优点和需要成长的地方', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q12d', text: '比之前更自信了，分手让我更清楚自己的价值', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q13', text: '你觉得分手是谁的责任？',
      options: [
        { id: 'q13a', text: '全是他的错，或者全是我的错——极端化归因', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q13b', text: '不想想了，我现在更关注自己的事', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q13c', text: '双方都有责任——关系的失败不是一个人的事', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q13d', text: '看清楚了，也明白了自己的部分需要改进，正在改进', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q14', text: '你有没有因为分手而养成新习惯或改变生活方式？',
      options: [
        { id: 'q14a', text: '没有，生活还是在原地踏步甚至倒退了', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q14b', text: '开始了一些新习惯——运动、学习、社交', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q14c', text: '改变了一些，主要是想让自己在关系中不再犯同样的问题', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q14d', text: '有了明显的改变和成长，分手反而成为转折点', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q15', text: '你听到一首关于失恋的歌时？',
      options: [
        { id: 'q15a', text: '眼泪止不住，每句歌词都在描述我', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q15b', text: '有点触动但不会深陷，赶紧切歌继续做事', scores: { 'attachment-lingering': 1, 'self-rebuilding': 2, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q15c', text: '能理性听——歌词描述的情感模式和我经历的有相似有不同', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q15d', text: '像听一个已经过去的故事，有点感慨但不痛了', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q16', text: '你想象未来的恋爱时？',
      options: [
        { id: 'q16a', text: '不想想象，觉得再也不可能有人比前任好', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q16b', text: '没准备好，先把自己的生活搞好再说', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q16c', text: '在想我下次需要避免什么样的关系模式', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q16d', text: '期待下一次，我知道了自己要什么和不要什么', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q17', text: '前任曾出现的地方（餐厅、公园等），你还去吗？',
      options: [
        { id: 'q17a', text: '刻意回避，怕触景生情崩溃', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q17b', text: '在慢慢回去，证明我的生活不因为这些地方停摆', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q17c', text: '能去了，有时会想起那段关系但只是回忆不是痛苦', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q17d', text: '正常去了，这些地方现在是我的而不是他的', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q18', text: '你对分手这件事的接受程度？',
      options: [
        { id: 'q18a', text: '还没接受，觉得不该发生还在等他/她回来', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q18b', text: '在接受了，更多在关注如何重建自己的生活', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q18c', text: '接受了，也在反思为什么会走到分手这一步', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q18d', text: '完全接受了，甚至觉得分手是正确的决定', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q19', text: '朋友提起你的前任时，你的反应？',
      options: [
        { id: 'q19a', text: '很敏感，会难过甚至生气不想听', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q19b', text: '有点不舒服但能控制，然后聊别的话题', scores: { 'attachment-lingering': 1, 'self-rebuilding': 2, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q19c', text: '能聊了，甚至能客观讨论那段关系', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 3, 'growth-transformation': 0 } },
        { id: 'q19d', text: '像聊一个过去的人没什么特别情绪', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
    {
      id: 'q20', text: '你对自己"走出来"这件事的信心？',
      options: [
        { id: 'q20a', text: '没什么信心，觉得自己可能永远走不出来', scores: { 'attachment-lingering': 3, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q20b', text: '有信心但需要时间——正在一步步重建', scores: { 'attachment-lingering': 0, 'self-rebuilding': 3, 'relationship-reflection': 0, 'growth-transformation': 0 } },
        { id: 'q20c', text: '信心十足——我理解了那段关系所以不怕了', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 2, 'growth-transformation': 1 } },
        { id: 'q20d', text: '已经走出来了，这段经历让我更强大', scores: { 'attachment-lingering': 0, 'self-rebuilding': 0, 'relationship-reflection': 0, 'growth-transformation': 3 } },
      ],
    },
  ],
  profiles: [
    {
      id: 'stuck-in-past', name: '困于执念型', dimensionId: 'attachment-lingering',
      brief: '你还在被前任的情感牵制——思念、痛苦、无法释怀，生活还没从分手的冲击中恢复。',
      description: '困于执念型的人还在分手的最早期阶段——情感依赖尚未释放，思念和痛苦占据大部分情绪空间。你可能还在刷前任动态、保留所有物品、回避触景生情的地方。在哀伤阶段模型中，你还在否认和愤怒阶段：或者觉得"不该分手"等对方回来，或者觉得"全是对方的错"愤怒不已。这是分手后最痛苦的阶段，也是修复的起点——承认痛苦是走出来的第一步。',
      traits: ['频繁思念前任，情绪被牵制', '生活秩序被打破还在混乱中', '极端化评价前任（全好或全坏）', '回避触景生情的地方和话题', '觉得自己可能永远走不出来'],
      suggestions: ['承认痛苦是第一步——不要假装"没事"', '设定边界：限制看前任动态的频率和时间', '保留物品可以但不让它占据生活空间', '找信任的朋友或专业人士倾诉', '这个阶段会过去的——给自己时间和耐心'],
      compatibilityNotes: [],
    },
    {
      id: 'rebuilding-self', name: '重建自我型', dimensionId: 'self-rebuilding',
      brief: '你不再沉溺于思念，开始把注意力转向重建自己的生活——健身、社交、新爱好。',
      description: '重建自我型的人已经从最痛苦的阶段走出，正在把能量转向重建自己的生活秩序。你开始健身、恢复社交、尝试新的爱好——这些不是因为"假装没事"而是因为你真的意识到：我的生活不能因为一个人而停滞。在哀伤阶段模型中，你进入了适应期：开始接受分手的事实，开始把注意力从"失去了什么"转向"还能做什么"。这是修复的关键转折点——你在用行动替代思念，用重建替代沉沦。',
      traits: ['不再频繁思念前任了', '开始重建生活秩序和社交', '有意识地培养新习惯和兴趣', '用自律控制情绪波动', '意识到生活不该因一个人而停滞'],
      suggestions: ['重建自我型是走出分手的关键转折点', '重建需要持续投入——不要三天打鱼两天晒网', '注意不要过度填补——用忙碌逃避而不是真正面对', '重建的同时也要适度反思——重建和反思需要交替进行', '享受重建过程中的每一个小进步'],
      compatibilityNotes: [],
    },
    {
      id: 'reflective-analyzer', name: '理性反思型', dimensionId: 'relationship-reflection',
      brief: '你已经能客观看待那段关系——理解了好的和坏的，看清了双方的问题和关系模式。',
      description: '理性反思型的人已经从情感执念中释放出来，能客观地分析那段关系。你不再极端化评价前任——你能看到好的和坏的，也能看到自己的问题和对方的问题。你知道关系不是"他毁了我"或"我不够好"，而是两个不完美的人在一段有问题的关系中互动。这种反思能力让你在下一段关系中能避免同样的模式。这是修复的深层次进展——你不仅走出了一段关系，还理解了它。',
      traits: ['能客观看待前任和那段关系', '理解了双方的问题而非单一归因', '看清了关系中的模式而非只看表面事件', '能讨论那段关系而不被情绪淹没', '知道自己在关系中需要改进什么'],
      suggestions: ['理性反思型让你从分手中获得了最宝贵的东西——理解', '反思不是自责——理解自己的问题是为了改进而非内疚', '把反思转化为行动——在下一段关系中应用你学到的东西', '反思够了就向前看——不要永远停留在"分析过去"', '最好的反思是让你变得更好的反思'],
      compatibilityNotes: [],
    },
    {
      id: 'growth-transformed', name: '成长转化型', dimensionId: 'growth-transformation',
      brief: '分手不再是伤口而是转折点——你从中成长了，更清楚自己要什么，更自信地走向未来。',
      description: '成长转化型的人已经完全从分手中走出来——不仅不再痛苦，反而把分手变成了成长的契机。你比之前更清楚自己要什么、不要什么；更自信因为你知道自己的价值不依附于任何人；更成熟因为你在关系中学会了重要的东西。这不是"假装没事"的虚假乐观，而是真正经历了痛苦→重建→反思→成长的全过程。分手不再是一个伤口而是你人生中的一个转折点——它让你变得更好而非更糟。',
      traits: ['分手不再是痛苦的记忆而是成长的经历', '更清楚自己要什么样的关系和伴侣', '自我价值感更强不再依附于他人', '能在下一段关系中避免同样的模式', '对未来有信心和期待'],
      suggestions: ['成长转化型是分手修复的终点——恭喜你走到了这里', '你的经历可以帮助还在挣扎的人——适时分享你的修复历程', '成长不是终点——继续在新关系中学习和进化', '珍惜你的成长但不要让它变成"我比前任更好"的执念', '成长转化型的人最容易在下一段关系中建立健康的关系'],
      compatibilityNotes: [],
    },
  ],
  detailedSections: [
    { title: '分手修复的四个阶段', content: '分手修复不是一步到位而是循序渐进的过程。基于依恋理论和哀伤阶段模型，修复分为四个维度：情感执念（Attachment Lingering）——对前任的情感依赖尚未释放，思念和痛苦占据情绪空间；自我重建（Self Rebuilding）——开始把注意力从失去转向重建自己的生活秩序；关系反思（Relationship Reflection）——能客观分析那段关系的模式、双方的问题和失败的原因；成长转化（Growth Transformation）——把分手经历转化为成长契机，更清楚自己要什么更自信走向未来。每个人的修复路径不同：有些人先重建再反思，有些人先反思再重建，但最终目标是成长转化——让分手成为转折点而非永远的心理创伤。' },
    { title: '加速修复的实用策略', content: '困于执念型→设定边界（限制看前任动态频率）、保留但整理物品、找信任的人倾诉、承认痛苦而非假装没事；重建自我型→持续投入新习惯（不要三天打鱼两天晒网）、注意不要用忙碌逃避情感、重建和反思交替进行；理性反思型→把反思转化为行动（在下一段关系中应用）、反思够了就向前看不要永远分析过去；成长转化型→适时分享修复经历帮助他人、继续在新关系中学习和进化。所有人的共同建议：允许自己慢——修复没有标准时间线；不要比较——每个人的修复速度不同；寻求帮助——朋友、社群、专业咨询都可以；最终目标不是"忘记"而是"理解并成长"。' },
  ],
};

export default breakupRecovery;