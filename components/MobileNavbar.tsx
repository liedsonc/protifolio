"use client"
import React from 'react';
import { useState } from 'react';
import { Switch } from './ui/switch';

export default function MobileNavbar() {
    const [isDarkMode, setIsDarkMode] = useState(true);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className="flex justify-between items-center md:hidden">
            <h1 className="text-3xl font-black font-sans">
                LC
            </h1>
            <div>
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            </div>
        </nav>
    );
}