export type NavLinksProp = {
  id: number;
  label: string;
  isExpanded: boolean;
  links: {
    id: number;
    link: string;
    href: string;
    isIcon: boolean;
  }[];
}[];

export type FooterNavLinksProp = {
  id: number;
  title: string;
  links: {
    id: number;
    label: string;
    href: string;
  }[];
}[];

export type MobileInputProps = {
  isShow: boolean;
  onclick: (value: boolean) => void;
};

export type ComponentProps = {
  id: number;
  img: string;
  alt: string;
  href: string;
};
