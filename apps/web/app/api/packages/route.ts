import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // 这里可以连接到你的数据库或其他数据源
  const packages = {
    favorites: [
      {
        name: "sign_in_with_apple",
        description: "Flutter bridge to initiate Sign in with Apple...",
        publisher: "aboutyou.com"
      },
      // ... 其他收藏包
    ],
    popular: [
      {
        name: "cloud_firestore",
        description: "Flutter plugin for Cloud Firestore...",
        publisher: "firebase.google.com"
      },
      // ... 其他热门包
    ]
  };

  return NextResponse.json(packages);
} 