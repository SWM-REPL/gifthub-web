'use client';

import React, { useEffect, useState } from 'react';

import OTPInput from 'react-otp-input';
import { toast } from 'react-toastify';

import Image from 'next/image';
import Link from 'next/link';
import { TbMail } from 'react-icons/tb';

import Giftcard from '@/entities/giftcard';
import useGiftcard from '@/hooks/use-giftcard';

interface PageProps {
  params: {
    uuid: string;
  };
}

export default function Page({ params: { uuid } }: PageProps) {
  const [password, setPassword] = useState('');
  const { giftcard, fetchGiftcard, error } = useGiftcard(uuid);

  useEffect(() => {
    if (password.length === 4) {
      setPassword('');
      fetchGiftcard(password);
    }
  }, [fetchGiftcard, password]);

  useEffect(() => {
    if (error) {
      toast(error.message, { type: 'error' });
    }
  }, [error]);

  return giftcard ? buildGiftcard(giftcard) : buildPassword();

  function buildPassword() {
    return (
      <div className='w-full h-screen flex flex-col justify-evenly items-center text-center'>
        <div>
          <h1 className='font-bold text-xl'>비밀번호를 입력해주세요</h1>
          <div className='mt-4' />
          <div className='p-6 w-65 rounded-lg bg-white'>
            <OTPInput
              value={password}
              onChange={setPassword}
              numInputs={4}
              containerStyle={'flex justify-between'}
              inputStyle={
                'w-12 caret-transparent border rounded-md text-center text-xl'
              }
              inputType='number'
              renderSeparator={() => <span className='mx-1' />}
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus
              skipDefaultStyles
            />
          </div>
        </div>
      </div>
    );
  }

  function buildGiftcard(giftcard: Giftcard) {
    return (
      <div className='w-full h-full flex flex-col items-center'>
        <div className='w-full max-w-sm h-full flex flex-col items-center'>
          <div className='pt-16'>
            <Image
              className='rounded-full'
              width={72}
              height={72}
              style={{ objectFit: 'cover', width: '72px', height: '72px' }}
              src={giftcard.senderProfile}
              alt='User profile image'
            />
          </div>
          <div className='mt-5'>
            <h1 className='font-bold text-xl'>
              {giftcard.senderName}님의 선물
            </h1>
          </div>
          <div className='mt-5 px-5 py-3 w-60 rounded-lg bg-white'>
            <div className='flex'>
              <TbMail className='text-red-600' />
              <div className='w-1' />
              <h3 className='font-semibold text-red-600 text-xs'>메시지</h3>
            </div>
            <div className='h-2' />
            <p className='text-xs break-keep'>{giftcard.message}</p>
          </div>
          <div className='flex flex-col items-center mt-6 w-full rounded-t-lg bg-white'>
            <div className='mt-9 px-20'>
              <Image
                className='rounded-lg'
                width={720}
                height={720}
                style={{
                  objectFit: 'cover',
                  width: '12.5rem',
                  height: '12.5rem',
                }}
                src={giftcard.productImage}
                alt='Product image'
              />
            </div>
            <div className='mt-5' />
            <div className='flex'>
              <Image
                className='rounded-full'
                width={10}
                height={10}
                style={{ objectFit: 'cover', width: '1rem', height: '1rem' }}
                src={giftcard.brandImage}
                alt='Brand image'
              />
              <div className='ml-1' />
              <p className='text-sm font-medium text-gray-400'>
                {giftcard.brandName}
              </p>
            </div>
            <div className='mt-1' />
            <p className='font-bold'>{giftcard.productName}</p>
            <div className='mt-1' />
            <p className='text-sm text-gray-400'>
              {giftcard.expirationString}까지
            </p>
            <div className='mt-6' />
            <div className='flex'>
              <div className='border flex items-center justify-center rounded-md w-36 h-12 text-center text-gray-400 font-medium'>
                교환권 저장
              </div>
              <div className='ml-3' />
              <Link href={`/giftcards/${uuid}/deeplink`}>
                <div className='bg-red-600 flex items-center justify-center rounded-md w-36 h-12 text-center text-white font-medium'>
                  선물 등록하기
                </div>
              </Link>
            </div>
            <div className='mt-8' />
            <div className='flex items-center'>
              <Image
                className='rounded-full'
                width={32}
                height={32}
                style={{ objectFit: 'cover', width: '2rem', height: '2rem' }}
                src='/dahyeon.jpeg'
                alt='GiftHub logo'
              />
              <div className='ml-2' />
              <h1 className='font-bold'>GiftHub</h1>
            </div>
            <div className='mt-8' />
          </div>
        </div>
      </div>
    );
  }
}
