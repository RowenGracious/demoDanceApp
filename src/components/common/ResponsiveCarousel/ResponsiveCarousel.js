import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { danceFormsLists } from '../../../utlis/utils';

export default function ResponsiveCarousel() {
  const data = danceFormsLists.slice(0, 10);
  
  return (
    <Carousel className="mt-8" showArrows={true} >
      {data.map((danceform) => (
        <div>
          <img className="w-1/4 h-1/4" src={`/images/${danceform.imageSrc}.jpg`} width='25' height='25'/>
          <p className="legend">{danceform.name}</p>
      </div>
      ))}
    </Carousel>
  );
}