import { motion } from "motion/react";

const AnimateDiv = ({ children, className }) => {
  return (
    // <div className={className}>{children}</div>
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={className}
      >
      {children}
    </motion.div>
  )
}

export default AnimateDiv;