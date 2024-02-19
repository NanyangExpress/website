"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <nav className='bg-white py-2.5'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
          { /* Logo */}
          <Image 
            src='/nanyang_logo.svg'
            width={250}
            height={250}
            alt='Nanyang Express Logo'
            className = "h-28 mr-2"
            placeholder='empty'
            priority={true}
            ></Image>
          <div className='flex items-center lg:order-2'>
              <div className='hidden mt-2 mr-4 sm:inline-block'>
                <span></span>
              </div>
              <button data-collapse-toggle='mobile-menu-2' type='button'
                className='inline-flex items-center p-2 ml-1 text-sm text-gray rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none'
                aria-controls='mobile-menu-2'
                aria-expanded={ isMobileMenuOpen ? 'true' : 'false'}
                onClick= { toggleMobileMenu }>
                  <span className='sr-only'>Open Home Page</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
          </div> 
          <div 
            className= {clsx(
              'items-center justify-between w-full mr-2 lg:flex lg:w-auto lg:order-2 lg:mr-4',
              {
                'block lg:hidden': isMobileMenuOpen == true,
                "hidden lg:block": isMobileMenuOpen == false
              }
            )}
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-sm lg:flex-row lg:space-x-16 lg:mt-0'>
              {/* <li className='block py-2 pl-3 pr-4 bg-transparent rounded lg:p-0'>
                <Link key={"Home"} href={'/'} aria-current='page' className= {clsx(
                  'text-black',
                  {
                    'font-medium text-black': pathname == '/product'
                  }
                )}>
                  Home
                </Link>
              </li> */}
              <li className='block py-2 pl-3 pr-4 bg-transparent rounded lg:p-0'>
                <Link key={"About Us"} href={'/'} aria-current='page' className={clsx(
                  'text-black',
                  {
                    'font-medium text-black': pathname == '/'
                  }
                )}>
                  About Us
                </Link>
              </li>
              <li className='block py-2 pl-3 pr-4 bg-transparent rounded lg:p-0'>
                <Link key={"Contact Us"} href={'/contact-us'} className={clsx(
                  'text-black',
                  {
                    'font-medium text-black': pathname == '/contact-us'
                  }
                )}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
