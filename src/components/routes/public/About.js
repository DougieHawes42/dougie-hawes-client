import "./style.scss";

const About = () => {
  return (
    <div className="route about">
      <div className="about-section">
        <img className="about-hero-image" src="/profile.jpg" alt="Your Name" />
        <h3 className="about-heading">Your Name</h3>
        <p className="about-subheading">Full-stack MERN Web Developer</p>
      </div>
      <div className="about-section">
        <h3 className="about-heading">About Me</h3>
        <p className="about-paragraph">
          What once was a curious look into "how do websites work exactly?" has
          now snowballed into a passion which is a career path that was waiting
          for me the whole time. I have always been creative with a strong sense
          of logic, and nothing makes those two strengths work in harmony more
          than being a FullStack web developer. I'm a mechanic who can fit a
          powerful engine as well as design beautiful bodywork.
        </p>
        <p className="about-paragraph">
          Outside of coding, I enjoy contributing to open-source projects,
          writing tech articles, and experimenting with new web technologies. I
          am a natural teacher, and newbies like to come to me for valuable and
          unintimidating advice.
        </p>
        <p className="about-paragraph">
          While I feel at home at a computer, I adore my time out with nature. I
          make use of my "phone prison" to get away and connect with the actual
          reality.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-heading">Tech Stack</h3>
        {/* Could map through your skills array here */}
        {/* Example: <SkillCard ... /> */}
        <h3 className="about-heading">Fun Facts</h3>
        <ul>
          <li>💻 Love building side projects</li>
          <li>🎵 Enjoy music production in spare time</li>
          <li>🌍 Interested in tech communities and mentoring</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
