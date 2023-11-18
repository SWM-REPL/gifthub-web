import React from 'react';

export default function Page() {
  return (
    <div className='flex flex-col items-center w-screen text-center'>
      <h3 className='text-lg mt-4 font-bold text-black'>
        기프트허브가 실행되지 않나요?
      </h3>
      <p className='text-sm mt-4 text-gray-500'>
        기프트허브 앱을 설치하거나
        <br />
        최신버전으로 업데이트 해주세요.
      </p>
      <a href='https://play.google.com/store/apps/details?id=org.swmaestro.repl.GiftHub'>
        <div className='mt-4 bg-red-600 flex items-center justify-center rounded-md w-48 h-12 text-center text-white font-medium'>
          다운로드
        </div>
      </a>
    </div>
  );
}
