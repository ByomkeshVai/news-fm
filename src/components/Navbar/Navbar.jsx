import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import bottomRight from '../../assets/images/icon-menu.svg'
import BottomOff from '../../assets/images/icon-menu-close.svg'
import logo from '../../assets/images/logo.svg'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='mb-10'>
            <div className="nav-area my-6">
                <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
            <img src={logo} alt="" />
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex text-lg'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/New'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Popular'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Popular
            </NavLink>
              </li>
               <li>
            <NavLink
              to='/Trending'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Trending
            </NavLink>
              </li>
               <li>
            <NavLink
              to='/Category'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Category
            </NavLink>
          </li>
        </ul>

        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={bottomRight} alt="" />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        <img src={logo} alt="" />
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img src={BottomOff} alt="" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/home' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/new'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        New
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Popular
                      </Link>
                        </li>
                        <li>
                      <Link
                        to='/Trending'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Trending
                      </Link>
                        </li>
                        <li>
                      <Link
                        to='/Category'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Category
                      </Link>
                    </li>
                </ul>
                  
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
            </div>   
        </div>
    );
};

export default Navbar;