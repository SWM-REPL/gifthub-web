'use client';

import { useState } from 'react';

import GiftcardApi from '@/apis/giftcards';
import Giftcard from '@/entities/giftcard';

function useGiftcard(uuid: string) {
  const [giftcard, setGiftcard] = useState<Giftcard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  async function fetchGiftcard(password: string) {
    setLoading(true);
    setGiftcard(null);
    try {
      const giftcard = await GiftcardApi.getGiftcard(uuid, password);
      setGiftcard(Giftcard.fromJson(giftcard));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { giftcard, loading, error, fetchGiftcard };
}

export default useGiftcard;
