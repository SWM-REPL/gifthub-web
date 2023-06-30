import React from 'react';

export const metadata = {
  title: 'GiftHub',
  description: '당신의 기프티콘을 편하게 관리하세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
