import React from 'react';

// Single dance form renedered here with description
const DanceForm = ({ bio, imageSrc, name }) => {
  const imageUrl = `/images/${imageSrc}.jpg`;

  return (
    <div className="grid justify-center rounded overflow-hidden shadow-lg p-6 text-center ">
      <div className="mb-6">
        <div className="font-bold text-lg col-span-4 ">{name}</div>
      </div>
      <div className="mb-6 grid justify-center">
        <img
          className="w-24 h-24"
          src={imageUrl}
          animationDuration="1"
          applyAspectRatio="true"
        />
      </div>
      <div>{bio.substr(0, 70) + '...'}</div>
    </div>
  );
}

export default DanceForm;