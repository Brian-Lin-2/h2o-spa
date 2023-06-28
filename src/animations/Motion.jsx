import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { PropTypes } from "prop-types";

const fadeUp = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -50 },
};

export default function Motion({ className, children }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      animate={control}
      initial="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}

Motion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};
