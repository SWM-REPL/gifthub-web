'use client';

import { useState } from 'react';

import GiftcardApi from '@/apis/giftcards';
import Giftcard from '@/entities/giftcard';
import ApiException from '@/exceptions/http.exception';

function useGiftcard(uuid: string) {
  const [giftcard, setGiftcard] = useState<Giftcard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiException | null>(null);

  async function fetchGiftcard(password: string) {
    setLoading(true);
    setGiftcard(null);
    try {
      const giftcard = await GiftcardApi.getGiftcard(uuid, password);
      setGiftcard(Giftcard.fromJson(giftcard));
    } catch (error) {
      if (error instanceof ApiException) {
        setError(error);
      } else {
        setError(
          new ApiException(
            '500',
            '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          ),
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return { giftcard, loading, error, fetchGiftcard };
}

export default useGiftcard;
