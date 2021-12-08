import React from 'react';
import { motion } from 'framer-motion';

const followVariant = {
  animate: {
    width: '100%',
    transition: {
      delay: 3.2,
      velocity: 10,
      damping: 15,
    },
  },
};

const spreadVariant = {
  animate: {
    height: '100%',
    transition: {
      delay: 3.9,
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};
const progressVariant = {
  animate: {
    width: '100%',
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className='loader'>
      <motion.div
        className='loader__follow'
        variants={followVariant}
        animate='animate'
      ></motion.div>
      <motion.div
        className='loader__spread'
        variants={spreadVariant}
        animate='animate'
        onAnimationComplete={() => setLoading(false)}
      ></motion.div>
      <motion.div
        className='loader__progress-bar'
        variants={progressVariant}
        animate='animate'
      ></motion.div>
    </motion.div>
  );
};

export default Loader;
