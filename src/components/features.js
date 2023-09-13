import React, { useState } from "react";
import Image from "next/image";
import logo from '../../public/pngwing.png'

export default function Features(props) {
  const [enter, setEnter] = useState(false);

  console.log(props, "Getting images==================");
  return (
    <div
      className="border-r-2 hover:opacity-80 feature-image  object-cover hover:bg-gradient-to-r from-blue-500 to-transparent h-full w-full"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      <div className="flex justify-center items-center  h-full">
        {enter ? (
          <div className="ease-in duration-500 ">
            <Image
          src={props.imageurl}
          alt="property-image"
          className="filter contrast-75 object-contain cursor-pointer"
        />      
          </div>
        ) :
        (
          <div className="object-contain p-2 ease-in-out duration-700 opacity-70">
    
           <Image height={200} width={250} src={props.logoimg} alt="property-image" className=" " />
          </div>
        )

        
        }
      </div>
    </div>
  );
}
