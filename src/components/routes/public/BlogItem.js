import { Link1 } from "../../utils/links";

import "./style.scss";

const BlogItem = () => {
  return (
    <div className="route blog-item">
      <div className="blog-item-title-box">
        <h3 className="blog-item-title"></h3>
        <h3 className="blog-item-subtitle"></h3>
        <h3 className="blog-item-date"></h3>
      </div>
      <div className="blog-item-image-box">
        {/* <img className="blog-item-image" src={} alt="" /> */}
      </div>
      <div
        className="blog-item-text"
        dangerouslySetInnerHTML={{
          __html: "",
        }}
      ></div>
      <div className="blog-item-cta">
        <div className="blog-item-cta-text"></div>
        <div className="blog-item-cta-link-container">
          <Link1 to="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
