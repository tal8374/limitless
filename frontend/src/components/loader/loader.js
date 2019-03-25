import React from 'react';
import './loader.css';

const Loader = props => {
  return (
    <div className={props.className || 'loader'}>
      <div className="loader-spinning-wheel" />
    </div>
  );
};
export default Loader;
