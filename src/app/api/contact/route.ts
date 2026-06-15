import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const irPhoneRegex = /^(?:\+?98|0)?9\d{9}$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || '').trim();
    const lastName = String(body.lastName || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').replace(/\s|-/g, '').trim();
    const message = String(body.message || '').trim();

    if (!name || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'اطلاعات فرم کامل نیست' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'فرمت ایمیل معتبر نیست' },
        { status: 400 }
      );
    }

    if (!irPhoneRegex.test(phone)) {
      return NextResponse.json(
        { message: 'شماره تماس معتبر نیست' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: 'متن پیام خیلی کوتاه است' },
        { status: 400 }
      );
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

    return NextResponse.json({
      success: true,
      message: 'پیام با موفقیت ثبت شد',
      data: savedMessage,
    });
  } catch (error) {
    console.error('Error saving contact message:', error);

    return NextResponse.json(
      { message: 'خطا در ثبت پیام' },
      { status: 500 }
    );
  }
}