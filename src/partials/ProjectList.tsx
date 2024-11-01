import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Dream-Escape"
        description="A comprehensive hotel booking management system designed to streamline reservations, manage room
        availability, and enhance guest experience. The platform allows users to book rooms,
        view availability in real-time, and manage booking details efficiently, making it an ideal solution
        for both guests and hotel administrators.."
        link="https://dream-escape-55k1.vercel.app/"
        img={{
          src: '/assets/images/dream-escape.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
              <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.FUCHSIA}>TypeScript</Tags>
            <Tags color={ColorTags.LIME}>Supabase</Tags>
            <Tags color={ColorTags.SKY}>Node.js</Tags>
          </>
        }
      />
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
