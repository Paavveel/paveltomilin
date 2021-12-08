import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Panel() {
  const [panelComplete, setPanelComplete] = useState(false);
  return (
    <>
      <motion.div
        style={{ background: panelComplete ? '#e7e7de' : '#e7dee7' }}
        className='transition-loader__left-panel'
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{
          ease: [0.6, -0.05, 0.01, 0.9],
          duration: 2,
          times: [0, 0.5, 1],
        }}
      ></motion.div>
      <motion.div
        style={{ background: panelComplete ? '#e7e7de' : '#e7dee7' }}
        className='transition-loader__right-panel'
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{
          ease: [0.6, -0.05, 0.01, 0.9],
          duration: 2,
          times: [0, 0.5, 1],
        }}
        onAnimationComplete={() => setPanelComplete(!panelComplete)}
      ></motion.div>
    </>
  );
}

export default Panel;
