import { useState } from 'react'
import angatLogo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.png'

function Header(){
    return (
        <>
        <div class="navbar px-6 bg-primary shadow-sm sticky -top-0 z-50  ">
          <div class="navbar-start w-10/12 lg:w-1/2">
            {/* Dropdown for mobile */}
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-b-lg z-1 mt-6 w-88 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Linkages</a></li>
                <li><a>Projects</a></li>
                <li><a>News</a></li>
              </ul>
            </div>
            {/* Angat Logo */}
            <div className='rounded-lg bg-base-100 p-1
            ml-4'>
              <a class="btn btn-ghost text-xl h-16 w-16 p-0">
                  <img src={angatLogo}  alt="Angat Logo"/>
              </a>
            </div>
            {/* ////////////////////////// */}
            <label className="input ml-4 hidden sm:flex">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
              <input type="search" className="grow" placeholder="Search" />
            </label>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-base-100 font-bold gap-2
            [&_li>a:hover]:bg-secondary
            [&_li>a]:px-4">
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li><a>Linkages</a></li>
              <li><a>Projects</a></li>
              <li><a>News</a></li>
            </ul>
          </div>
          <div class="navbar-end">
            <div className="flex gap-2
            [&_a:hover]:bg-accent [&_a:hover]:text-secondary [&_a:hover]:border-secondary
            [&_a]:bg-secondary [&_a]:text-base-100 [&_a]:border-accent [&_a]:border-3">
              <a class="btn">Sign In</a>
              <a class="btn">Register</a>
            </div>
          </div>
        </div>
        </>)
}

export default Header