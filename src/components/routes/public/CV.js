import { motion } from "framer-motion";

import "./style.scss";

const CV = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route cv"
    >
      CV
    </motion.div>
  );
};

export default CV;
