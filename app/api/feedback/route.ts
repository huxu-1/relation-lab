import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { feedback, contact } = body;

    if (!feedback || !feedback.trim()) {
      return NextResponse.json({ error: '反馈内容不能为空' }, { status: 400 });
    }

    const serverchanKey = process.env.SERVERCHAN_KEY;

    if (!serverchanKey) {
      // 没有配置Server酱，仍然返回成功（静默失败）
      return NextResponse.json({ success: true, message: '反馈已收到' });
    }

    const title = '📝 网站反馈与建议';
    const desp = `**反馈内容：**\n\n${feedback.trim()}\n\n${contact ? `**联系方式：** ${contact.trim()}\n\n` : ''}---\n来自：关系研究所网站关于页面`;

    const response = await fetch(`https://sctapi.ftqq.com/${serverchanKey}.send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        title,
        desp,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ success: true, message: '反馈已收到' });
    }

    return NextResponse.json({ success: true, message: '反馈已发送' });
  } catch {
    return NextResponse.json({ error: '发送失败，请稍后重试' }, { status: 500 });
  }
}
