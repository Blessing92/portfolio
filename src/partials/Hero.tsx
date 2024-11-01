import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Perseverance</GradientText> 👋
        </>
      }
      description={
        <>
          A passionate Software Engineer looking for a new challenge. With experience specializing in
          full-stack development and a focus on backend engineering.
          My skills span across <a className="text-cyan-400 hover:underline"> JavaScript/TypeScript (Node.js, React.js)</a>
          {' '} and <a className="text-cyan-400 hover:underline"> Python (Django, FastAPI) </a>,
          along with expertise in cloud infrastructure <a className="text-cyan-400 hover:underline"> (AWS, Google
          Cloud)</a>{' '} and microservices architecture. I thrive on tackling challenging problems, approaching each
          one with patience, determination, and unwavering perseverance.
        </>
      }
      avatar={
        <img
            className="h-80 w-64"
            src="/assets/images/percy.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://x.com/PercyMunga">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/persemunga/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
