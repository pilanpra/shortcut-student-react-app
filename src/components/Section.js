import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      {/* <h6>{title}</h6> */}
      {children}
      <hr></hr>
    </section>
    
  );
}

export default Section;
