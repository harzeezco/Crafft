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

export type MobileInputProps = {
  isShow: boolean;
  onclick: (value: boolean) => void;
};
