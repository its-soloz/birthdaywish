
export enum AppStep {
  INTRO = 'INTRO',
  ENVELOPE = 'ENVELOPE',
  READ_LETTER = 'READ_LETTER',
  CAKE_TIME = 'CAKE_TIME',
  WISH_TIME = 'WISH_TIME',
  SOUNDTRACK = 'SOUNDTRACK',
  WISH_CARDS = 'WISH_CARDS',
  FINAL_LETTER = 'FINAL_LETTER',
  SEALED = 'SEALED'
}

export interface Song {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
}

export interface WishCard {
  id: number;
  frontImage: string;
  message: string;
  isRevealed: boolean;
}
