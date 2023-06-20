import React from 'react'
import Link from 'next/link'

export default function MainFooter() {

  return (
    <div className="footer">
        <div className="footer-description">
            <p>The Best Online Food Store Delivering The Best Nutrition.</p>
            <p>Follow Us on out socials:</p>
            <div className="social-icons">Facebook Insta</div>
        </div>
        <div className="footer-links">
            <Link className="nav-links" href="/">Home</Link>
            <Link className="nav-links" href="/allFoods">All Foods</Link>
            <Link className="nav-links" href="/">Categories</Link>
            <Link className="nav-links" href="/">How It Works</Link>
            <Link className="nav-links" href="/">Contact Us</Link>
        </div>
        <div className="copyright">Superfood Store © 2023. All rights Reserverd</div>
    </div>
  )
}
