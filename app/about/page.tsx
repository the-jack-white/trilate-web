import { HeroContainer, KeyPoints, PageContainer } from "@/components";

const About = () => {
  return (
    <PageContainer>
      <HeroContainer
        path="About"
        description="Get to know the team behind [TRILATE]. We are more than just a digital agency; we are your partners in success. Our story:"
      >
        <KeyPoints
          heading="Our Story:"
          body="[TRILATE] was founded by a group of passionate individuals with a shared vision for excellence. 
          Our journey started with a commitment to deliver outstanding digital solutions and unparalleled client service. 
          We've since evolved into a team of experts dedicated to helping businesses of all sizes thrive in the digital world."
        />
        <KeyPoints
          heading="Our Team:"
          body="Our team brings a wealth of experience and expertise in web development, SEO, and consulting. 
          We're not just professionals; we're creative thinkers, problem solvers, and digital enthusiasts."
        />
        <KeyPoints
          heading="Client-Centric Approach:"
          body="We are committed to fostering long-term relationships with our clients, built on trust and results. 
          Your success is our success, and we take pride in being your digital partners."
        />
      </HeroContainer>
    </PageContainer>
  );
};

export default About;
