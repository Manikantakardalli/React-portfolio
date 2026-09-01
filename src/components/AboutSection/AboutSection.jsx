import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/images/profile.jpeg' alt='Manikanta' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Manikanta, a developer based in India building fast, accessible web experiences.</p>
          <p>I am a passionate and motivated developer with an interest in web development and programming. I enjoy creating responsive, user-friendly websites and learning new technologies. I am continuously improving my skills through projects and practical experience, with a goal of building useful and innovative solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;