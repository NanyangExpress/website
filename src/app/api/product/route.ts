import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const file = await fs.readFile("./data/data.json", 'utf8');
  const data = JSON.parse(file);
  return NextResponse.json(data.product)
}