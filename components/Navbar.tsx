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

  const playSound = () => {
    const audio = new Audio("/click.mp3");
    audio.play();
  };

  return (
    <nav className="hidden md:flex justify-between flex-1 max-w-40 flex-col  md:visible">
      <div>
        <h1 className="text-5xl font-black font-sans">
          LC
        </h1>
      </div>
      <ul className='flex flex-col font-light text-base font-sans gap-5'>
        <Link onMouseEnter={playSound} className={`hover:ml-1 hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/' ? 'text-xl font-semibold' : ''}`} href='/'>
          Home
        </Link>
        <Link onMouseEnter={playSound} className={`hover:ml-1 hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/about' ? 'text-xl font-semibold' : ''}`} href='/about'>
          About me
        </Link>
        <Link onMouseEnter={playSound} className={`hover:ml-1 hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/projects' ? 'text-xl font-semibold' : ''}`} href='/projects'>
          Projects
        </Link>
        <Link onMouseEnter={playSound} className={`hover:ml-1 hover:text-xl hover:font-normal ease-in-out transition duration-500 transform ${currentPath === '/cv' ? 'text-xl font-semibold' : ''}`} href='/cv'>
          CV
        </Link>
      </ul>

      <div className='flex flex-col gap-2'>
        <h1 className="font-sans font-semibold lg:text-xl md:text-lg ">
          {isDarkMode ? "Sycho Mode" : "Best Mode"}
        </h1>
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        <div className='md:text-sm lg:text-base'>
          <p>a.k.a.</p>
          <p>{isDarkMode ? "light mode" : "dark mode"}</p>

        </div>
      </div>
    </nav>
  );
}
