import React from 'react';
import { Blobs } from "../Blobs";
// import { Heading } from "../../atoms/Heading";

export const Hero = () => {
  // const { strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     strapiGlobal {
  //       hero {
  //         label
  //         link
  //       }
  //     }
  //   }
  // `);

  // const renderHero = strapiGlobal.hero.map((item, index) => {
  //   if (item.link) {
  //     return (
  //       <Link rel="canonical" to={item.link} className="z-10 no-underline">
  //         <h1 className="text-[12vw] font-black uppercase cursor-pointer select-none md:text-[10vw] lg-text-[10vh] xl:text-[12vh] font-brother text-white">
  //           {item.label}
  //         </h1>
  //       </Link>
  //     )
  //   } else {
  //     return <Heading key={index} level={2} className="font-brother font-black uppercase mb-4 xl:mb-0 select-none !text-[8vw] lg:!text-[6vh] xl:!text-[8vh] !tracking-normal text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40">{item.label}</Heading>
  //   }
  // })

  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-screen overflow-hidden text-center px-4 md:pl-16 md:pr-8 lg:px-16 lg:py-16 md:items-end md:text-right bg-midnight">
      <Blobs className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[32vw] xl:h-[56vh]" />
      {/* {renderHero} */}
    </div>
  );
};
