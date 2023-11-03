'use client';

import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import Image from 'next/image';
import { TbMail } from 'react-icons/tb';

import Giftcard from '@/entities/giftcard';
import useGiftcard from '@/hooks/use-giftcard';

interface PageProps {
  params: {
    uuid: string;
  };
}

type PasswordDigits = { '0': string; '1': string; '2': string; '3': string };

export default function Page({ params: { uuid } }: PageProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<PasswordDigits>();
  const [password, setPassword] = useState('');
  const { giftcard, loading, error } = useGiftcard(uuid, password);

  useEffect(() => {
    setFocus('0');
  });

  return password === ''
    ? buildPassword()
    : giftcard
    ? buildGiftcard(giftcard)
    : loading
    ? buildLoading()
    : buildError(error);

  function buildPassword() {
    function PasswordDigit({ index }: { index: number }) {
      return (
        <input
          className={`w-full outline-none caret-transparent text-center text-xl ${
            errors[index.toString() as keyof PasswordDigits] && 'border-red-500'
          }`}
          maxLength={1}
          type='number'
          onFocus={(e) => (e.target.value = '')}
          {...register(index.toString() as keyof PasswordDigits, {
            required: true,
            min: 0,
            max: 9,
            onChange: () => {
              if (index === 3) {
                handleSubmit((data) => {
                  setPassword(data['0'] + data['1'] + data['2'] + data['3']);
                })();
              } else {
                setFocus((index + 1).toString() as keyof PasswordDigits);
              }
            },
          })}
        />
      );
    }

    return (
      <div className='w-full h-full flex flex-col justify-evenly items-center text-center'>
        <div>
          <h1 className='font-bold text-xl'>비밀번호를 입력해주세요</h1>
          <div className='mt-4' />
          <div className='p-6 w-60 rounded-lg bg-white'>
            <div className='flex'>
              <PasswordDigit index={0} />
              <div className='ml-1' />
              <PasswordDigit index={1} />
              <div className='ml-1' />
              <PasswordDigit index={2} />
              <div className='ml-1' />
              <PasswordDigit index={3} />
            </div>
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
                src='/dahyeon.jpeg'
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
              <div className='border rounded-md w-36 text-center text-gray-400 font-medium'>
                <div className='mt-3' />
                교환권 저장
                <div className='mt-3' />
              </div>
              <div className='ml-3' />
              <div className='bg-red-600 rounded-md w-36 text-center text-white font-medium'>
                <div className='mt-3' />
                선물 등록하기
                <div className='mt-3' />
              </div>
            </div>
            <div className='mt-8' />
            <div className='flex'>
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

  function buildLoading() {
    return 'Loading...';
  }

  function buildError(error: Error | null) {
    if (error?.message === 'Forbidden') {
      setPassword('');
    }
  }
}
