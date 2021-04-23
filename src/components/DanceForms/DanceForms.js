import React from 'react';
import DanceForm from '../DanceForm/DanceForm';
import { danceFormsLists } from '../../utlis/utils';

//Collection of dance forms
const DanceForms = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
      {danceFormsLists.map((danceform) => (
          <DanceForm key={danceform.id} {...danceform} />
      ))}
    </div>
  );
}

export default DanceForms