import { Assessment } from '@/lib/types';

const gottmanConflict: Assessment = {
  meta: { id: 'gottman-conflict', title: '冲突模式测试', subtitle: '你吵架时的破坏性习惯', description: '基于Gottman"末日四骑士"理论，识别你在冲突中的批评、蔑视、防御、冷战倾向——关系破裂的四大预警信号。', icon: '⚡', category: '冲突处理', questionCount: 20, estimatedMinutes: 8, popularity: 80 },
  dimensions: [
    { id: 'criticism', name: '批评', description: '攻击人格而非行为', color: '#ed8936' },
    { id: 'contempt', name: '蔑视', description: '嘲讽翻白眼，暗示对方不如你', color: '#e53e3e' },
    { id: 'defensiveness', name: '防御', description: '拒绝承担责任，反击推卸', color: '#4299e1' },
    { id: 'stonewalling', name: '冷战', description: '沉默回避，情感抽离', color: '#718096' },
  ],
  questions: [
    { id: 'q1', text: '伴侣做了一件让你不满的事，你怎么表达？', options: [
      { id: 'q1a', text: '"你怎么总是这样！你就是个不负责任的人"', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q1b', text: '"呵，你也就这点本事了"', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q1c', text: '"那还不是因为你上次也这样对我！"', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q1d', text: '什么都不说，直接沉默走开', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q2', text: '争吵中伴侣指出你的问题，你的第一反应？', options: [
      { id: 'q2a', text: '反击更大的问题："你自己又有多好？"', scores: { criticism: 1, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q2b', text: '嘲讽："哦，你终于发现了？真是了不起"', scores: { criticism: 0, contempt: 3, defensiveness: 1, stonewalling: 0 } },
      { id: 'q2c', text: '不回应，低头看手机或离开房间', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
      { id: 'q2d', text: '承认部分问题但强调对方责任更大', scores: { criticism: 1, contempt: 0, defensiveness: 2, stonewalling: 0 } },
    ]},
    { id: 'q3', text: '伴侣最让你无法忍受的特质是什么？', options: [
      { id: 'q3a', text: '整个人都有问题——懒惰自私不靠谱', scores: { criticism: 3, contempt: 1, defensiveness: 0, stonewalling: 0 } },
      { id: 'q3b', text: '对方不如我，能力差情商低', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q3c', text: '想不出来，我选择不去想这些', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 2 } },
      { id: 'q3d', text: '某些具体行为让我不满，不是整个人', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 0 } },
    ]},
    { id: 'q4', text: '争吵持续很长时间后，你会怎么做？', options: [
      { id: 'q4a', text: '越说越激动，开始翻旧账攻击对方', scores: { criticism: 2, contempt: 1, defensiveness: 0, stonewalling: 0 } },
      { id: 'q4b', text: '开始嘲讽对方，觉得跟这种人争论太可笑', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q4c', text: '越来越烦躁但觉得都是对方造成的', scores: { criticism: 0, contempt: 0, defensiveness: 2, stonewalling: 1 } },
      { id: 'q4d', text: '不再回应，像关了一扇门把自己封闭起来', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q5', text: '伴侣哭泣或情绪激动时，你的反应？', options: [
      { id: 'q5a', text: '"别演了，你每次都这样博同情"', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q5b', text: '"你哭也没用，问题是你自己造成的"', scores: { criticism: 2, contempt: 1, defensiveness: 0, stonewalling: 0 } },
      { id: 'q5c', text: '觉得对方情绪太麻烦，不回应', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
      { id: 'q5d', text: '"好吧好吧，但我也受了委屈啊"', scores: { criticism: 0, contempt: 0, defensiveness: 2, stonewalling: 0 } },
    ]},
    { id: 'q6', text: '伴侣忘记了你的生日或重要约定，你会？', options: [
      { id: 'q6a', text: '"你从来不记得任何事，你就是不在乎我！"', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q6b', text: '"果然你的脑子里只有你自己"', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q6c', text: '"你忘我也忘，上次我也忘了你的"', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q6d', text: '不提这件事，但内心彻底失望不再期待', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q7', text: '你们在讨论家务分工时出了分歧，你的反应？', options: [
      { id: 'q7a', text: '"你从来不做家务，你就是个懒人"', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q7b', text: '"连这点小事都做不好，还指望你什么"', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q7c', text: '"你说的那些我做了你也没看到"', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q7d', text: '停止讨论，走开去做别的事', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q8', text: '伴侣说你最近不太关心对方，你的反应？', options: [
      { id: 'q8a', text: '"你自己又有多关心我？你从来不关心我的感受"', scores: { criticism: 2, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q8b', text: '"是啊，毕竟你也没什么值得关心的"', scores: { criticism: 0, contempt: 3, defensiveness: 1, stonewalling: 0 } },
      { id: 'q8c', text: '心里不服气但沉默不回应', scores: { criticism: 0, contempt: 0, defensiveness: 1, stonewalling: 3 } },
      { id: 'q8d', text: '想到对方说的也许有道理，但不愿意承认', scores: { criticism: 0, contempt: 0, defensiveness: 2, stonewalling: 0 } },
    ]},
    { id: 'q9', text: '你觉得和伴侣的争吵通常是谁的问题？', options: [
      { id: 'q9a', text: '主要是对方的问题，对方总是做错事', scores: { criticism: 3, contempt: 0, defensiveness: 1, stonewalling: 0 } },
      { id: 'q9b', text: '对方的问题，对方根本不懂怎么处理关系', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q9c', text: '对方引发的，但我不觉得自己有什么问题', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q9d', text: '不想判断谁的错，只想让争吵快点结束', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q10', text: '伴侣做了一顿不太好吃的饭，你的反应？', options: [
      { id: 'q10a', text: '"你做饭总是这么难吃，你就不是会做饭的人"', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q10b', text: '翻白眼笑着说："嗯...还真是你做的水平"', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q10c', text: '"上次你嫌我做的不好，这次我也如实说"', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q10d', text: '默默吃完不怎么说话', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 2 } },
    ]},
    { id: 'q11', text: '争吵时你更常使用什么语气？', options: [
      { id: 'q11a', text: '尖锐指责的语气，用"你总是""你从不"', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q11b', text: '嘲讽讽刺的语气，带着冷笑', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q11c', text: '急躁辩解的语气，急着证明自己没错', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q11d', text: '没什么语气，因为我不怎么说话', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q12', text: '回想你的关系冲突，最常出现的模式是？', options: [
      { id: 'q12a', text: '我指出对方的问题但说得越来越重', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q12b', text: '我心里觉得对方不如我，忍不住表现出优越感', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q12c', text: '我觉得自己是对的，不愿意退让', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q12d', text: '我越来越不想参与，沉默回避', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q13', text: '伴侣的朋友在你们争吵时在场，你会？', options: [
      { id: 'q13a', text: '当着外人指出对方的缺点让对方难堪', scores: { criticism: 2, contempt: 2, defensiveness: 0, stonewalling: 0 } },
      { id: 'q13b', text: '用讽刺让对方在外人面前丢面子', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q13c', text: '假装没事但事后说我没有做错', scores: { criticism: 0, contempt: 0, defensiveness: 2, stonewalling: 1 } },
      { id: 'q13d', text: '完全不回应对方的任何话', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q14', text: '当你心里其实知道自己有错时，你会？', options: [
      { id: 'q14a', text: '很难承认，反而加大力度批评对方来转移焦点', scores: { criticism: 3, contempt: 0, defensiveness: 1, stonewalling: 0 } },
      { id: 'q14b', text: '不屑承认，觉得对方也不配让我认错', scores: { criticism: 0, contempt: 3, defensiveness: 1, stonewalling: 0 } },
      { id: 'q14c', text: '即使知道有错也找理由为自己辩护', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q14d', text: '沉默回避这个话题，不想面对', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q15', text: '伴侣提出一个你觉得不合理的建议，你会？', options: [
      { id: 'q15a', text: '"你每次都提这种不靠谱的东西"', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q15b', text: '"就你的脑子能想出什么好建议"', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q15c', text: '"那你上次那个建议也不怎么样"', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q15d', text: '不回应，假装没听到', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q16', text: '争吵后对方想和解，你的态度？', options: [
      { id: 'q16a', text: '同意和解但顺便再批评一次对方的问题', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q16b', text: '表面上和解但心里觉得对方不值一提', scores: { criticism: 0, contempt: 2, defensiveness: 0, stonewalling: 0 } },
      { id: 'q16c', text: '和解但强调下次对方必须先改', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q16d', text: '和解时也沉默寡言，不愿多说', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 2 } },
    ]},
    { id: 'q17', text: '你觉得你们争吵中最常见的错误是谁的？', options: [
      { id: 'q17a', text: '对方的错——对方总是做不对', scores: { criticism: 2, contempt: 0, defensiveness: 2, stonewalling: 0 } },
      { id: 'q17b', text: '对方的错——对方本身就有问题', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q17c', text: '不是我的错——我有充分的理由', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q17d', text: '不想去分辨——争吵本身就让我想逃离', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q18', text: '你有没有翻白眼或冷笑的习惯？', options: [
      { id: 'q18a', text: '没有，我更多是直接指责', scores: { criticism: 3, contempt: 0, defensiveness: 0, stonewalling: 0 } },
      { id: 'q18b', text: '有，而且觉得这比吵架更有效', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q18c', text: '没有，我更多是为自己辩护', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q18d', text: '没有，我更多是沉默不回应', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q19', text: '争吵中你有没有感觉到心跳加速、呼吸困难？', options: [
      { id: 'q19a', text: '有，但我会更激烈地说下去', scores: { criticism: 2, contempt: 1, defensiveness: 0, stonewalling: 0 } },
      { id: 'q19b', text: '有，但我觉得对方更不值得认真对待', scores: { criticism: 0, contempt: 2, defensiveness: 0, stonewalling: 0 } },
      { id: 'q19c', text: '有，但我觉得必须为自己辩护', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q19d', text: '有，然后我就不想再说了，开始沉默', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
    { id: 'q20', text: '你觉得改变自己的冲突模式有必要吗？', options: [
      { id: 'q20a', text: '需要改变但主要是对方要先改', scores: { criticism: 1, contempt: 0, defensiveness: 2, stonewalling: 0 } },
      { id: 'q20b', text: '不需要，因为我的方式虽然刻薄但有效', scores: { criticism: 0, contempt: 3, defensiveness: 0, stonewalling: 0 } },
      { id: 'q20c', text: '不需要，因为问题不在我的应对方式', scores: { criticism: 0, contempt: 0, defensiveness: 3, stonewalling: 0 } },
      { id: 'q20d', text: '没想过这个问题，争吵让我只想回避', scores: { criticism: 0, contempt: 0, defensiveness: 0, stonewalling: 3 } },
    ]},
  ],
  profiles: [
    { id: 'criticism', name: '批评型', dimensionId: 'criticism', brief: '你倾向于攻击对方的人格而非具体行为。', description: '批评是末日四骑士第一位。Gottman区分了"抱怨"和"批评"——抱怨针对行为（"你没洗碗让我烦"），批评攻击人格（"你从来不考虑别人，就是个自私的人"）。你的冲突从具体不满升级到对人格的全盘否定，让对方感到被否定和羞辱。', traits: ['常用"你总是""你从不"等绝对化表达', '从具体不满上升到人格攻击', '容易翻旧账叠加不满', '让对方感到被否定', '批评后对方很少感到被理解'], suggestions: ['将批评转化为抱怨：针对行为而非人格', '用"我感到"而非"你总是"开头', '每次只说一个具体问题不翻旧账', '表达不满后加上需求："我希望..."'], compatibilityNotes: [] },
    { id: 'contempt', name: '蔑视型', dimensionId: 'contempt', brief: '你的冲突模式最危险——嘲讽、翻白眼、讽刺，暗示对方不如你。', description: '蔑视是末日四骑士中最致命的。Gottman研究发现蔑视是预测离婚最准确的指标。你站在更高位置俯视对方，通过嘲讽、挖苦、翻白眼暗示对方不如你。传递的信息不是"你做错了"而是"你不值得尊重"。', traits: ['经常使用讽刺挖苦', '说话时翻白眼或冷笑', '模仿对方语气嘲讽', '内心觉得对方不如自己', '对方表达脆弱时也可能嘲笑'], suggestions: ['蔑视最破坏关系，必须优先改变', '建立尊重习惯——即使不满也尊重人格', '每天找一个对方让你欣赏的特质', '想嘲讽时暂停3秒改用直白表达'], compatibilityNotes: [] },
    { id: 'defensiveness', name: '防御型', dimensionId: 'defensiveness', brief: '你拒绝承担责任，反击或推卸，将问题归咎于对方。', description: '防御是末日四骑士第三位。被指出问题时你的本能反应不是承担责任而是反击、推卸、否认。"那是因为你...""我没有...""你比我还..."是防御的典型表达，让对方感到无法与你沟通。往往是被批评或蔑视触发后的反应。', traits: ['被指出问题时第一反应是反击', '常用"那是因为你先..."推卸', '即使有错也难以承认', '觉得自己是受害者', '否认对方的感受'], suggestions: ['理解防御是被攻击后的本能反应', '练习接受哪怕一小部分责任', '听到不满时先倾听而非反驳', '用"我理解你感到..."替代"但你没看到..."'], compatibilityNotes: [] },
    { id: 'stonewalling', name: '冷战型', dimensionId: 'stonewalling', brief: '你在冲突中沉默回避，像关上了一扇门。', description: '冷战是末日四骑士第四位。冲突激烈时你的反应是"关机"——不再回应、沉默、离开、看手机，情感完全抽离。Gottman发现冷战通常发生在心率超过100 bpm时——身体进入"洪水"状态，无法继续处理信息，所以选择逃避。这不是"不在乎"而是"受不了了"。', traits: ['冲突激烈时选择沉默', '离开房间或看手机回避', '表情呆滞漠然', '事后假装问题不存在', '内心烦躁但无法表达', '需要很长时间才愿再交流'], suggestions: ['冷战是洪水反应的结果，不是故意回避', '感到洪水反应时主动说"我需要20分钟冷静"', '冷静期间散步深呼吸听音乐降心率', '冷静后回来继续对话——冷战+回来才健康', '让对方理解这是需要缓冲不是不在乎'], compatibilityNotes: [] },
  ],
  detailedSections: [
    { title: 'Gottman末日四骑士理论', content: 'John Gottman在"爱情实验室"通过数十年追踪数千对伴侣，发现了预测关系破裂（准确率94%）的四大破坏性行为：批评（攻击人格而非行为）、蔑视（暗示对方不如自己，最致命）、防御（拒绝责任反击对方）、冷战（情感抽离沉默回避）。对应解毒剂：批评→温和抱怨、蔑视→欣赏尊重、防御→承担责任、冷战→自我安抚后重新参与。' },
    { title: '从四骑士走向健康冲突', content: '识别你的主导四骑士是改变第一步。然后练习解毒剂：批评型→用"我感到...我希望"替代"你总是...你从不"；蔑视型→建立欣赏习惯记录对方积极特质；防御型→先承认一小部分责任再表达感受；冷战型→识别洪水反应主动暂停并约定回来时间。关键是能更快识别并转向健康模式。' },
  ],
};

export default gottmanConflict;