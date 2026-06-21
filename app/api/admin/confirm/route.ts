import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'relation-lab-admin-2026';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resultKey, secret } = body;

    if (secret !== ADMIN_SECRET) {
      return NextResponse.json({ error: '认证失败' }, { status: 403 });
    }

    if (!resultKey) {
      return NextResponse.json({ error: '缺少结果Key' }, { status: 400 });
    }

    const unlockCode = crypto
      .createHash('sha256')
      .update(resultKey + process.env.UNLOCK_SALT || 'relation-lab-salt')
      .digest('hex')
      .substring(0, 16);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
    const assessmentId = resultKey.split('-')[1] || 'unknown';
    const unlockLink = `${siteUrl}/result/${assessmentId}?key=${resultKey}&unlock=${unlockCode}`;

    return NextResponse.json({ success: true, unlockCode, unlockLink });
  } catch (error) {
    console.error('确认API错误:', error);
    return NextResponse.json({ error: '服务器错误' }, { status: 500 });
  }
}