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
              <Tags color={ColorTags.AMBER}>React</Tags>
            <Tags color={ColorTags.FUCHSIA}>TypeScript</Tags>
            <Tags color={ColorTags.LIME}>Supabase</Tags>
            <Tags color={ColorTags.SKY}>Node.js</Tags>
          </>
        }
      />
      <Project
        name="Rapid-Crust"
        description="A streamlined platform for ordering fresh, oven-baked pizzas with the convenience of quick delivery.
        This project ensures that customers enjoy quality pizza, straight from the oven to their doorstep,
        with features for easy ordering, real-time tracking, and customized pizza selections. Perfect for those craving
        an authentic pizza experience at home."
        link="https://rapid-crust.vercel.app/"
        img={{ src: '/assets/images/rapid-crust.png', alt: 'rapid crust' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.INDIGO}>Python (FastApi)</Tags>
              <Tags color={ColorTags.EMERALD}>Tailwind css</Tags>
          </>
        }
      />
        <Project
            name="PerveraFlow"
            description="A powerful tool designed to streamline project and business management for teams and
            organizations. This platform enables seamless collaboration, efficient task tracking, and real-time project
            insights, making it easier to manage workflows, assign roles, and monitor progress. Ideal for businesses
            looking to enhance productivity, improve team coordination, and achieve goals faster."
            link="/"
            img={{ src: '/assets/images/project-maps.png', alt: 'perseverance-flow' }}
            category={
                <>
                    <Tags color={ColorTags.EMERALD}>Coming soon...</Tags>
                    <Tags color={ColorTags.FUCHSIA}>React</Tags>
                    <Tags color={ColorTags.EMERALD}>Typescript</Tags>
                    <Tags color={ColorTags.YELLOW}>Nodejs</Tags>
                    <Tags color={ColorTags.YELLOW}>Supabase</Tags>
                    <Tags color={ColorTags.YELLOW}>Postgres</Tags>
                </>
            }
        />
    </div>
  </Section>
);

export { ProjectList };
