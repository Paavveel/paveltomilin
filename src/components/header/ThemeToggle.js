import React from 'react';
import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path strokeWidth='3' stroke='hsl(0, 0%, 18%)' {...props} />
);

function ThemeToggle() {
  return (
    <motion.button className='header__theme-toggle'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 511.998 511.998'
        width='35'
        height='35'
      >
        <Path d='M304.356 255.566a7.885 7.885 0 0 0-7.885 7.885c0 6.955-5.657 12.613-12.612 12.613s-12.613-5.658-12.613-12.613c0-4.355-3.53-7.885-7.885-7.885s-7.885 3.53-7.885 7.885c0 6.955-5.658 12.613-12.613 12.613s-12.612-5.658-12.612-12.613c0-4.355-3.53-7.885-7.885-7.885s-7.885 3.53-7.885 7.885c0 15.65 12.733 28.383 28.382 28.383 8.05 0 15.327-3.368 20.498-8.769 5.17 5.402 12.448 8.769 20.498 8.769 15.65 0 28.382-12.733 28.382-28.383a7.886 7.886 0 0 0-7.885-7.885zM183.11 230.953a7.885 7.885 0 0 0-7.885 7.885v8.706c0 4.355 3.53 7.885 7.885 7.885s7.885-3.53 7.885-7.885v-8.706a7.885 7.885 0 0 0-7.885-7.885z' />
        <Path d='M422.926 203.377c-3.236-6.992-10.032-11.336-17.737-11.336h-76.972l32.138-172.285c1.405-7.533-2.3-14.806-9.219-18.099-6.919-3.292-14.898-1.58-19.859 4.259L91.913 287.763c-4.988 5.873-6.077 13.865-2.841 20.857 3.235 6.992 10.032 11.336 17.737 11.336h76.976l-32.14 172.284c-1.406 7.533 2.298 14.806 9.217 18.099a16.814 16.814 0 0 0 7.246 1.658c4.738 0 9.336-2.056 12.615-5.917l239.364-281.846c4.985-5.872 6.075-13.864 2.839-20.857zm-14.861 10.65L168.701 495.874c-.208.245-.443.52-1.061.227-.618-.294-.551-.652-.493-.967l33.882-181.616a7.886 7.886 0 0 0-7.751-9.331h-86.469c-2.176 0-3.12-1.531-3.424-2.189-.305-.658-.86-2.369.549-4.028L343.298 16.123c.144-.169.301-.354.59-.354.128 0 .282.037.472.127.618.294.552.652.493.967L310.974 198.48a7.886 7.886 0 0 0 7.751 9.332h86.463c2.176 0 3.12 1.531 3.424 2.189.306.657.863 2.366-.547 4.026z' />
        <Path d='M343.613 230.953a7.885 7.885 0 0 0-7.885 7.885v8.706a7.885 7.885 0 0 0 7.885 7.885 7.885 7.885 0 0 0 7.885-7.885v-8.706a7.885 7.885 0 0 0-7.885-7.885z' />
      </svg>
    </motion.button>
  );
}

export default ThemeToggle;
