import { Link1 } from "../../utils/links";

// hard coding
import Site from "../../../display/media/site.png";
// hard coding

import "./style.scss";

const BlogItem = () => {
  return (
    <div className="route blog-item">
      <div className="blog-item-title-box">
        <h3 className="blog-item-title">Title1</h3>
        <h3 className="blog-item-subtitle">Subtitle1</h3>
        <h3 className="blog-item-date">24.09.25</h3>
      </div>
      <div className="blog-item-image-box">
        <img className="blog-item-image" src={Site} alt="" />
      </div>
      <div
        className="blog-item-text"
        dangerouslySetInnerHTML={{
          __html: "<h1>heading</h1><p>dsa dsad ds fdsfjfsd...</p>",
        }}
      ></div>
      <div className="blog-item-cta">
        <div className="blog-item-cta-text">
          Have a response to this call to action? let me know on the social
          media below?
        </div>
        <Link1 to="/contact" text="contact" />
      </div>
    </div>
  );
};

export default BlogItem;
