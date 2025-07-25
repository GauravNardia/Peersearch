import Image from 'next/image'
import React from 'react'

interface Props {
    heading: string;
    subheading: string;
    img: string
}

const GridCard = ({heading, subheading, img}: Props) => {
  return (
      <div className="mt-6 max-w-2xl w-full flex items-start text-left relative">
        <div className=" mx-auto flex flex-col sm:flex-row gap-10 items-center">
         <div>
          <h2 className="text-xl font-semibold text-neutral-800">
            {heading}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
             {subheading}
          </p>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-xl rounded-2xl overflow-hidden">
            <Image
              src={img}
              alt="Platform Integrations"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      </div>  
      )
}

export default GridCard