import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';
import Header from './header/Header';
import Loader from './Loader';

function Layout() {
  const [loading, setLoading] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  const { x, y } = useMousePosition();
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key='loader'
          exit={{
            x: '100vw',
            transition: {
              duration: 0.5,
              ease: 'easeIn',
            },
          }}
        >
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <motion.div
            className='cursor'
            animate={{
              x: x - 18,
              y: y - 18,
              scale: cursorHovered ? 1.2 : 1,
              opacity: cursorHovered ? 0.5 : 0,
            }}
            transition={{ ease: 'linear', duration: 0.2 }}
          ></motion.div>
          <Header setCursorHovered={setCursorHovered} />
        </>
      )}
      <Outlet />
    </AnimatePresence>
  );
}

export default Layout;
