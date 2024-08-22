// app/api/getLocation/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://ipinfo.io/json?token=56b5e17280e97a');
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching location data:', error);
    return NextResponse.json({ error: 'Failed to fetch location data' }, { status: 500 });
  }
}