import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Join my newsletter for updates on my latest projects, coding tips, and insights into the world of
      software engineering. Get exclusive content to help you stay ahead in tech."

    />
  </Section>
);

export { CTA };
