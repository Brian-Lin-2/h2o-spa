import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { PropTypes } from "prop-types";

export default function Motion({ className, children, duration }) {
  const time = duration;

  const fadeDown = {
    visible: { opacity: 1, y: 0, transition: { duration: time } },
    hidden: { opacity: 0, y: -25 },
  };

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
      variants={fadeDown}
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
  duration: PropTypes.string,
};
