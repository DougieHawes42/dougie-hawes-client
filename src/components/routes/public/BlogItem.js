import axios from "axios";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { Link1 } from "../../utils/links";

import "./style.scss";

const BlogItem = () => {
  const [blogItem, setBlogItem] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchBlogItem = async () => {
      try {
        console.log("Fetching blog item with ID:", id);

        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blog/${id}`
        );

        console.log("Response data:", res.data); // <-- logs correct fetched data

        setBlogItem(res.data);
      } catch (err) {
        console.error("Error fetching blog item:", err);
      }
    };

    if (id) {
      fetchBlogItem();
    }
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route blog-item"
    >
      {blogItem ? (
        <>
          <div className="blog-item-title-box">
            <h3 className="blog-item-title">{blogItem.title}</h3>
            <h3 className="blog-item-subtitle">{blogItem.subtitle}</h3>
            <h3 className="blog-item-date">{blogItem.updatedAt}</h3>
          </div>
          <div className="blog-item-image-box">
            <img
              className="blog-item-image"
              src={`${process.env.REACT_APP_BACKEND_URL}${blogItem.image.url}`}
              alt=""
            />
          </div>
          <div
            className="blog-item-text"
            dangerouslySetInnerHTML={{
              __html: blogItem.html,
            }}
          ></div>
          <div className="blog-item-cta">
            <div className="blog-item-cta-text"></div>
            <div className="blog-item-cta-link-container">
              <Link1 to="/contact" text="contact" />
            </div>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </motion.div>
  );
};

export default BlogItem;
