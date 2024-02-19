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

export default function Header() {
   return (
      <header className="hidden md:block">
         <Navbar isBordered maxWidth="full" className="px-[40px] py-[12px]">
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
      </header>
   );
}
