import Link from 'next/link'
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav__inner'>
            <Link className='inner__item' href='/'>Home</Link>
            <Link className='inner__item' href='/about'>About</Link>
            <Link className='inner__item' href='/projects'>Projects</Link>
            <Link className='inner__item' href='/blog-page'>Blog</Link>
        </div>
    </nav>
  )
}
