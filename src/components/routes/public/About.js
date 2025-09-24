import "./style.scss";

const About = () => {
  return (
    <div className="route about">
      <div className="about-section about-section-left">
        <img className="about-section-image" alt="" />
        <h3 className="about-section-header">about me</h3>
        <p className="about-section-text"></p>
      </div>
      <div className="about-section about-section-right">
        <img className="about-section-image" alt="" />
        <h3 className="about-section-header">my coding story</h3>
        <p className="about-section-text">
          It's very simple, one day I was overcome with the burning question
          "how do websites work exactly?" Hours later I was on CodeCademy
          writing my very first HTML. This snowballed into FreeCodeCamp, and a
          plethora of YouTube tutorials. Months later I was perfecting my
          React.js, and my curiousity of MERN was encroaching. Within a year, I
          was the friend you went to if you had a band, business, or passion
          which needs a website to make visible to the world.
        </p>
      </div>
      <div className="about-section about-section-left">
        <img className="about-section-image" alt="" />
        <h3 className="about-section-header">my qualities</h3>
        <p className="about-section-text"></p>
      </div>
      <div className="about-section about-section-right">
        <img className="about-section-image" alt="" />
        <h3 className="about-section-header">my influences</h3>
        <p className="about-section-text"></p>
      </div>
      <div className="about-section about-section-left">
        <img className="about-section-image" alt="" />
        <h3 className="about-section-header">when I'm not programming</h3>
        <p className="about-section-text"></p>
      </div>
    </div>
  );
};

export default About;
