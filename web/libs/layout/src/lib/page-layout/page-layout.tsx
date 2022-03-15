/* This example requires Tailwind CSS v2.0+ */
// import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HtmlHTMLAttributes } from 'react';
import Footer from '../footer';
import Header from '../header';

export type PageLayoutProps = HtmlHTMLAttributes<HTMLDivElement>;

export function PageLayout({ children, ...props }: PageLayoutProps) {
  return (
    <div className="min-h-full" {...props}>
      <Header />
      <div className="py-4">
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
