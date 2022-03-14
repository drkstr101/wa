/* This example requires Tailwind CSS v2.0+ */
// import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Footer, Header } from '@watheia/ui.organisms';
import { HtmlHTMLAttributes } from 'react';

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
