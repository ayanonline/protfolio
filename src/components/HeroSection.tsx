import { cv } from '@/constants';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
   return (
      <div id="hero" className="flex flex-col items-center p-4 gap-4">
         <Image
            alt="an image"
            height="400"
            width="400"
            src="/ayan.webp"
            className="bg-gray-400 object-cover h-[128px] w-[128px] rounded-full"
         />
         <div>
            <div className="flex flex-col items-center">
               <h1 className="font-bold text-[22px]">Hi, I am Ayan Ghosh</h1>
               <p className="text-center">
                  A very happy person, A passionate Web developer from India.
               </p>
            </div>
            <div className="flex gap-[12px] justify-between p-[12px]">
               <Button radius="sm" className="bg-black text-white w-1/2">
                  <a href={cv}>Download CV</a>
               </Button>
               <Button radius="sm" className="w-1/2">
                  Contact me
               </Button>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
