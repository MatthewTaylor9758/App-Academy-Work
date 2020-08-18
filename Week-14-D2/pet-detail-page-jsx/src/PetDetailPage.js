import React from 'react';
import Navigation from './Navigation';
import PetDetails from './PetDetails';

const PetDetailPage = (props) =>
  <>
    <Navigation pet={props.pet}/>
    <PetDetails pet={props.pet} />

  </>
;

export default PetDetailPage;
