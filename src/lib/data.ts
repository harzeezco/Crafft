import { NavLinksProp } from './types';

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

export const LINK = [{}];
