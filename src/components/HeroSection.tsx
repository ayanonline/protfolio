import { Button, Image } from '@nextui-org/react';
import React from 'react';

const HeroSection = () => {
   return (
      <div className="flex flex-col items-center p-4 gap-4">
         <Image
            alt="an image"
            radius="full"
            src="https://ayanghosh.netlify.app/_ipx/w_1920,q_75/%2Fayan.webp?url=%2Fayan.webp&w=1920&q=75"
            className="bg-gray-400 object-cover h-[128px] w-[128px]"
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
                  Download CV
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
