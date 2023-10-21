import { HeroContainer, KeyPoints, PageContainer } from "@/components";

const Services = () => {
  return (
    <PageContainer>
      <HeroContainer
        path="Services"
        description="Explore our comprehensive range of digital services designed to boost your online presence and drive growth.
        At [TRILATE], we provide the following services:"
      >
        <KeyPoints
          heading="Web Development:"
          body="From responsive, user-friendly websites to e-commerce solutions, 
          our web development experts bring your digital vision to life. We tailor every website to your brand, 
          ensuring a seamless user experience and strong online presence."
        />
        <KeyPoints
          heading="SEO (Search Engine Optimization):"
          body="Harness the power of SEO to improve your online visibility. 
          Our SEO strategies are data-driven and customized to your industry and audience. 
          We help you climb the search engine rankings and attract more organic traffic."
        />
        <KeyPoints
          heading="Consulting:"
          body="Our consulting services are your bridge to success in the digital landscape. 
          Whether you need help with digital marketing strategies, technology implementation, 
          or business transformation, we provide the expertise to make informed decisions."
        />
        <KeyPoints
          heading="Automation:"
          body="We specialize in automation solutions that transform how your business operates. 
          Automation workflows make your processes more efficient and reduce manual effort, 
          enabling you to focus on what matters most – growth. By setting up tailored automation systems, 
          we help you streamline tasks, eliminate bottlenecks, and boost productivity."
        />
      </HeroContainer>
    </PageContainer>
  );
};

export default Services;
