import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ['<Hello/>', 'Engineer', 'Quick Learner'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
