
import { Song, WishCard } from './types';

export const SONGS: Song[] = [
  {
    id: '1',
    title: 'Dil Ka Jo Haal Hai',
    subtitle: "Here's to making this year unforgettable ✨",
    image: 'https://picsum.photos/id/101/300/300',
    duration: '3:45'
  },
  {
    id: '2',
    title: 'Dil Cheeze Tujhe Dedi',
    subtitle: "Because today is all about YOU, queen! 👑",
    image: 'https://picsum.photos/id/102/300/300',
    duration: '4:12'
  },
  {
    id: '3',
    title: 'If the world was ending...',
    subtitle: "Every beat celebrates your beautiful heart ❤️",
    image: 'https://picsum.photos/id/103/300/300',
    duration: '3:20'
  }
];

export const WISH_CARDS_DATA: WishCard[] = [
  {
    id: 1,
    frontImage: 'https://picsum.photos/id/104/300/400',
    message: "Happy Birthday to the girl who makes every day feel like a celebration! 🎉",
    isRevealed: false
  },
  {
    id: 2,
    frontImage: 'https://picsum.photos/id/106/300/400',
    message: "Another year of being absolutely incredible, beautiful, and perfect just the way you are! ✨",
    isRevealed: false
  },
  {
    id: 3,
    frontImage: 'https://picsum.photos/id/107/300/400',
    message: "May this new year bring you endless joy, love, and all the dreams your heart desires! ❤️",
    isRevealed: false
  }
];
