import { Image } from '@waweb/ui.atoms';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <Image
          className="w-96"
          src="https://www.datocms-assets.com/64528/1646636345-logo.png"
          width={640}
          height={220}
        />
        <p className="text-secondary tracking-tight">
          © Copyright, 2022
          <br />
          Watheia Labs, LLC.
          <br />
          All rights reserved.
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}

export default Footer;
