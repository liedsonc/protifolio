'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Switch } from './ui/switch';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const currentPath = usePathname();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex justify-between h-screen flex-col px-20 py-10">
      <div>
        <h1 className="text-5xl font-black font-sans">
          LC
        </h1>
      </div>
      <ul className='flex flex-col font-light text-base font-sans gap-5'>
        <Link className={`hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/' ? 'text-xl font-semibold' : ''}`} href='/'>
          Home
        </Link>
        <Link className={`hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/about' ? 'text-xl font-semibold' : ''}`} href='/about'>
          About me
        </Link>
        <Link className={`hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/projects' ? 'text-xl font-semibold' : ''}`} href='/projects'>
          Projects
        </Link>
        <Link className={`hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/cv' ? 'text-xl font-semibold' : ''}`} href='/cv'>
          CV
        </Link>
      </ul>

      <div className='flex flex-col gap-2'>
        <h1 className="font-sans font-semibold text-xl ">
          {isDarkMode ? "Sycho Mode" : "Best Mode"}
        </h1>
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        <div>
          <p>a.k.a.</p>
          <p>{isDarkMode ? "light mode" : "dark mode"}</p>

        </div>
      </div>
    </nav>
  );
}
