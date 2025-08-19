import { NextResponse } from 'next/server';

// DEMO state; replace with DB lookups
let hasCompletedOrder = false; // set true once an order delivered in your flow
let userCoins = 0; // track from /api/spin in real DB

export async function POST(request: Request){
  const form = await request.formData();
  const amountRs = Number(form.get('amountRs')) || 10;
  const coinsNeeded = amountRs * 2; // 2 coins = ₹1

  if (!hasCompletedOrder){
    return new NextResponse('You must complete at least 1 order before redeeming.', { status: 400 });
  }
  if (userCoins < coinsNeeded){
    return new NextResponse('Not enough coins.', { status: 400 });
  }
  userCoins -= coinsNeeded;
  return NextResponse.json({ status: 'PENDING', type: 'GOOGLE_PLAY', amountRs, coinsUsed: coinsNeeded });
}
