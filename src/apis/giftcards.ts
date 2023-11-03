import { http } from './http';

export interface GetGiftcard {
  senderProfile: string;
  senderName: string;
  message: string;
  productImage: string;
  productName: string;
  brandImage: string;
  brandName: string;
  expirationDate: string;
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
  return {
    senderProfile: '/dahyeon.jpeg',
    senderName: json.data.sender,
    message: json.data.message,
    productImage: '/dahyeon.jpeg',
    productName: json.data.product_name,
    brandImage: '/dahyeon.jpeg',
    brandName: json.data.brand_name,
    expirationDate: json.data.expires_at,
  };
}

const GiftcardApi = {
  getGiftcard,
};

export default GiftcardApi;
