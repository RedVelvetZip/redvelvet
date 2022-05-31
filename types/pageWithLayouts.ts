import { NextPage } from 'next';
import type { ReactElement } from 'react';
import BlogLayout from '../components/Layout';
import DevLayout from '../components/dev/LayoutDev';

export type PageWithBlogLayoutType = NextPage & { layout: typeof BlogLayout }
export type PageWithDevLayoutType = NextPage & { layout: typeof DevLayout }
export type PageWithLayoutType =
 | PageWithBlogLayoutType
 | PageWithDevLayoutType
 
 export type LayoutProps = ({
 children,
}: {
 children: ReactElement
}) => ReactElement

export default PageWithLayoutType;