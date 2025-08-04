import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const siteTypes = await prisma.siteType.findMany({
      include: {
        images: true,
      },
    });

    return NextResponse.json(siteTypes);
  } catch (error) {
    console.error('Error fetching site types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch site types' },
      { status: 500 }
    );
  }
}
