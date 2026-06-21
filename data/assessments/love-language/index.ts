import { Assessment } from '@/lib/types';

const loveLanguage: Assessment = {
  meta: {
    id: 'love-language',
    title: '爱的语言测试',
    subtitle: '发现让你感受被爱的方式',
    description: '基于Chapman五种爱的语言理论，帮你找出自己最需要哪种爱的表达方式——肯定言词、精心时刻、接受礼物、服务行动还是身体接触？',
    icon: '💬',
    category: '沟通理解',
    questionCount: 25,
    estimatedMinutes: 12,
    popularity: 92,
  },
  dimensions: [
    { id: 'words', name: '肯定言词', description: '被赞美、鼓励和认可的话语让你最感动', color: '#48bb78' },
    { id: 'time', name: '精心时刻', description: '全神贯注地在一起，用心陪伴最重要', color: '#ed8936' },
    { id: 'gifts', name: '接受礼物', description: '用心准备的礼物是爱的可见象征', color: '#e53e3e' },
    { id: 'service', name: '服务行动', description: '为你做的事比说的话更有分量', color: '#4299e1' },
    { id: 'touch', name: '身体接触', description: '拥抱、牵手等身体亲近最能传递爱', color: '#9f7aea' },
  ],
  questions: [
    {
      id: 'q1', text: '以下哪种会让你最感到被爱？',
      options: [
        { id: 'q1a', text: '伴侣真诚地对你说"我很欣赏你"', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q1b', text: '伴侣放下手机专心陪你散步聊天', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q1c', text: '伴侣送了一份精心挑选的小礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q1d', text: '伴侣帮你做了你一直拖着没做的事', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q1e', text: '伴侣突然从背后拥抱你', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q2', text: '你难过的时候，最希望伴侣怎样安慰你？',
      options: [
        { id: 'q2a', text: '对你说温暖的话，告诉你一切都会好的', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q2b', text: '坐在你身边，静静地陪你待一会儿', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q2c', text: '给你带了你最喜欢的甜点或小东西', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q2d', text: '帮你处理让你烦心的事务，让你能休息', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q2e', text: '把你抱在怀里，让你靠着他哭', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q3', text: '你觉得伴侣对你最忽视的是什么？',
      options: [
        { id: 'q3a', text: '很少夸我或说感谢的话', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q3b', text: '在一起时总在看手机或做别的', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q3c', text: '纪念日或节日没有准备任何礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q3d', text: '答应帮我做的事总是拖着不做', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q3e', text: '很少主动抱我或亲近我', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q4', text: '纪念日到来时，你最期待什么？',
      options: [
        { id: 'q4a', text: '伴侣写一张真诚的卡片或说一段深情的话', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q4b', text: '一起做一件特别的事，比如去新的地方', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q4c', text: '收到一个有意义的礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q4d', text: '伴侣把家里收拾好还做了你喜欢的晚餐', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q4e', text: '一个温暖的拥抱和亲密的时刻', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q5', text: '你更倾向于用什么方式表达爱？',
      options: [
        { id: 'q5a', text: '经常对伴侣说鼓励和感谢的话', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q5b', text: '安排两个人的专属时间和活动', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q5c', text: '在特别的日子准备礼物或惊喜', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q5d', text: '帮伴侣做家务、跑腿或解决麻烦', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q5e', text: '主动牵手、拥抱、依偎', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q6', text: '伴侣出差一周后回来，你最想做的第一件事？',
      options: [
        { id: 'q6a', text: '告诉他/她你有多想念他/她', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q6b', text: '安排一个安静的晚上只属于两个人', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q6c', text: '给他/她带了你准备的小礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q6d', text: '为他/她做一顿好饭让他/她好好休息', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q6e', text: '紧紧拥抱他/她很久', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q7', text: '你觉得"爱"最应该通过什么体现？',
      options: [
        { id: 'q7a', text: '说出来——爱需要被表达和确认', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q7b', text: '花时间——陪伴是最长情的告白', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q7c', text: '送礼物——爱需要看得见的象征', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q7d', text: '做事情——行动比语言更有说服力', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q7e', text: '亲近——身体语言是爱的本能表达', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q8', text: '如果你要给伴侣写一条早安消息，你更可能写什么？',
      options: [
        { id: 'q8a', text: '"你是我每天醒来最好的理由"', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q8b', text: '"今天一起吃早餐吧"', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q8c', text: '"出门记得拿我给你准备的那件东西"', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q8d', text: '"早餐我做好了，你多睡会儿"', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q8e', text: '不写消息，直接过去亲他一下', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q9', text: '以下哪种场景让你觉得最幸福？',
      options: [
        { id: 'q9a', text: '伴侣当面告诉你他/她有多爱你', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q9b', text: '两个人什么都不做，就安静地待在一起', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q9c', text: '打开门发现伴侣给你留了一个惊喜', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q9d', text: '下班回家发现家务都做好了', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q9e', text: '靠在伴侣怀里看电影', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q10', text: '伴侣做了一件让你生气的事，你更希望他怎么弥补？',
      options: [
        { id: 'q10a', text: '真诚地道歉并说他会改进', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q10b', text: '花时间专门陪我做我想做的事', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q10c', text: '送一个补偿性的礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q10d', text: '主动帮我做几件我烦心的事', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q10e', text: '紧紧抱住我说对不起', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q11', text: '你觉得最好的生日礼物是什么？',
      options: [
        { id: 'q11a', text: '伴侣写的一封走心的信', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q11b', text: '两个人一起去做一件一直想做的事', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q11c', text: '一个精心挑选的实物礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q11d', text: '伴侣包揽了当天的所有家务让我休息', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q11e', text: '一整天都黏在一起的亲密时光', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q12', text: '你加班回来很累时，最希望伴侣？',
      options: [
        { id: 'q12a', text: '对你说辛苦了，夸你敬业又努力', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q12b', text: '坐下来听你聊聊今天发生了什么', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q12c', text: '给你泡了茶还切了水果', scores: { words: 0, time: 0, gifts: 2, service: 1, touch: 0 } },
        { id: 'q12d', text: '帮你收拾了家做好了饭等你回来', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q12e', text: '帮你揉揉肩膀让你放松', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q13', text: '哪种情况会让你觉得"他不爱我了"？',
      options: [
        { id: 'q13a', text: '他不再对我说暖心的话了', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q13b', text: '他总说忙，没有时间陪我', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q13c', text: '纪念日他什么都没准备', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q13d', text: '他答应帮我做的事一次次忘记', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q13e', text: '他不再主动亲近我了', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q14', text: '你理想中的周末是怎样的？',
      options: [
        { id: 'q14a', text: '一起聊天分享彼此的想法和感受', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q14b', text: '一起出门做一件新的事情', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q14c', text: '他带我去逛逛给我买点什么小东西', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q14d', text: '他帮我搞定了家里堆积的事情让我安心休息', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q14e', text: '窝在家里黏在一起一整天', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q15', text: '你朋友问你"你怎么知道他爱你？"你的回答？',
      options: [
        { id: 'q15a', text: '"因为他会跟我说让我感动的话"', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q15b', text: '"因为他愿意花时间陪我"', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q15c', text: '"因为他会给我惊喜和礼物"', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q15d', text: '"因为他会帮我做很多事"', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q15e', text: '"因为他总是想亲近我"', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q16', text: '伴侣做了一件事让你很开心，那件事更可能是？',
      options: [
        { id: 'q16a', text: '在你朋友面前夸你', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q16b', text: '陪你做了你一直想做的事', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q16c', text: '送你了一个你知道他用心选的东西', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q16d', text: '在你生病时照顾你做家务', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q16e', text: '在公共场合自然地牵着你的手', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q17', text: '吵架后你更希望对方做什么来修复？',
      options: [
        { id: 'q17a', text: '主动道歉说"是我不好，对不起"', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q17b', text: '约你出去走走好好聊一聊', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q17c', text: '给你带了你最爱吃的东西', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q17d', text: '默默把你烦心的事都处理好', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q17e', text: '走过来抱住你什么都不说', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q18', text: '在朋友圈看到伴侣发了你们的合照，你最关注什么？',
      options: [
        { id: 'q18a', text: '他配的文字说了什么——写的够走心吗', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q18b', text: '照片记录了我们一起的美好时光', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q18c', text: '他选的照片角度很好看像礼物', scores: { words: 0, time: 0, gifts: 2, service: 0, touch: 0 } },
        { id: 'q18d', text: '他愿意花精力发这条消息', scores: { words: 0, time: 0, gifts: 0, service: 2, touch: 0 } },
        { id: 'q18e', text: '照片里我们靠在一起很亲密', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q19', text: '你觉得以下哪种最像"爱的证据"？',
      options: [
        { id: 'q19a', text: '他说的某句话让我反复回味感动', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q19b', text: '我们共度的某个难忘时刻', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q19c', text: '他送的一件让我珍藏的东西', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q19d', text: '他帮我解决的一个大麻烦', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q19e', text: '某个让我们身体亲近的瞬间', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q20', text: '当你想表达"我在想你"时，你更可能？',
      options: [
        { id: 'q20a', text: '发一条甜蜜的消息给他', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q20b', text: '约他出来见一面', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q20c', text: '买点他喜欢的东西带给他', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q20d', text: '帮他做一件他知道我在帮他做的事', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q20e', text: '见面的时候搂住他', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q21', text: '你看到什么最容易让你想起伴侣的好？',
      options: [
        { id: 'q21a', text: '他曾说过的一句让我感动的话', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q21b', text: '我们一起去过的地方的记忆', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q21c', text: '他送我的某个东西', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q21d', text: '他帮我做过的某件我很感激的事', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q21e', text: '他抱我时那种温暖的感觉', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q22', text: '你愿意为伴侣花最多精力的事情是什么？',
      options: [
        { id: 'q22a', text: '写一段走心的表白或感谢词', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q22b', text: '策划一次两个人的特别经历', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q22c', text: '找一个他一定会喜欢的礼物', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q22d', text: '帮他搞定他头疼的事让他轻松', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q22e', text: '给他一个按摩或亲密时刻', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q23', text: '哪种情况让你最怀疑对方的心意？',
      options: [
        { id: 'q23a', text: '他对我的夸奖和感谢越来越少', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q23b', text: '和我在一起的时间越来越少', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q23c', text: '不再送我任何东西了', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q23d', text: '不再帮我做事了', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q23e', text: '不再想亲近我了', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q24', text: '如果能选择伴侣的一个特质，你最想要？',
      options: [
        { id: 'q24a', text: '善于表达情感和想法', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q24b', text: '愿意花时间陪伴我', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q24c', text: '懂得用物质表达心意', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q24d', text: '靠谱能干愿意分担', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q24e', text: '热情亲密善于表达身体亲近', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
    {
      id: 'q25', text: '你心目中"被爱的感觉"最像什么？',
      options: [
        { id: 'q25a', text: '像被温暖的言语包围', scores: { words: 3, time: 0, gifts: 0, service: 0, touch: 0 } },
        { id: 'q25b', text: '像有人愿意把最珍贵的时间给你', scores: { words: 0, time: 3, gifts: 0, service: 0, touch: 0 } },
        { id: 'q25c', text: '像收到一份用心准备的惊喜', scores: { words: 0, time: 0, gifts: 3, service: 0, touch: 0 } },
        { id: 'q25d', text: '像有人默默帮你扛下了重担', scores: { words: 0, time: 0, gifts: 0, service: 3, touch: 0 } },
        { id: 'q25e', text: '像被紧紧拥抱时的安全感', scores: { words: 0, time: 0, gifts: 0, service: 0, touch: 3 } },
      ],
    },
  ],
  profiles: [
    {
      id: 'words-affirmation', name: '肯定言词型', dimensionId: 'words',
      brief: '你最需要的是被语言肯定——一句鼓励、一句感谢，比任何行动都更能让你感受被爱。',
      description: '肯定言词型的人通过言语来感受爱。赞美、鼓励、感谢和肯定的话语对你来说是最直接的爱之表达。当伴侣说"你真棒""谢谢你""我爱你"时，你的内心会涌起被珍视的温暖。同样，冷言冷语或沉默是最让你受伤的——你觉得"连话都不愿意说，怎么可能还在乎我"。你的爱的语言是言语，你需要对方把心意说出来。',
      traits: ['被一句赞美可以开心很久', '沉默和冷淡让你最受伤', '善于用言语表达自己的爱', '对语言细节很敏感——语气措辞都会注意到', '更在意对方"说了什么"而非"做了什么"'],
      suggestions: ['告诉伴侣你的爱的语言是肯定言词——他可能不知道一句夸奖对你有多重要', '也留意伴侣的爱的语言——也许他更需要行动而非言语', '记录伴侣说过的让你感动的话，在低落时翻看', '学习接受非言语的爱——对方做的事也是爱的表达'],
      compatibilityNotes: [
        { withDimensionId: 'service', note: '与服务行动型搭档：你说他做——他帮你做事是爱你，你夸他也是爱他，互相理解对方的语言就完美' },
        { withDimensionId: 'time', note: '与精心时刻型搭档：他想要你陪他，你想要他说爱你——在一起时多说走心的话' },
      ],
    },
    {
      id: 'quality-time', name: '精心时刻型', dimensionId: 'time',
      brief: '你最需要的是专属时间——全神贯注地陪伴你，比任何礼物和言语都更重要。',
      description: '精心时刻型的人通过对方的陪伴和专注来感受爱。对你来说，爱的核心不是说了什么或做了什么，而是"你愿意花时间跟我在一起吗"。真正的精心时刻意味着放下手机、停下忙碌、全心全意地陪伴——哪怕只是安静地坐在一起。当对方总是"忙"、总是看手机、总是分心时，你感受到的不是爱而是被忽视。',
      traits: ['在一起时对方看手机会让你很不满', '最珍视的是两个人专属的回忆和经历', '约会比礼物更让你心动', '"忙"这个字让你最受伤', '在一起的质量比数量更重要'],
      suggestions: ['告诉伴侣你需要的不是更多时间而是更高质量的时间', '安排固定约会时间——哪怕一周一次也让你有安全感', '也理解伴侣可能用其他方式表达爱——帮你做事也是爱', '学会享受独处，不要让伴侣的时间成为你唯一的价值来源'],
      compatibilityNotes: [
        { withDimensionId: 'touch', note: '与身体接触型搭档：在一起时既亲密又有专注——一边拥抱一边聊天，两人都能感受到爱' },
        { withDimensionId: 'gifts', note: '与接受礼物型搭档：把送礼变成共同体验——一起挑选、一起拆开，把礼物变成精心时刻' },
      ],
    },
    {
      id: 'gift-receiver', name: '接受礼物型', dimensionId: 'gifts',
      brief: '你最需要的是可见的爱的象征——用心准备的礼物让你觉得被惦记和被珍惜。',
      description: '接受礼物型的人通过礼物来感受爱。礼物对你来说不是物质，而是"他在惦记我"的证明——他花了心思、花了时间、想了你的喜好，这一切都浓缩在那个礼物里。不在于价格，在于用心。一个随手买的大牌不如一个他知道你喜欢的小东西。当伴侣从不准备礼物、忘记纪念日时，你感受到的是"他根本没在想着我"。',
      traits: ['收到用心准备的礼物会感动很久', '会珍藏对方送的每一件东西', '忘记纪念日或没有准备会让你很受伤', '你能从礼物中读出对方的用心程度', '你也喜欢给对方准备礼物来表达爱'],
      suggestions: ['告诉伴侣礼物对你来说不是物质而是"你在想我"的象征', '也理解伴侣可能觉得送礼不自然——他帮你做事或陪你也是爱', '把礼物和精心时刻结合——一起挑选礼物也是一种爱的表达', '不要用礼物的价格衡量爱的分量——用心比用钱更重要'],
      compatibilityNotes: [
        { withDimensionId: 'service', note: '与服务行动型搭档：他把帮你做事当礼物，你把礼物当爱——互相理解对方的"礼物"定义就能和谐' },
        { withDimensionId: 'time', note: '与精心时刻型搭档：把送礼变成共同体验——一起挑选、一起拆开，把礼物变成精心时刻' },
      ],
    },
    {
      id: 'act-of-service', name: '服务行动型', dimensionId: 'service',
      brief: '你最需要的是对方为你做事——行动比言语更有说服力，做了才是真的爱。',
      description: '服务行动型的人通过对方为自己做的事情来感受爱。对你来说，"爱"不是一个抽象概念而是具体的行动——帮你做家务、帮你跑腿、帮你解决问题。这些事情在别人看来可能只是"帮忙"，对你来说却是爱的最真实表达。当对方说了一堆甜言蜜语但从不帮你做事时，你觉得"空话谁都会说"。你的爱的语言是行动——做了才算。',
      traits: ['对方帮你做了一件麻烦事比说一百句甜言蜜语更让你感动', '你说"帮我做一下"其实是说"让我感受被爱"', '甜言蜜语让你觉得不实在', '你也习惯用帮对方做事来表达爱', '对方答应你的事没做会让你特别失望'],
      suggestions: ['告诉伴侣"帮我做这件事"对你来说是在请求爱的表达', '也理解伴侣可能用言语或陪伴来表达爱——不要只看行动', '学会接受非行动的爱——一句真诚的夸奖也是爱', '不要把对方的帮忙当理所当然——每次都要表达感谢'],
      compatibilityNotes: [
        { withDimensionId: 'words', note: '与肯定言词型搭档：你说他做——完美的互补，但需要互相学习对方的语言' },
        { withDimensionId: 'touch', note: '与身体接触型搭档：他需要拥抱你需要帮忙——拥抱完帮他做件事，两人都满足了' },
      ],
    },
    {
      id: 'physical-touch', name: '身体接触型', dimensionId: 'touch',
      brief: '你最需要的是身体亲近——一个拥抱、一次牵手，比任何言语和礼物都能传递爱。',
      description: '身体接触型的人通过身体亲近来感受爱。拥抱、牵手、依偎、亲吻——这些对你来说是爱的最本能表达。当伴侣主动拥抱你时，你感受到的不只是温暖而是"他在乎我"。同样，当伴侣不再主动亲近你时，你最先感受到的不是"他不爱我了"而是"他在远离我"。身体接触是你的安全感来源和爱的确认方式。',
      traits: ['一个拥抱可以瞬间让你安心', '伴侣不主动亲近会让你最先怀疑感情', '在公共场合也想牵手或靠近', '用身体语言表达爱对你来说最自然', '身体亲近让你感到安全和被接纳'],
      suggestions: ['告诉伴侣拥抱和牵手对你有多重要——他可能觉得只是"小事"', '理解伴侣可能觉得身体接触不自然——他夸你或陪你也是爱', '注意身体接触的时机——对方疲惫时可能更需要空间而非亲近', '丰富爱的表达——除了身体接触也尝试言语和行动'],
      compatibilityNotes: [
        { withDimensionId: 'time', note: '与精心时刻型搭档：在一起时既亲密又专注——一边拥抱一边聊天，两人都感受到爱' },
        { withDimensionId: 'words', note: '与肯定言词型搭档：他需要说爱你，你需要抱他——说完了抱一下，两人都满足了' },
      ],
    },
  ],
  detailedSections: [
    { title: '五种爱的语言', content: 'Gary Chapman在《五种爱的语言》中提出，每个人感受爱的方式不同，主要有五种：肯定言词——通过赞美、鼓励和认可的话语感受被爱；精心时刻——通过全神贯注的陪伴和共度时光感受被爱；接受礼物——通过用心准备的礼物感受被惦记；服务行动——通过对方为你做的事情感受被照顾；身体接触——通过拥抱、牵手等身体亲近感受被接纳。关键洞察：人们往往用自己最需要的爱的语言去表达爱，但如果伴侣的爱的语言不同，就会产生"我给了你爱但你没感受到"的错位。爱的语言不是天赋而是习惯，了解自己和伴侣的语言后可以有意地用对方需要的方式表达爱。' },
    { title: '如何运用爱的语言改善关系', content: '步骤1：了解自己的爱的语言——你最需要哪种方式感受被爱？步骤2：了解伴侣的爱的语言——他/她最需要什么？步骤3：有意地用伴侣的语言表达爱——即使那不是你最习惯的方式。步骤4：告诉伴侣你的语言——让他/她知道什么最能让你感受被爱。常见错位：肯定言词型与服务行动型的矛盾——"你说爱我但从不帮我做事"vs"我做这么多你从不夸我"。解决方案：互相学习对方的语言——你说一句夸奖，他帮你做一件事，两人都感受到爱。记住：爱的语言不是改变对方，而是理解对方。' },
  ],
};

export default loveLanguage;