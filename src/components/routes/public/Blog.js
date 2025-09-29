import { motion } from "framer-motion";

import { Card3 } from "../../utils/cards";

import "./style.scss";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route blog"
    >
      <div className="blog-grid">
        {/* <Card3
          id="1"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        /> */}
      </div>
    </motion.div>
  );
};

export default Blog;
