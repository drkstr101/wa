import { Image, Link } from '@waweb/ui.atoms';
import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={className} {...props}>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image
              className="w-32 py-1"
              src="https://www.datocms-assets.com/64528/1646636345-logo.png"
              width={640}
              height={220}
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link href="/expo">Expo</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
