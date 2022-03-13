import { ChevronDown } from '@watheia/ui.icons';
import { Link } from '@waweb/ui.atoms';
import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={className} {...props}>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            waweb
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link href="/blog">
                Blog
                <ChevronDown />
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/blog/engineering">Engineering</Link>
                </li>
                <li>
                  <Link href="/blog/design">Design</Link>
                </li>
                <li>
                  <Link href="/blog/announcements">Announcements</Link>
                </li>
              </ul>
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
