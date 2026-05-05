import { NextResponse } from 'next/server';

const KEY = '2d58daaa2fbb495097e017dfe65321f0';
const HOST = 'mappli.fr';
const BASE_URL = `https://${HOST}`;

const URLS = [
  BASE_URL,
  `${BASE_URL}/contact`,
  `${BASE_URL}/apps/bilan-secouriste`,
  `${BASE_URL}/apps/pompiers-planificateur`,
  `${BASE_URL}/apps/signalis`,
  `${BASE_URL}/apps/sports-controls`,
  `${BASE_URL}/privacy-policy`,
  `${BASE_URL}/bilan-secouriste/privacy`,
];

export async function POST(request: Request) {
  // Protection par token secret pour éviter les appels non autorisés
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  const validSecret = process.env.INDEXNOW_SECRET ?? 'mappli_indexnow_2026';
  if (secret !== validSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE_URL}/${KEY}.txt`,
        urlList: URLS,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `IndexNow returned ${response.status}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, submitted: URLS.length, urls: URLS });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to reach IndexNow' }, { status: 500 });
  }
}
