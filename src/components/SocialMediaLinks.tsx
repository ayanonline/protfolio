import { Button } from '@nextui-org/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutgoingMail } from 'react-icons/md';

const SocialMediaLinks = () => {
   return (
      <div className="p-4">
         <p className="text-[22px] font-bold mb-4">Social Media Links</p>
         <div className="flex gap-2">
            <Button
               variant="bordered"
               radius="sm"
               className="border-[#DEDEDE] border p-2 h-[58px] flex-grow"
            >
               <FaGithub className="h-6 w-6" /> <span className="font-bold">GitHub</span>
            </Button>
            <Button
               variant="bordered"
               radius="sm"
               className="border-[#DEDEDE] border p-2 h-[58px] flex-grow"
            >
               <FaLinkedin className="h-6 w-6" />
               <span className="font-bold">LinkedIn</span>
            </Button>
            <Button
               variant="bordered"
               radius="sm"
               className="border-[#DEDEDE] border p-2 h-[58px] flex-grow"
            >
               <MdOutgoingMail className="h-6 w-6" />
               <span className="font-bold">Gmail</span>
            </Button>
         </div>
      </div>
   );
};

export default SocialMediaLinks;
