import { Assessment } from '@/lib/types';

const attachmentStyle: Assessment = {
  meta: { id: 'attachment-style', title: '依恋风格测试', subtitle: '你在亲密关系中的依恋模式', description: '基于Bartholomew四维度依恋模型，评估你在亲密关系中的依恋倾向。', icon: '🫂', category: '自我认知', questionCount: 24, estimatedMinutes: 10, popularity: 95 },
  dimensions: [
    { id: 'secure', name: '安全型', description: '能够平衡亲密与独立', color: '#48bb78' },
    { id: 'anxious', name: '焦虑型', description: '渴望亲密但担心被抛弃', color: '#ed8936' },
    { id: 'dismissive', name: '回避型', description: '重视独立，保持情感距离', color: '#4299e1' },
    { id: 'fearful', name: '恐惧型', description: '既渴望又害怕，反复挣扎', color: '#e53e3e' },
  ],
  questions: [
    { id: 'q1', text: '当伴侣没有及时回复你的消息时，你通常会怎样？', options: [
      { id: 'q1a', text: '觉得对方可能在忙，等一下就好', scores: { secure: 3, anxious: 0, dismissive: 1, fearful: 0 } },
      { id: 'q1b', text: '开始担心对方是不是不在意我了', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 1 } },
      { id: 'q1c', text: '无所谓，反正我也不怎么需要即时回应', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q1d', text: '既担心不在意，又觉得不该表现出在意', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q2', text: '你觉得在关系中保持自己的独立空间有多重要？', options: [
      { id: 'q2a', text: '很重要，但我也能在亲密和独立间自然切换', scores: { secure: 3, anxious: 0, dismissive: 1, fearful: 0 } },
      { id: 'q2b', text: '没那么重要，我更希望能时刻在一起', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 1 } },
      { id: 'q2c', text: '极其重要，我需要大量独处时间才自在', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q2d', text: '渴望亲密但一旦太近又会想逃开', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q3', text: '伴侣想和你分享内心感受时，你的反应通常是？', options: [
      { id: 'q3a', text: '认真倾听，愿意陪伴对方一起面对', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q3b', text: '很感动但担心自己能否满足对方', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q3c', text: '有点不自在，觉得情感交流太沉重', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q3d', text: '想回应又怕说错话伤害对方', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q4', text: '当关系中出现分歧时，你倾向于怎么处理？', options: [
      { id: 'q4a', text: '坦诚沟通，相信可以找到双方满意的方案', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q4b', text: '很焦虑，担心分歧会导致关系破裂', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q4c', text: '觉得争辩没意义，直接回避或沉默', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q4d', text: '想解决又怕表达会引发更大冲突', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q5', text: '你对"依赖伴侣"这件事的感受是？', options: [
      { id: 'q5a', text: '适度依赖是健康的，我也能给对方安全感', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q5b', text: '很需要依赖，但总担心对方不愿让我依赖', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q5c', text: '不太舒服，更习惯自己解决问题', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q5d', text: '想依赖但怕被嫌弃，所以克制自己', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q6', text: '当你感到脆弱或难过时，你会向伴侣倾诉吗？', options: [
      { id: 'q6a', text: '会的，我知道对方会理解并陪伴我', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q6b', text: '会的，但我需要对方非常积极的回应才安心', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q6c', text: '不会，我更习惯自己消化情绪', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q6d', text: '想倾诉又怕对方觉得我太脆弱', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q7', text: '你如何看待伴侣跟异性朋友交往？', options: [
      { id: 'q7a', text: '正常的社交需要，我信任伴侣', scores: { secure: 3, anxious: 0, dismissive: 1, fearful: 0 } },
      { id: 'q7b', text: '会有些担心，想了解对方跟谁来往', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 1 } },
      { id: 'q7c', text: '无所谓，我也有自己的社交圈', scores: { secure: 1, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q7d', text: '既担心又觉得不该管，内心矛盾', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q8', text: '新认识一个有好感的人时，你通常？', options: [
      { id: 'q8a', text: '自然地表达好感，享受认识新人的过程', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q8b', text: '很快投入感情，期待对方也认真回应', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q8c', text: '保持距离观察，不会轻易投入情感', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q8d', text: '很想靠近但怕被拒绝，犹豫不决', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q9', text: '你对"关系可能会结束"这件事的态度？', options: [
      { id: 'q9a', text: '珍惜当下，不过度焦虑未来', scores: { secure: 3, anxious: 0, dismissive: 1, fearful: 0 } },
      { id: 'q9b', text: '经常担心，反复确认关系的稳定性', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q9c', text: '不太在意，结束了就结束', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q9d', text: '非常害怕，但又觉得早结束也许更好', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q10', text: '伴侣需要长时间出差或离开，你的感受？', options: [
      { id: 'q10a', text: '会想念，但能独立度过这段时间', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q10b', text: '很难熬，每天都想联系确认对方还在意我', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q10c', text: '反而觉得轻松，正好有更多自己的时间', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q10d', text: '想念对方但联系时又觉得尴尬不自然', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q11', text: '你觉得自己值得被爱吗？', options: [
      { id: 'q11a', text: '是的，我有自信和价值感', scores: { secure: 3, anxious: 0, dismissive: 1, fearful: 0 } },
      { id: 'q11b', text: '不确定，需要对方的回应来确认', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q11c', text: '不太在乎别人是否爱我，我靠自己', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q11d', text: '内心觉得自己不够好，不太值得被爱', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q12', text: '当伴侣称赞你时，你的反应？', options: [
      { id: 'q12a', text: '开心地接受，觉得这是自然的', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q12b', text: '很高兴但很快怀疑对方是不是真心说的', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q12c', text: '有点尴尬，不需要对方的认可', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q12d', text: '很想相信但觉得对方可能只是客套', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q13', text: '你表达爱的方式通常是？', options: [
      { id: 'q13a', text: '自然地表达关心和爱意，不觉得别扭', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q13b', text: '大量表达，希望对方也能同样热情回应', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q13c', text: '不太表达，觉得行动比言语重要', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q13d', text: '想表达但总是觉得不自然或怕被拒绝', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q14', text: '分手后你通常的反应？', options: [
      { id: 'q14a', text: '会难过但能理性处理，逐渐走出', scores: { secure: 3, anxious: 0, dismissive: 1, fearful: 0 } },
      { id: 'q14b', text: '很难释怀，反复回忆和自责', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 1 } },
      { id: 'q14c', text: '很快调整，甚至觉得解脱', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q14d', text: '极度痛苦但又觉得也许早该结束', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q15', text: '你认为好的亲密关系中，两个人应该是？', options: [
      { id: 'q15a', text: '两个独立的人选择在一起，互相支持', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q15b', text: '彼此融合，尽量减少距离和差异', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q15c', text: '各过各的，保持清晰的界限', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q15d', text: '想融合又怕失去自我，找不到平衡', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q16', text: '当你和伴侣吵架后，你通常会？', options: [
      { id: 'q16a', text: '冷静下来后主动找对方和解沟通', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q16b', text: '焦虑地等对方来找自己，或反复联系', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q16c', text: '不去管它，等时间自然淡化', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q16d', text: '想和解又怕对方拒绝，犹豫不行动', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q17', text: '对伴侣表达不满时，你更倾向？', options: [
      { id: 'q17a', text: '直接但温和地表达，相信对方能理解', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q17b', text: '会表达但担心对方因此不爱我了', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q17c', text: '尽量不说，觉得表达不满没什么用', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q17d', text: '想说又怕引发冲突，忍着不说', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q18', text: '你觉得自己在关系中是怎样的角色？', options: [
      { id: 'q18a', text: '平等的伙伴，互相尊重和支持', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q18b', text: '需要更多关爱和回应的一方', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q18c', text: '独立的一方，不太需要情感支持', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q18d', text: '不确定，有时需要有时又想逃离', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q19', text: '伴侣突然变得冷淡，你会？', options: [
      { id: 'q19a', text: '温和地询问原因，给对方空间', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q19b', text: '非常焦虑，不断追问对方怎么了', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 1 } },
      { id: 'q19c', text: '也冷淡回应，或不以为意', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q19d', text: '内心恐慌但假装不在意', scores: { secure: 0, anxious: 1, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q20', text: '回忆你过去的关系模式，你发现？', options: [
      { id: 'q20a', text: '大多数关系都比较稳定健康', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q20b', text: '总是我投入更多，对方似乎不够在乎', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q20c', text: '我通常不太投入，关系自然淡化结束', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q20d', text: '关系总是忽冷忽热，让我很疲惫', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q21', text: '当你在关系中感到不安全时，你会？', options: [
      { id: 'q21a', text: '跟伴侣沟通我的感受，寻求理解', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q21b', text: '变得更加黏人，需要更多确认', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q21c', text: '拉开距离，靠自己恢复安全感', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q21d', text: '想要靠近又害怕被推开，左右为难', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q22', text: '关于身体亲密（拥抱、亲吻等），你？', options: [
      { id: 'q22a', text: '自然享受，既给予也接受', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q22b', text: '很渴望，但担心自己是否让对方满意', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q22c', text: '有时觉得过度亲密不舒服', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q22d', text: '渴望亲密但在真正接近时会紧张', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
    { id: 'q23', text: '你更担心关系中发生什么？', options: [
      { id: 'q23a', text: '不太特别担心，相信能一起面对问题', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q23b', text: '最怕被抛弃或对方不再爱我', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q23c', text: '最怕被控制或失去自己的空间', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q23d', text: '既怕被抛弃又怕被控制', scores: { secure: 0, anxious: 1, dismissive: 1, fearful: 3 } },
    ]},
    { id: 'q24', text: '对你来说，最理想的关系状态是？', options: [
      { id: 'q24a', text: '亲密但有各自的空间，信任彼此', scores: { secure: 3, anxious: 0, dismissive: 0, fearful: 0 } },
      { id: 'q24b', text: '全天候在一起，彼此完全融合', scores: { secure: 0, anxious: 3, dismissive: 0, fearful: 0 } },
      { id: 'q24c', text: '保持适度距离，各自独立生活', scores: { secure: 0, anxious: 0, dismissive: 3, fearful: 0 } },
      { id: 'q24d', text: '想要亲密但又不确定自己能承受', scores: { secure: 0, anxious: 0, dismissive: 0, fearful: 3 } },
    ]},
  ],
  profiles: [
    { id: 'secure', name: '安全型依恋', dimensionId: 'secure', brief: '你能在亲密与独立间找到平衡，信任伴侣的同时保持自我。', description: '安全型依恋是最健康的依恋模式。你既能享受亲密又不失去自我，信任伴侣也能给予安全感，冲突时倾向于沟通而非逃避。', traits: ['能自如表达情感需求', '对伴侣的短暂距离不感到威胁', '冲突时倾向于沟通而非逃避', '能在亲密和独立间自然切换', '对关系有稳定的信心', '能接受伴侣的不完美'], suggestions: ['保持你健康的依恋模式', '理解非安全型伴侣的感受，给予耐心', '继续培养自我觉察'], compatibilityNotes: [{ withProfileId: 'anxious', level: 'medium', description: '你能给焦虑型安全感，但需耐心面对反复确认' }, { withProfileId: 'dismissive', level: 'low', description: '回避型的疏离可能让你困惑' }, { withProfileId: 'fearful', level: 'medium', description: '恐惧型需要你更多的稳定性' }] },
    { id: 'anxious', name: '焦虑型依恋', dimensionId: 'anxious', brief: '你渴望深度亲密，但总担心对方不够在乎你。', description: '焦虑型依恋的核心是对亲密的渴望和对被抛弃的恐惧。你高度敏感，容易将伴侣的短暂沉默解读为拒绝，需要频繁确认。', traits: ['对伴侣言行高度敏感', '需要频繁确认对方的爱', '伴侣不在时强烈不安', '倾向过度付出换安全感', '分手后很难释怀', '易陷入追-逃循环'], suggestions: ['觉察焦虑反应，区分真实威胁和内心恐惧', '建立自我安抚习惯，减少对外部确认依赖', '表达需求用"我感到"而非"你总是"', '选择安全型伴侣帮助建立内在安全感'], compatibilityNotes: [{ withProfileId: 'secure', level: 'high', description: '安全型能提供你需要的稳定回应' }, { withProfileId: 'dismissive', level: 'low', description: '会形成痛苦的追-逃循环' }, { withProfileId: 'fearful', level: 'low', description: '两个不安全型互相触发焦虑' }] },
    { id: 'dismissive', name: '回避型依恋', dimensionId: 'dismissive', brief: '你重视独立自主，倾向于保持情感距离。', description: '回避型依恋的核心是对独立的高度重视和对亲密的回避。表面自信洒脱，深层是压抑了情感需求，亲密时本能拉开距离。', traits: ['倾向压抑情感需求', '亲密增加时本能拉开距离', '更重视工作和成就', '难以表达脆弱和依赖', '冲突时沉默或离开', '分手后恢复快但可能未处理情感'], suggestions: ['承认情感需求是正常的而非弱点', '在安全环境练习表达脆弱', '觉察逃离亲密的冲动是自我保护', '给伴侣明确回应节奏减少猜测'], compatibilityNotes: [{ withProfileId: 'secure', level: 'medium', description: '安全型的稳定能让你逐渐放松防御' }, { withProfileId: 'anxious', level: 'low', description: '你的退缩触发对方更大焦虑' }, { withProfileId: 'fearful', level: 'low', description: '两种回避叠加，缺乏深度连接' }] },
    { id: 'fearful', name: '恐惧型依恋', dimensionId: 'fearful', brief: '你既渴望亲密又害怕被伤害，在接近与退缩间反复挣扎。', description: '恐惧型最复杂——同时具有焦虑型和回避型特征，渴望亲密但靠近时又退缩，在"想要"和"害怕"间摇摆，内心充满矛盾。', traits: ['渴望亲密但行为反复退缩', '对伴侣既依赖又怀疑', '容易断崖式抽离', '自我价值感低觉得不值得被爱', '对他人意图高度警觉', '情绪波动大'], suggestions: ['认识到矛盾是创伤保护机制而非本质', '优先考虑心理咨询重建安全感', '建立稳定自我安抚习惯', '提前告知伴侣你的模式减少误解', '避免情绪极端时做重大决定'], compatibilityNotes: [{ withProfileId: 'secure', level: 'medium', description: '安全型的稳定提供安全感但你仍会测试退缩' }, { withProfileId: 'anxious', level: 'low', description: '双方焦虑互相放大' }, { withProfileId: 'dismissive', level: 'low', description: '退缩叠加难以建立连接' }] },
  ],
  detailedSections: [
    { title: '依恋理论简介', content: '依恋理论由Bowlby提出，Bartholomew的四维度模型从自我价值感和他人可信度两个维度将依恋分为四种：安全型（高自我+高他人）、焦虑型（低自我+高他人）、回避型（高自我+低他人）、恐惧型（低自我+低他人）。依恋风格不是固定不变的，通过觉察可以向安全型发展。' },
    { title: '你的依恋风格如何形成', content: '依恋风格主要在早年与照顾者的互动中形成。稳定回应→安全型；不稳定回应→焦虑型；持续拒绝→回避型；既渴望亲近又遭遇伤害→恐惧型。' },
    { title: '如何向安全型发展', content: '1）觉察依恋反应模式；2）建立自我安抚能力；3）通过安全型伴侣或治疗师练习earned security；4）恐惧型和严重焦虑型建议寻求专业心理咨询。' },
  ],
};

export default attachmentStyle;