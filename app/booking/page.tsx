"use client";

import {
  Button,
  HeroContainer,
  Input,
  KeyPoints,
  PageContainer,
} from "@/components";

const Booking = () => {
  const formSubmitHandler = () => {
    console.log("SUBMIT FORM....");
  };

  return (
    <PageContainer>
      <HeroContainer
        path="Book a session"
        description="We're here to answer your questions, discuss your project, and provide the support you need. Contact us today to take the next step:"
      >
        <form>
          <Input
            placeholder="Full Name"
            name="full_name"
            // reference={emailRef}
          />
          <Input
            placeholder="Company Name (if applicable)"
            name="company_name"
            // reference={emailRef}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            // reference={emailRef}
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            name="phone_number"
            // reference={emailRef}
          />
        </form>
        <div className="w-full flex justify-center">
          <Button title="Submit" callback={formSubmitHandler} />
        </div>
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
