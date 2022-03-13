import clsx from 'clsx';
import NextLink from 'next/link';
import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface LinkProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ children, className, href, ...props }: LinkProps) {
  const isInternal = href.startsWith('/') || href.startsWith('#');

  const NativeLink = () => (
    <a className={clsx('link', className)} href={href} {...props}>
      {children}
    </a>
  );

  if (isInternal) {
    return (
      <NextLink href={href}>
        <NativeLink />
      </NextLink>
    );
  }

  return <NativeLink />;
}

export default Link;
