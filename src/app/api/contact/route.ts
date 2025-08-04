import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, lastName, email, phone, message } = body;

    // اعتبارسنجی پایه
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'اطلاعات ناقص است' }, { status: 400 });
    }

    const savedMessage = await prisma.contact.create({
      data: {
        name,
        lastName,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json({ success: true, data: savedMessage });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'خطا در ثبت پیام' }, { status: 500 });
  }
}
