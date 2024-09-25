import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
  const { pathname } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.15,
      },
    },
  };
  return (
    <div className="effect-1">
      <AnimatePresence exitBeforeEnter={true} initial={true}>
        <motion.div animate="in" exit="out" initial="out" key={pathname} variants={variants}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

Transition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Transition;
