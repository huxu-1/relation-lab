import { Assessment } from '@/lib/types';

const sternbergLoveTriangle: Assessment = {
  meta: { id: 'sternberg-love-triangle', title: '爱情三角理论测试', subtitle: '你的爱情属于哪种类型', description: '基于Sternberg爱情三角理论，从亲密、激情、承诺三个维度评估你的爱情类型——是浪漫之爱、伴侣之爱、迷恋之爱还是完美之爱？', icon: '🔺', category: '深度解析', questionCount: 18, estimatedMinutes: 7, popularity: 90 },
  dimensions: [
    { id: 'intimacy', name: '亲密感', description: '情感上的亲近、信任和连接', color: '#48bb78' },
    { id: 'passion', name: '激情', description: '生理和情感上的强烈吸引与渴望', color: '#e53e3e' },
    { id: 'commitment', name: '承诺', description: '维持关系的决心和长期规划', color: '#4299e1' },
  ],
  questions: [
    { id: 'q1', text: '你和伴侣在一起时，最享受的是什么？', options: [
      { id: 'q1a', text: '深入交流彼此的想法和感受，感觉被理解', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q1b', text: '身体的亲近和那种心跳加速的感觉', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q1c', text: '知道身边有一个可靠的人，感到踏实', scores: { intimacy: 1, passion: 0, commitment: 3 } },
    ]},
    { id: 'q2', text: '你如何看待这段关系的未来？', options: [
      { id: 'q2a', text: '我们之间很亲密，但未来怎样顺其自然', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q2b', text: '我太迷恋对方了，现在不想想那么远', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q2c', text: '我已经认真考虑过长远规划，这是认真的', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q3', text: '如果伴侣暂时需要离开一段时间，你的感受？', options: [
      { id: 'q3a', text: '会想念我们之间的深度交流和理解', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q3b', text: '会强烈渴望对方在身边，想念那种激情', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q3c', text: '会感到安心，因为我们有坚定的承诺在', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q4', text: '你对伴侣的了解程度如何？', options: [
      { id: 'q4a', text: '我了解对方的内心世界、恐惧和梦想', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q4b', text: '我不需要了解太多，那种吸引力就够了', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q4c', text: '我了解对方的生活习惯和价值观，这很重要', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q5', text: '什么让你觉得这段关系最有价值？', options: [
      { id: 'q5a', text: '彼此之间的信任和情感连接', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q5b', text: '那种让人心跳加速的强烈吸引力', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q5c', text: '我们共同建立的稳定生活和未来规划', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q6', text: '你对"激情消退"这件事的态度？', options: [
      { id: 'q6a', text: '没关系，我们有更深的情感连接支撑', scores: { intimacy: 3, passion: 0, commitment: 1 } },
      { id: 'q6b', text: '非常害怕，激情是我最看重的部分', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q6c', text: '不怕，因为我们的承诺比激情更稳固', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q7', text: '你觉得好的关系中最重要的元素是？', options: [
      { id: 'q7a', text: '能敞开心扉，让对方真正理解你', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q7b', text: '那种无法抗拒的相互吸引力', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q7c', text: '对彼此的忠诚和对未来的信心', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q8', text: '回忆你们最初在一起时，是什么吸引了你？', options: [
      { id: 'q8a', text: '和对方聊天让我感到前所未有的被理解', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q8b', text: '那种说不清的心动和强烈吸引力', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q8c', text: '对方的可靠和认真让我觉得值得托付', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q9', text: '如果关系出现危机，你会依靠什么来度过？', options: [
      { id: 'q9a', text: '我们之间的深层信任和理解不会轻易瓦解', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q9b', text: '对对方的强烈感情让我不愿放弃', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q9c', text: '这是我的选择和承诺，我不会轻易动摇', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q10', text: '你愿意向伴侣分享自己最脆弱的一面吗？', options: [
      { id: 'q10a', text: '愿意，这正是亲密的意义——彼此看见真实的自己', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q10b', text: '不太想，我觉得激情比深度分享更重要', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q10c', text: '会分享，但更多是因为承诺意味着要对彼此坦诚', scores: { intimacy: 1, passion: 0, commitment: 3 } },
    ]},
    { id: 'q11', text: '你们的日常相处中，哪种时刻最多？', options: [
      { id: 'q11a', text: '安静地聊天、散步、分享彼此的一天', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q11b', text: '充满热情的约会、旅行、新鲜体验', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q11c', text: '规律的日常生活——一起做饭、计划周末、安排未来', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q12', text: '你觉得"平淡"的关系是？', options: [
      { id: 'q12a', text: '平淡中有深层的默契和安心，这是亲密的体现', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q12b', text: '太平淡不好，我需要持续的激情和心动', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q12c', text: '平淡是承诺的结果——稳定本身就是幸福', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q13', text: '伴侣做了一件让你感动的事，你的反应？', options: [
      { id: 'q13a', text: '觉得被深深理解了，这就是亲密的力量', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q13b', text: '心跳加速，觉得对方太迷人太有魅力了', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q13c', text: '更确信这就是我要一起走下去的人', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q14', text: '你觉得维持一段长期关系的关键是？', options: [
      { id: 'q14a', text: '持续的情感交流和理解，让彼此越来越近', scores: { intimacy: 3, passion: 0, commitment: 1 } },
      { id: 'q14b', text: '保持新鲜感和激情，不让火花熄灭', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q14c', text: '坚定的承诺和责任感，无论风雨都不动摇', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q15', text: '你觉得"心动"和"安心"哪个更重要？', options: [
      { id: 'q15a', text: '安心更重要，心动的背后需要有真正的理解支撑', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q15b', text: '心动更重要，没有激情的关系只是义务', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q15c', text: '两者都不最重要，最重要的是我对这段关系的决定', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q16', text: '伴侣对你的重要性体现在？', options: [
      { id: 'q16a', text: '是唯一能完全理解我的人，我的情感避风港', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q16b', text: '是我最渴望的人，想到对方就有强烈的冲动', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q16c', text: '是我人生计划中不可或缺的一部分', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q17', text: '如果这段关系结束了，你最不舍的是什么？', options: [
      { id: 'q17a', text: '那种被完全理解和接纳的感觉', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q17b', text: '那种独特的心动和身体上的吸引', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q17c', text: '我们一起建立的一切，和对未来的承诺', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
    { id: 'q18', text: '你理想中的爱情是什么样的？', options: [
      { id: 'q18a', text: '两个人灵魂相通，无论说什么都能被理解', scores: { intimacy: 3, passion: 0, commitment: 0 } },
      { id: 'q18b', text: '永远充满激情和渴望，像初恋一样热烈', scores: { intimacy: 0, passion: 3, commitment: 0 } },
      { id: 'q18c', text: '坚定的选择，共同创造稳定而有意义的生活', scores: { intimacy: 0, passion: 0, commitment: 3 } },
    ]},
  ],
  profiles: [
    { id: 'consummate', name: '完美之爱', dimensionId: 'intimacy', brief: '亲密、激情、承诺三者兼备，这是最理想的爱情类型。', description: 'Sternberg认为完美之爱是爱情三角的终极形态——你同时拥有深厚的亲密连接、持续的激情吸引、和坚定的长期承诺。既感到被深深理解，又保持着心动的感觉，同时对未来有清晰的共识。', traits: ['同时享受深度情感连接和身体吸引', '对关系的未来有坚定且共同的规划', '在亲密和独立间找到健康平衡', '能够坦诚沟通并保持激情', '面对困难时有三层支撑'], suggestions: ['完美之爱需要持续维护，不要因三个维度都好就松懈', '激情维度最容易衰减，需要有意识地创造新鲜体验', '定期与伴侣回顾你们的亲密、激情和承诺状态'], compatibilityNotes: [] },
    { id: 'romantic', name: '浪漫之爱', dimensionId: 'passion', brief: '亲密+激情，但没有承诺。你们相爱但不确定未来。', description: '浪漫之爱是亲密与激情的结合——有深度的情感连接，也有强烈的吸引力，但缺少长期承诺的锚定。常见于关系早期或"只想享受当下"的关系中。', traits: ['感情强烈且真挚', '缺乏对未来的明确规划', '容易在"感觉好"时忽视现实问题', '可能害怕承诺会破坏浪漫感', '享受当下但回避长期话题'], suggestions: ['思考你对承诺的态度——是不需要还是害怕', '浪漫之爱很美好但脆弱，考虑是否需要承诺的支撑', '与伴侣坦诚讨论对未来的期望是否一致'], compatibilityNotes: [] },
    { id: 'companionate', name: '伴侣之爱', dimensionId: 'commitment', brief: '亲密+承诺，但缺少激情。你们更像亲密的朋友和伙伴。', description: '伴侣之爱是亲密与承诺的结合——有深层的理解和信任，也有坚定的长期承诺，但激情已经消退或一直较低。许多长期关系自然演变到这个状态。', traits: ['彼此深度信任和理解', '对关系有坚定的承诺', '缺少心跳加速的激情体验', '关系稳定但可能显得平淡', '更像亲密朋友而非恋人'], suggestions: ['伴侣之爱是长期关系的常见形态，不必为此焦虑', '有意识地创造新体验来重新点燃激情', '小惊喜也能带来心动', '不要完全放弃激情'], compatibilityNotes: [] },
    { id: 'fatuous', name: '迷恋之爱', dimensionId: 'passion', brief: '激情+承诺，但缺少亲密。你们被吸引并做出承诺，但不真正了解对方。', description: '迷恋之爱是激情与承诺的奇怪组合——有强烈的吸引力并且做出了承诺，但缺少深层的亲密理解。常见于"一见钟情后迅速结婚"的情况。', traits: ['对对方有强烈的吸引力', '快速做出承诺决定', '缺乏对对方内心世界的深入了解', '承诺更多基于激情而非理性', '容易被表面特质吸引'], suggestions: ['慢下来，给亲密理解成长的时间和空间', '在做重大决定前确保你真的了解对方', '有意识地培养亲密感——分享内心感受和脆弱'], compatibilityNotes: [] },
  ],
  detailedSections: [
    { title: '爱情三角理论简介', content: 'Sternberg的爱情三角理论认为爱情由三个成分构成：亲密（情感亲近和连接）、激情（强烈吸引和渴望）、承诺（维持关系的决定和计划）。三个成分的不同组合形成7种爱情类型：无爱、喜欢式、迷恋式、空洞式、浪漫式、伴侣式、愚蠢式、完美式。' },
    { title: '如何走向完美之爱', content: '缺少亲密→练习分享内心感受和脆弱，增加深度对话；缺少激情→有意识地创造新鲜体验，小惊喜、新环境都能重新点燃火花；缺少承诺→思考你对未来的真实期望，与伴侣坦诚讨论。关键是在每个维度上都有足够的投入。' },
  ],
};

export default sternbergLoveTriangle;