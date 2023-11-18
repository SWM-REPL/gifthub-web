import React from 'react';

export default function Page() {
  return (
    <div className='w-screen text-center'>
      <h3 className='text-lg mt-4 font-bold text-black'>
        기프트허브가 실행되지 않나요?
      </h3>
      <p className='text-sm mt-4 text-gray-500'>
        기프트허브 앱을 설치하거나
        <br />
        최신버전으로 업데이트 해주세요.
      </p>
      <button className='mt-4 w-48 h-12 bg-red-500 rounded text-white'>
        다운로드
      </button>
    </div>
  );
}
