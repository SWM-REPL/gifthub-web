import React from 'react';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import './tailwind.css';

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
    <html className='h-full'>
      <body className='h-full'>
        {children}
        <ToastContainer position='top-center' />
      </body>
    </html>
  );
}
