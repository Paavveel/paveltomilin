import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';
import Header from '../components/header/Header';
import Loader from '../components/Loader';

function Layout() {
  const [loading, setLoading] = useState(true);
  const [cursorHovered, setCursorHovered] = useState(false);

  const { x, y } = useMousePosition();
  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key='loader'
            exit={{
              x: '100vw',
              transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.9],
              },
            }}
          >
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header setCursorHovered={setCursorHovered} />
            <Outlet />
          </>
        )}
      </AnimatePresence>

      <motion.div
        className='cursor'
        key='cursor'
        animate={{
          x: x - 18,
          y: y - 18,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 0.5 : 0,
        }}
        transition={{ ease: 'linear', duration: 0.2 }}
      ></motion.div>
    </>
  );
}

export default Layout;
