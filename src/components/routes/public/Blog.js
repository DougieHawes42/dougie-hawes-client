import axios from "axios";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Card3 } from "../../utils/cards";

import "./style.scss";

const Blog = () => {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blog`
        );
        setBlogItems(res.data);
      } catch (error) {
        console.error("Error fetching work items:", error.message);
      }
    };

    fetchBlog();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route blog"
    >
      <div className="blog-grid">
        {blogItems ? (
          blogItems.map((b) => (
            <Card3
              key={b._id}
              id={b._id}
              image={`${process.env.REACT_APP_BACKEND_URL}${b.image.url}`}
              title={b.title}
              date="24.9.25"
              text={b.html}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </motion.div>
  );
};

export default Blog;
