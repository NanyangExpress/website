"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="bg-black text-white mt-4 py-6 flex-shrink-0">
            <div className="container flex flex-col md:flex-row sm:justify-center px-10 md:justify-between max-w-screen-md h-full">
                <p className="text-white text-2xl">
                    <span style={{ color: 'white', fontSize: '1rem' }}>Nanyang Express</span>
                </p>
                <Link key={"About Us"} href={'/'} className={clsx(
                    'text-white text-xs pt-1 mt-2',
                    {
                        'font-medium': pathname == '/about-us',
                    }
                )}>
                    <span style={{ color: pathname == '' ? '#b67D43' : 'white' }}>About Us</span>
                </Link>
                <Link key={"Contact Us"} href={'/contact-us'} className={clsx(
                    'text-white text-xs pt-1 mt-2',
                    {
                        'font-medium': pathname == '/contact-us',
                    }
                )}>
                    <span style={{ color: pathname == '' ? '#b67D43' : 'white' }}>Contact Us</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
