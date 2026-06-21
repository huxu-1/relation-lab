import { Assessment } from '@/lib/types';

const relationshipSatisfaction: Assessment = {
  meta: {
    id: 'relationship-satisfaction',
    title: '关系满意度测试',
    subtitle: '你的关系让你满意吗',
    description: '基于Rusbult投资模型理论，从满意度、替代质量、投资规模和承诺水平四个维度评估你的关系健康度——你是在用心经营，还是在随时准备离开？',
    icon: '⚖️',
    category: '关系诊断',
    questionCount: 20,
    estimatedMinutes: 8,
    popularity: 88,
  },
  dimensions: [
    { id: 'satisfaction', name: '满意度', description: '关系中获得的正面体验和快乐程度', color: '#48bb78' },
    { id: 'alternatives', name: '替代质量', description: '离开当前关系后可能获得的其他选择', color: '#ed8936' },
    { id: 'investment', name: '投资规模', description: '在关系中投入的时间、情感和资源', color: '#4299e1' },
    { id: 'commitment', name: '承诺水平', description: '维持关系的决心和长期意愿', color: '#9f7aea' },
  ],
  questions: [
    {
      id: 'q1', text: '总体来说，你对当前的关系感到？',
      options: [
        { id: 'q1a', text: '很满足，这是我想要的关系', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q1b', text: '还行吧，不过有时会想其他的可能性', scores: { satisfaction: 1, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q1c', text: '我已经投入太多，就算不满意也不能轻易放弃', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q1d', text: '无论如何我都要走下去，这是我的选择', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q2', text: '如果现在可以重新选择，你会？',
      options: [
        { id: 'q2a', text: '还是会选择现在的伴侣，我很庆幸遇到他/她', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q2b', text: '可能会犹豫，也许有更好的选择', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q2c', text: '换不了的，我们之间已经有太多连接', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q2d', text: '不管遇到谁我都会认真对待这段关系', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q3', text: '你对"如果分手了会怎样"这个想法？',
      options: [
        { id: 'q3a', text: '不想分手，和他/她在一起比独自好太多', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q3b', text: '偶尔会想，也许独自或换一个人也不错', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q3c', text: '分手代价太大——共同的朋友、财产、回忆太多了', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q3d', text: '我承诺了就不会轻易放弃', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q4', text: '最近你和伴侣相处的时光，让你感觉？',
      options: [
        { id: 'q4a', text: '开心愉快，很享受在一起的每一天', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q4b', text: '有时不错，有时会觉得和别的人在一起也挺好', scores: { satisfaction: 0, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q4c', text: '不算特别开心，但我们一起经历了太多不忍放手', scores: { satisfaction: 0, alternatives: 0, investment: 2, commitment: 1 } },
        { id: 'q4d', text: '不一定每天开心，但我知道这是我们共同的路', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q5', text: '你觉得自己在关系中付出了多少？',
      options: [
        { id: 'q5a', text: '付出了很多，但获得的回报让我很满意', scores: { satisfaction: 3, alternatives: 0, investment: 1, commitment: 0 } },
        { id: 'q5b', text: '付出了不少，有时会想这么付出值得吗', scores: { satisfaction: 0, alternatives: 1, investment: 2, commitment: 0 } },
        { id: 'q5c', text: '付出了非常多，这些付出是我留在关系里的原因', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q5d', text: '付出是选择，不是为了"换回"什么而是因为承诺', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q6', text: '伴侣有哪些让你不满意的地方？',
      options: [
        { id: 'q6a', text: '小缺点而已，不影响我对关系的满意度', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q6b', text: '有些地方确实不够好，别人可能做得更好', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q6c', text: '虽然不满意但我们已经有了太多共同的东西', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q6d', text: '有不满但我选择了包容和坚持', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q7', text: '你幻想过和其他人在一起的生活吗？',
      options: [
        { id: 'q7a', text: '没有，现在的生活就是我想要的', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q7b', text: '偶尔会想，也许另一种生活更精彩', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q7c', text: '想过但觉得换人的成本太高了', scores: { satisfaction: 0, alternatives: 1, investment: 2, commitment: 0 } },
        { id: 'q7d', text: '偶尔想但很快就会回到"我选择了这个人"', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q8', text: '你在这段关系中投入了哪些东西让你不舍得离开？',
      options: [
        { id: 'q8a', text: '不舍得离开是因为和他/她在一起真的很好', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q8b', text: '没什么特别不舍得的东西，走就走了', scores: { satisfaction: 0, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q8c', text: '共同的朋友圈子、生活习惯、经济基础——太多了', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q8d', text: '不舍得不是因为"投入了什么"而是因为"我认定了这个人"', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q9', text: '遇到关系中的困难时，你的反应是？',
      options: [
        { id: 'q9a', text: '积极解决，因为这段关系值得我努力', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 1 } },
        { id: 'q9b', text: '想过是不是该放弃试试其他可能性', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q9c', text: '忍着坚持，因为已经投入了太多不能半途而废', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q9d', text: '迎难而上，承诺了就要坚持到底', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q10', text: '如果有人问你"为什么和这个人在一起"，你的回答？',
      options: [
        { id: 'q10a', text: '"因为和他/她在一起我很快乐很满足"', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q10b', text: '"说实话，有时候我也不知道"', scores: { satisfaction: 0, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q10c', text: '"因为我们一起经历了太多，已经离不开彼此了"', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q10d', text: '"因为我选择了这段关系，就会用心经营"', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q11', text: '你觉得离开现在的伴侣后，生活会是？',
      options: [
        { id: 'q11a', text: '更差——他/她给我带来了很多快乐和安全感', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q11b', text: '可能更好——独自或换个伴侣也许更自由更快乐', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q11c', text: '会很麻烦——要重新开始太费力了', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q11d', text: '不管怎样我都不会离开', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q12', text: '你为这段关系"放弃"过什么？',
      options: [
        { id: 'q12a', text: '放弃了一些东西，但得到的远比放弃的多', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q12b', text: '放弃了不少，有时觉得不值得', scores: { satisfaction: 0, alternatives: 1, investment: 1, commitment: 0 } },
        { id: 'q12c', text: '放弃了很多——事业机会、社交圈、个人空间——这些都是沉没成本', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q12d', text: '放弃是出于选择和承诺，不是"损失"', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q13', text: '伴侣对你表达了不满，你的反应？',
      options: [
        { id: 'q13a', text: '愿意倾听改进，因为他的感受对我很重要', scores: { satisfaction: 2, alternatives: 0, investment: 0, commitment: 1 } },
        { id: 'q13b', text: '会想"是不是有更适合我的人不会这样挑剔"', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q13c', text: '忍着接受，因为我已经投入太多了不能翻脸', scores: { satisfaction: 0, alternatives: 0, investment: 2, commitment: 0 } },
        { id: 'q13d', text: '认真对待，因为承诺意味着共同面对问题', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q14', text: '你对于这段关系的未来？',
      options: [
        { id: 'q14a', text: '充满期待，和他/她的未来让我兴奋', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q14b', text: '不确定，也许未来有其他可能性', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q14c', text: '已经规划了太多共同的东西，未来就是一起走', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q14d', text: '我承诺和他/她共建未来，这是我的决定', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q15', text: '如果你遇到一个比伴侣更"理想"的人？',
      options: [
        { id: 'q15a', text: '没什么想法，现在的伴侣就是最好的', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q15b', text: '会心动，也许该认真考虑其他选择', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q15c', text: '心动但不会行动，因为投资太多放手代价太大', scores: { satisfaction: 0, alternatives: 1, investment: 2, commitment: 0 } },
        { id: 'q15d', text: '不会动摇，因为我选择了这个人就是这个人', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q16', text: '你和伴侣有多少"共同建造"的东西（朋友圈、习惯、回忆等）？',
      options: [
        { id: 'q16a', text: '很多，每一件都让我觉得和他/她在一起真好', scores: { satisfaction: 3, alternatives: 0, investment: 1, commitment: 0 } },
        { id: 'q16b', text: '不多，我们各自的生活比较独立', scores: { satisfaction: 0, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q16c', text: '非常多，这些让我不可能轻易离开', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q16d', text: '还在继续建造中，这是共同的使命', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q17', text: '你觉得自己对这段关系的依赖程度？',
      options: [
        { id: 'q17a', text: '因为满足所以依赖，他/她让我的生活更好', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q17b', text: '不太依赖，如果需要我也能独自过得不错', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q17c', text: '高度依赖——离开他/她我的生活会崩塌', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q17d', text: '依赖是正常的，两个人在一起就是互相依赖', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q18', text: '你对"分手"这个词的态度？',
      options: [
        { id: 'q18a', text: '不接受，我们的关系值得继续', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 1 } },
        { id: 'q18b', text: '不是禁忌选项，如果不满到一定程度可以考虑', scores: { satisfaction: 0, alternatives: 3, investment: 0, commitment: 0 } },
        { id: 'q18c', text: '代价太高了，分手几乎不可能', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q18d', text: '是我主动选择不走这条路', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q19', text: '你觉得维持这段关系最重要的原因是什么？',
      options: [
        { id: 'q19a', text: '和他/她在一起真的让我开心和满足', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q19b', text: '目前没有更好的选择', scores: { satisfaction: 0, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q19c', text: '已经投入了太多，不能白费', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q19d', text: '这是我的承诺和选择，需要原因吗', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
    {
      id: 'q20', text: '如果给这段关系打分，你觉得什么分数最能代表你的心态？',
      options: [
        { id: 'q20a', text: '高分——8-10分，我真的很满足', scores: { satisfaction: 3, alternatives: 0, investment: 0, commitment: 0 } },
        { id: 'q20b', text: '中等——5-6分，还不错但也有犹豫', scores: { satisfaction: 1, alternatives: 2, investment: 0, commitment: 0 } },
        { id: 'q20c', text: '分数不高但不会离开——投入太多不划算', scores: { satisfaction: 0, alternatives: 0, investment: 3, commitment: 0 } },
        { id: 'q20d', text: '分数不重要——承诺就是不管分数高低都继续', scores: { satisfaction: 0, alternatives: 0, investment: 0, commitment: 3 } },
      ],
    },
  ],
  profiles: [
    {
      id: 'happy-committed', name: '幸福满足型', dimensionId: 'satisfaction',
      brief: '你对关系感到高度满足——和他/她在一起让你快乐，这是最健康的关系状态。',
      description: '幸福满足型的人在关系中感到真正的快乐和满足。你不是因为"离不开"或"没有其他选择"才留在关系中，而是因为伴侣真的让你的生活更好。在投资模型中，这是最理想的状态——高满意度让你愿意投入更多，投入又让你更满意，形成正向循环。你不需要"咬牙坚持"也不需要"计算沉没成本"，你只是单纯地想和他/她在一起。',
      traits: ['真心享受和伴侣在一起的每一天', '不是因为"离不开"而是因为"想在一起"', '对关系有积极的期待和信心', '愿意为关系投入更多因为回报让你满意', '不容易被外部诱惑动摇'],
      suggestions: ['幸福满足型是最健康的关系状态——珍惜它', '满意度需要持续维护——不要因为满足就停止投入', '定期和伴侣分享你的感受——对方也需要知道你在关系中是快乐的', '记住：满足不代表完美，继续沟通和成长'],
      compatibilityNotes: [],
    },
    {
      id: 'exploring-alternatives', name: '犹豫观望型', dimensionId: 'alternatives',
      brief: '你对关系不够满意，总在想是否有更好的选择——关系处于不稳定状态。',
      description: '犹豫观望型的人对当前关系不够满足，同时在考虑其他可能性。你可能觉得"还行吧"但经常在想"也许换一个人会更好"。在投资模型中，高替代质量是关系最危险的信号——你不是因为离不开才留下，而是因为暂时没有找到更好的。一旦出现更"理想"的选择，你很可能离开。这不是道德问题而是心理现实：当替代选项看起来更好时，承诺就会动摇。',
      traits: ['经常比较当前伴侣和"理想"的替代选项', '对关系说不清道不明的犹豫感', '容易被新认识的人吸引', '觉得独自生活也没什么不好', '对关系的投入相对谨慎'],
      suggestions: ['犹豫观望型意味着关系需要改善而非放弃', '先想清楚：是你不够满足还是你在追求不存在的"完美"', '认真评估替代选项是否真的更好——想象和现实差距很大', '如果确实不满→先尝试改善关系再考虑离开', '诚实面对伴侣——你的犹豫他/她可能已经感受到了'],
      compatibilityNotes: [],
    },
    {
      id: 'trapped-invested', name: '困于投入型', dimensionId: 'investment',
      brief: '你不是因为满足才留下，而是因为投入太多离开代价太大——这种"依赖"很脆弱。',
      description: '困于投入型的人留在关系中不是因为满足，而是因为离开的代价太高。你们共同的朋友、经济基础、生活习惯、甚至孩子——这些都是"沉没成本"让你无法抽身。在投资模型中，这是最脆弱的依赖方式——一旦替代选项变得足够诱人，或者投资突然不再感觉那么重要（比如孩子长大了），你就可能离开。你不是"选择"留下而是"被迫"留下，这种状态既让你不满又让你无法行动。',
      traits: ['经常感到不满但又觉得自己"离不开"', '提到离开时总是说"代价太大"', '为关系投入了大量时间、情感和资源', '对替代选项持开放态度但行动上不敢尝试', '内心矛盾——既想走又怕走'],
      suggestions: ['困于投入型是关系中最危险的状态——表面稳定内心不满', '认真问自己：如果没有这些投入你还会选择他/她吗', '如果答案是"不会"→关系需要从根本上改善而非靠投入维持', '投入应该是"因为值得所以投入"而非"因为投入了所以不能走"', '考虑和伴侣坦诚沟通——改善关系比靠沉没成本绑住彼此更健康'],
      compatibilityNotes: [],
    },
    {
      id: 'determined-committed', name: '坚定承诺型', dimensionId: 'commitment',
      brief: '你不是因为满足或不满足才留下——你是因为选择了这个人而坚定地走下去。',
      description: '坚定承诺型的人留在关系中不是因为"开心所以不想走"或"投入太多走不了"，而是因为一个更深层的决定——"我选择了这个人，就会用心经营这段关系"。在投资模型中，承诺是最终的稳定力量——即使满意度波动、即使出现更好的替代选项、即使投资还不算太多，承诺让你愿意继续投入和改善。这不是盲目坚持，而是有意识的决心：我知道关系不完美，但我选择了它。',
      traits: ['对关系有坚定的决心而非计算式的权衡', '满意度波动不影响你的承诺', '遇到困难选择面对而非逃避', '承诺不是因为"离不开"而是因为"我选择"', '有意识地投入而非被动积累'],
      suggestions: ['坚定承诺型是关系持久的基础，但需要满意度配合', '承诺是骨架，满足是血肉——只有骨架的关系是空的', '不要用承诺替代沟通——不满意的事要说出来', '承诺不是忍让——是选择改善而非选择忍受', '最好的状态是承诺+满足——因为选择所以投入，因为投入所以满足'],
      compatibilityNotes: [],
    },
  ],
  detailedSections: [
    { title: 'Rusbult投资模型', content: 'Caryl Rusbult在1980年提出了投资模型（Investment Model），解释人们为什么留在关系中。模型认为，承诺水平取决于三个因素：满意度（Satisfaction）——关系中获得的正面体验和快乐；替代质量（Quality of Alternatives）——离开当前关系后可能获得的其他选择的好坏程度；投资规模（Investment Size）——在关系中投入的时间、情感、资源、共同建设的东西。承诺 = 满意度 - 替代质量 + 投资规模。当满意度高、替代选项差、投资大时，承诺最强；当满意度低、替代选项好、投资小时，承诺最弱。关键洞察：人们留在关系中可能是因为满足、因为没更好的选择、因为投入太多走不了——这三种原因的稳定性截然不同。只有"因为满足"才是最健康的理由。' },
    { title: '改善关系满意度的路径', content: '无论你属于哪种类型，改善关系的核心是提升满意度：幸福满足型→继续维护，不要因为满足就停止投入；犹豫观望型→先改善关系再考虑其他选项，想象中的替代往往不如现实中的伴侣；困于投入型→从"因为投入所以留下"转向"因为值得所以投入"，改善关系质量而非依赖沉没成本；坚定承诺型→承诺是骨架，满足是血肉，确保骨架有血肉支撑。所有类型的共同建议：满意度是动态的，需要持续维护——定期沟通、共同成长、保持新鲜感。记住：最好的关系不是"离不开"而是"不想离开"。' },
  ],
};

export default relationshipSatisfaction;