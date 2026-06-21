import { NextRequest, NextResponse } from 'next/server';

const SERVERCHAN_KEY = process.env.SERVERCHAN_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resultKey, nickname } = body;

    if (!resultKey || !nickname) {
      return NextResponse.json({ error: '缺少必要参数' }, { status: 400 });
    }

    const title = `新订单通知 - ${nickname} 已付款¥9.9`;
    const desp = `## 付款确认\n\n- **昵称**: ${nickname}\n- **金额**: ¥9.9\n- **结果Key**: ${resultKey}\n\n### 操作\n\n请前往管理后台确认此订单：\n${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'}/admin\n\n确认后生成解锁链接发送给用户。`;

    if (SERVERCHAN_KEY) {
      const resp = await fetch(`https://sctapi.ftqq.com/${SERVERCHAN_KEY}.send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, desp }),
      });
      const data = await resp.json();
      if (data.code !== 0) {
        console.error('Server酱发送失败:', data);
      }
    } else {
      console.log('Server酱未配置，订单信息:', { resultKey, nickname });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('通知API错误:', error);
    return NextResponse.json({ error: '服务器错误' }, { status: 500 });
  }
}