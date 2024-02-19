import React from 'react';
import projects from '@/data/projects.json';
import { Card, Button, Link, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Projects = () => {
   return (
      <div id="projects" className="p-4">
         <p className="font-bold text-[22px]">Recent Projects</p>
         <div className="flex flex-wrap gap-3 justify-between">
            {projects.map((item, index) => (
               <Card key={index} radius="sm" className="border-none w-[48%] ">
                  <a href={item.url} target="blank">
                     <Image
                        alt="Woman listing to music"
                        width="400"
                        height="400"
                        className="rounded-md object-cover  w-full border-b-1"
                        src={item.image}
                     />
                  </a>

                  <div className="p-1">
                     <p className="font-bold text-center">{item.title}</p>
                     {/* <p>{item.desc.slice(0, 18)}...</p> */}
                  </div>
               </Card>
            ))}
         </div>
      </div>
   );
};

export default Projects;
