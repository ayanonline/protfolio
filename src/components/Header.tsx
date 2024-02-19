import React from 'react';
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   Link,
   Input,
   DropdownItem,
   DropdownTrigger,
   Dropdown,
   DropdownMenu,
   Avatar,
   Button,
} from '@nextui-org/react';
import { GoHome } from 'react-icons/go';
import { FaFolderOpen } from 'react-icons/fa6';
import { CiFileOn, CiFolderOn, CiHome, CiMail } from 'react-icons/ci';

export default function Header() {
   return (
      <header className="w-full fixed bottom-0 z-50 md:top-0 h-[75px]">
         <Navbar
            isBordered
            maxWidth="full"
            className="hidden md:block px-[40px] py-[12px]"
         >
            <NavbarContent justify="start">
               <NavbarBrand className="mr-4">
                  {/* <AcmeLogo /> */}
                  <p className="hidden sm:block font-bold text-inherit">Ayan Ghosh</p>
               </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
               <NavbarItem>
                  <Link color="foreground" href="#">
                     About
                  </Link>
               </NavbarItem>
               <NavbarItem isActive>
                  <Link href="#" aria-current="page" color="secondary">
                     Skills
                  </Link>
               </NavbarItem>
               <NavbarItem>
                  <Link color="foreground" href="#">
                     Projects
                  </Link>
               </NavbarItem>
               <NavbarItem>
                  <Button className="bg-black text-white">Contact me</Button>
               </NavbarItem>
            </NavbarContent>
         </Navbar>

         <div className="md:hidden rounded-tl-md rounded-tr-md border bg-white shadow-inner flex justify-around h-full">
            <div className="flex flex-col justify-center items-center">
               <CiHome className="h-6 w-6" />
               <span>Home</span>
            </div>
            <div className="flex flex-col justify-center items-center">
               {/* <FaFolderOpen className="h-6 w-6" /> */}
               <CiFolderOn className="h-6 w-6" />
               <span>Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center">
               <CiFileOn className="h-6 w-6" />
               <span>Resume</span>
            </div>
            <div className="flex flex-col justify-center items-center">
               <CiMail className="h-6 w-6" />
               <span>Contact</span>
            </div>
         </div>
      </header>
   );
}
