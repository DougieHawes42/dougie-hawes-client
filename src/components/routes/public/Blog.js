import { Card3 } from "../../utils/cards";

// hard coding
import Site from "../../../display/media/site.png";
// hard coding

import "./style.scss";

const Blog = () => {
  return (
    <div className="route blog">
      <div className="blog-grid">
        <Card3
          id="1"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        />
        <Card3
          id="2"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        />
        <Card3
          id="3"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        />
        <Card3
          id="4"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        />
        <Card3
          id="5"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        />
        <Card3
          id="6"
          image={Site}
          title="title1"
          date="24.9.25"
          text="Quisque id maximus eros, eu vulputate risus. Mauris dictum id justo eu feugiat. Quisque eu justo ac felis pellentesque volutpat id a magna. Morbi eu efficitur sapien. Fusce augue enim, feugiat non interdum eget, malesuada sed magna. Vestibulum finibus metus quis felis."
        />
      </div>
    </div>
  );
};

export default Blog;
