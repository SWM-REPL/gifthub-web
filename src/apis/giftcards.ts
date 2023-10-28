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
  try {
    const response = await http.get(`/giftcards/${uuid}`, {
      headers: {
        Authorization: `Basic ${atob(password)}`,
      },
    });
    return await response.json();
  } catch {
    return {
      senderProfile: '/dahyeon.jpeg',
      senderName: uuid,
      message: password,
      productImage: '/dahyeon.jpeg',
      productName: '아이스 카페 아메리카노 T',
      brandImage: '/dahyeon.jpeg',
      brandName: '스타벅스',
      expirationDate: '2023-07-25',
    };
  }
}

const GiftcardApi = {
  getGiftcard,
};

export default GiftcardApi;
