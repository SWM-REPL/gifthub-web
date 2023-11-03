'use client';

import { useState, useEffect } from 'react';

import GiftcardApi from '@/apis/giftcards';
import Giftcard from '@/entities/giftcard';

function useGiftcard(uuid: string, password: string) {
  const [giftcard, setGiftcard] = useState<Giftcard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getGiftcard() {
      try {
        const giftcard = await GiftcardApi.getGiftcard(uuid, password);
        setGiftcard(Giftcard.fromJson(giftcard));
      } catch (error: any) {
        setError(Error(error.response.statusText));
      } finally {
        setLoading(false);
      }
    }
    getGiftcard();
  }, [uuid, password]);

  return { giftcard, loading, error };
}

export default useGiftcard;
