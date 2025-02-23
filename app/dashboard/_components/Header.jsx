'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className='sticky top-0 z-50 flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Link href='/dashboard'>
      <Image
        src={'/flogo.svg'}
        width={350}
        height={300}
        alt='logo'
        className='ml-5'
      />
      </Link>
      <ul className='hidden md:flex gap-6'>
        <Link href={'/dashboard'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard' && 'text-primary font-bold'}`}
          >
            Dashboard
          </li>
        </Link>
        <Link href={'http://127.0.0.1:5500/index.html'}>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard/questions' && 'text-primary font-bold'}`}
        >
          Resume Builder
        </li>
        </Link>
        <Link href={'/aboutus'}>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}
        >
          About Us
        </li>
        </Link>
        <Link href={'howitworks'}>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard/how' && 'text-primary font-bold'}`}
        >
          How it Works?
        </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
