"use client"

import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavList() {
	const pathname = usePathname();
	return (
		<nav className='nav-bg border-gray-200 py-6 mb-16 '>
			<div className='flex items-center justify-between mx-10'>
				<Logo />
				{/* for responsive code */}
				{/* Other commented code */}
				<div className=''>
					<div className='hidden w-full md:block md:w-auto' id='navbar-default'>

						<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
							<li>
								<Link href='/' className={`block text-center py-2 pl-3 pr-4  rounded ${pathname === '/' ? 'border-b-2 border-[#4F63DC] rounded-none' : 'text-black'}`}>Home</Link>
							</li>
							{/* <li>
								<Link href='/contact' className={`block text-center py-2 pl-3 pr-4  rounded ${pathname === '/contact' ? 'bg-primary text-white' : 'text-black'}`}>Contact</Link>
							</li> */}
							<li>
								<Link href='/pdf/Shriya_Resume_compressed.pdf' passHref legacyBehavior>
									<a className={`block text-center py-2 pl-3 pr-4  rounded ${pathname === '/resume' ? 'border-b-2 border-[#4F63DC] rounded-none' : 'text-black'}`} target='_blank' rel="noopener noreferrer">Resume</a>
								</Link>
							</li>
						</ul>

					</div>
				</div>
			</div>
		</nav>
	);
}
