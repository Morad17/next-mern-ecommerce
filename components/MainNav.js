import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MainNav() {
  return (
    <nav className="main-nav">
        <div className="nav-links-logo">
          <div className="logo">SS</div>
          <ul className="nav-home-links">
            <Link className="nav-links" href="/">Home</Link>
            <Link className="nav-links" href="/allFoods">All Foods</Link>
            <Link className="nav-links" href="/">Categories</Link>
            <Link className="nav-links" href="/">How It Works</Link>
            <Link className="nav-links" href="/">Contact Us</Link>
          </ul>
        </div>
        <ul className="nav-user-links">
          <Link className="nav-links" href="/">Login</Link>
          <Link className="nav-links" href="/">My Account</Link>
          <Link className="nav-links" href="/checkout">Checkout</Link>
        </ul>

    </nav>
    
  )
}
