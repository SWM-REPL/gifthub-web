import { GetGiftcard } from '@/apis/giftcards';

export default class Giftcard {
  constructor(
    public senderProfile: string,
    public senderName: string,
    public message: string,
    public productImage: string,
    public productName: string,
    public brandImage: string,
    public brandName: string,
    public expirationDate: Date,
  ) {}

  static fromJson(json: GetGiftcard): Giftcard {
    return new Giftcard(
      '/dahyeon.jpeg',
      json.sender,
      json.message,
      json.product.image_url,
      json.product.name,
      json.brand.image_url,
      json.brand.name,
      new Date(json.expires_at),
    );
  }

  get expirationString(): string {
    return this.expirationDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
