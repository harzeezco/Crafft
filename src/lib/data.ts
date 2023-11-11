import { ComponentProps, NavLinksProp } from './types';

export const NAV_LINKS: NavLinksProp = [
  {
    id: 0,
    label: 'Explore',
    isExpanded: true,
    links: [
      {
        id: 0,
        link: 'Collections',
        href: '/collection',
        isIcon: false,
      },
      {
        id: 1,
        link: "NfT's",
        href: '/nft',
        isIcon: false,
      },
      {
        id: 2,
        link: 'Users',
        href: '/users',
        isIcon: false,
      },
    ],
  },
  {
    id: 1,
    label: 'Create',
    isExpanded: false,
    links: [],
  },
  {
    id: 2,
    label: 'Page',
    isExpanded: true,
    links: [
      {
        id: 0,
        link: 'About',
        href: '/about',
        isIcon: false,
      },
      {
        id: 1,
        link: 'Blog',
        href: '/nft',
        isIcon: false,
      },
      {
        id: 2,
        link: 'FAQ',
        href: '/users',
        isIcon: false,
      },
      {
        id: 3,
        link: 'Contact',
        href: '/users',
        isIcon: false,
      },
      {
        id: 4,
        link: 'Coming Soon',
        href: '/users',
        isIcon: false,
      },
    ],
  },
];

export const COMPANIES: ComponentProps[] = [
  {
    id: 0,
    img: 'binance.png',
    alt: 'binance logo',
    href: '',
  },
  {
    id: 1,
    img: 'coinbase.png',
    alt: 'coinbase logo',
    href: '',
  },

  {
    id: 2,
    img: 'coinigy.png',
    alt: 'coinigy logo',
    href: '',
  },
  {
    id: 3,
    img: 'crypto-valley.png',
    alt: 'crypto valley logo',
    href: '',
  },
  {
    id: 4,
    img: 'crypto.png',
    alt: 'crypto logo',
    href: '',
  },
];
