import ApiException from '@/exceptions/http.exception';

import { http } from './http';

export interface GetGiftcard {
  sender: string;
  message: string;
  brand: {
    id: number;
    name: string;
    image_url: string;
  };
  product: {
    id: number;
    brand_id: number;
    name: string;
    description: string;
    is_reusable: number;
    price: number;
    image_url: string;
  };
  expires_at: string;
}
async function getGiftcard(
  uuid: string,
  password: string,
): Promise<GetGiftcard> {
  const response = await http.get(`/giftcards/${uuid}`, {
    headers: {
      Authorization: `Basic ${btoa(password)}`,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new ApiException(json.status, json.error);
  }

  return json.data;
}

const GiftcardApi = {
  getGiftcard,
};

export default GiftcardApi;
