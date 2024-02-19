import { github, linkedin } from '@/constants';
import { Button } from '@nextui-org/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutgoingMail } from 'react-icons/md';

const SocialMediaLinks = () => {
   return (
      <div id="social" className="p-4">
         <p className="text-[22px] font-bold mb-4">Social Media Links</p>
         <div className="flex gap-2">
            <Button
               variant="bordered"
               radius="sm"
               className="border-[#DEDEDE] border p-2 h-[58px] flex-grow"
            >
               <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center gap-2"
               >
                  <FaGithub className="h-6 w-6" />
                  <span className="font-bold">GitHub</span>
               </a>
            </Button>
            <Button
               variant="bordered"
               radius="sm"
               className="border-[#DEDEDE] border p-2 h-[58px] flex-grow"
            >
               <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center gap-2"
               >
                  <FaLinkedin className="h-6 w-6" />
                  <span className="font-bold">LinkedIn</span>
               </a>
            </Button>
            <Button
               variant="bordered"
               radius="sm"
               className="border-[#DEDEDE] border p-2 h-[58px] flex-grow"
            >
               <a
                  href="mailto:ayanghosh.dev@gmail.com"
                  className="flex justify-between items-center gap-2"
               >
                  <MdOutgoingMail className="h-6 w-6" />
                  <span className="font-bold">Gmail</span>
               </a>
            </Button>
         </div>
      </div>
   );
};

export default SocialMediaLinks;
