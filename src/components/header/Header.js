import { motion, useCycle } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(true, false);

  return (
    <motion.div
      className='header'
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      onAnimationComplete={toggleOpen}
    >
      <div className='header__inner'>
        <Logo />
        <motion.nav
          className='header__nav'
          animate={isOpen ? 'open' : 'closed'}
        >
          <ThemeToggle />
          <Navigation isOpen={isOpen} />
          <MenuToggle toggle={toggleOpen} />
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default Header;
