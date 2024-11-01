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
          A versatile Software Engineer with over <a className="text-cyan-400 hover:underline" href="/">
          4 years
        </a>{' '} of experience specializing in
          full-stack development and a focus on backend engineering.
          My skills span across <a className="text-cyan-400 hover:underline"> JavaScript/TypeScript (React, Node.js)</a>
          {' '} and <a className="text-cyan-400 hover:underline"> Python (Django, FastAPI) </a>,
          along with expertise in cloud infrastructure <a className="text-cyan-400 hover:underline"> (AWS, Google
          Cloud)</a>{' '}
          and microservices architecture.
        </>
      }
      avatar={
        <img
            className="h-80 w-64"
            src="/assets/images/avatar.svg"
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
