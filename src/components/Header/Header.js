import React from 'react';
import ResponsiveCarousel from '../common/ResponsiveCarousel/ResponsiveCarousel';

const Header = () => (
  <div className="bg-gray-200 rounded-md mb-6 p-6 pt-12 pb-12 mt-8">
    <div className="grid grid-cols-1 gap-4 text-center">
      <p>
        Dance is an art that is practiced or performed by different sets of people in different ways. 
        Hence Dance can be classified based on country, region, ethnicity, styles etc. 
        For example, in India, there are certain classical dances that are quite famous and in other regions like Brazil has its own traditional Dance. 
        But, there are some dances which are extensively performed and practiced all over the world. Here is a list of some of them.
      </p>
    </div>
    <ResponsiveCarousel />
  </div>
);

export default Header;