import React from 'react';
import projects from '@/data/projects.json';
import {
   Card,
   Image,
   Button,
   Link,
   CardHeader,
   CardBody,
   CardFooter,
} from '@nextui-org/react';
import { useRouter } from 'next/router';

const Projects = () => {
   return (
      <div className="p-4">
         <p className="font-bold text-[22px]">Recent Projects</p>
         <div className="flex flex-wrap gap-3 justify-between">
            {projects.map((item, index) => (
               <Card
                  key={index}
                  radius="sm"
                  className="border-none min-w-[165px] max-w-[165px] min-h-[242px] max-h-[242px]"
               >
                  <a href={item.url} target="blank">
                     <img
                        alt="Woman listing to music"
                        className="rounded-md object-cover min-h-[173px] max-h-[173px] w-[173px]"
                        src="https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png"
                     />
                  </a>

                  <div className="p-1">
                     <p className="font-bold">{item.title.slice(0, 16)}...</p>
                     <p>{item.desc.slice(0, 18)}...</p>
                  </div>
               </Card>
            ))}
         </div>
      </div>
   );
};

export default Projects;
