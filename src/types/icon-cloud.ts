declare module 'react-icon-cloud' {
  import { FC } from 'react';

  export interface SimpleIcon {
    title: string;
    slug: string;
    hex: string;
    source: string;
    svg: string;
    path: string;
  }

  export interface ICloud {
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    options?: Record<string, any>;
  }

  export const Cloud: FC<ICloud>;
  export const fetchSimpleIcons: () => Promise<SimpleIcon[]>;
  export const renderSimpleIcon: (
    icon: SimpleIcon,
    bgHex: string,
    size: number,
    style: React.CSSProperties
  ) => JSX.Element;
}
