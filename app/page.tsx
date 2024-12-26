'use client';

import { useState } from 'react';
import { Montserrat } from "next/font/google";
import Instagram from "../public/instagram.svg";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export default function Home() {



  return (
    <div className={`flex flex-col h-full items-center justify-center ${montserrat.variable}`}>
      <div></div>

      <div className='flex flex-col'>
        <h2 className="text-9xl font-extrabold uppercase">
          Liedson
        </h2>
        <h1 className="text-[220px] font-extrabold uppercase mt-[-50px]">
          Correia
        </h1>
        <p className="font-extralight text-3xl mt-[-60px]">Software Developer</p>
      </div>
      <div className='flex absolute bottom-20 self-end '>
        <div></div>
        <div className='flex justify-center items-center gap-5'>
          <h1 className="uppercase text-3xl font-medium">
            Hit me up
          </h1>
          <div className='flex gap-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>

        </div>
      </div>


    </div>
  );
}