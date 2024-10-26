import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "../Css/Header.module.css"
function Nav() {
  return (
    <nav className={style.nav}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/course">Courses</NavLink>
    <NavLink to="/affilication">Affiliations</NavLink>
    <NavLink to="/testimonial">Testimonials</NavLink>
    <NavLink to="/placement">Placement</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
  </nav>
  )
}

export default Nav