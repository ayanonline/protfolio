'use client';
import React, { useState } from 'react';
import skills from '@/data/skills.json';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';

const Skills = () => {
   return (
      <div id="skills" className="p-4">
         <p className="text-[22px] font-bold">Skills</p>
         <Accordion isCompact={true} variant="light" defaultExpandedKeys="1">
            <AccordionItem key="1" aria-label="Accordion 1" title="Frontend">
               <div className="flex gap-2 flex-wrap">
                  {skills.frontend.map((item, index) => (
                     <Button key={index} radius="sm">
                        {item}
                     </Button>
                  ))}
               </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Backend">
               <div className="flex gap-2 flex-wrap">
                  {skills.backend.map((item, index) => (
                     <Button key={index} radius="sm">
                        {item}
                     </Button>
                  ))}
               </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Tools">
               <div className="flex gap-2 flex-wrap">
                  {skills.tools.map((item, index) => (
                     <Button key={index} radius="sm">
                        {item}
                     </Button>
                  ))}
               </div>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Languages">
               <div className="flex gap-2 flex-wrap">
                  {skills.languages.map((item, index) => (
                     <Button key={index} radius="sm">
                        {item}
                     </Button>
                  ))}
               </div>
            </AccordionItem>
         </Accordion>
      </div>
   );
};

export default Skills;
