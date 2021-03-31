import React from 'react';

import './backDrop.css';

const backdrop = props => (
    <div className="backdrop" onCLick={props.click}/>
);

export default backdrop;