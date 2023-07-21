import Link from 'next/link'
import './Navbar.scss'

export type NavbarItem = {
  label: string,
  href: string
}
type NavbarProps = {
  items: NavbarItem[]
}
export default function Navbar({ items }: NavbarProps) {
  return (
    <nav className='nav'>
        <div className='nav__inner'>
          {items.map((item, index) => <Link key={index} className='inner__item' href={item.href}>{item.label}</Link>)}
        </div>
    </nav>
  )
}
