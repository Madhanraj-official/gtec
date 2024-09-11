import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/course">Courses</NavLink>
    <NavLink to="/affilication-awards">Affiliations &amp; Awards</NavLink>
    <NavLink to="/testimonial">Testimonials</NavLink>
    <NavLink to="/placement">Placement</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
  </nav>
  )
}

export default Nav