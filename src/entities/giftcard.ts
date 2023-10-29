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
      json.senderProfile,
      json.senderName,
      json.message,
      json.productImage,
      json.productName,
      json.brandImage,
      json.brandName,
      new Date(json.expirationDate),
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
