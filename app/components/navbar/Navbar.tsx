import Link from 'next/link';
import './Navbar.scss';

export type NavbarLink = {
  label: string,
  href: string
};

type NavbarProps = {
  links: NavbarLink[]
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="nav">
      <div className="nav__inner">
        {links.map((link, index) => <Link key={index} className="inner__item" href={link.href}>{link.label}</Link>)}
      </div>
    </nav>
  );
}
