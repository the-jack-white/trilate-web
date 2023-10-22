import { Form, HeroContainer, KeyPoints, PageContainer } from "@/components";

const Booking = () => {
  return (
    <PageContainer>
      <HeroContainer
        path="Book a session"
        description="We're here to answer your questions, discuss your project, and provide the support you need. Contact us today to take the next step:"
      >
        <Form />
        <KeyPoints
          heading="Business Hours:"
          body="We're available to assist you during your business hours. 
          Whether you have a quick question or want to schedule a consultation, we're here to help."
        />
      </HeroContainer>
    </PageContainer>
  );
};

export default Booking;
