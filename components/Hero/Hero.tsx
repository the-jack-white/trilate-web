import { Button, KeyPoints } from "..";

type HeroTypes = {
  path?: string;
};

const Hero = ({ path }: HeroTypes) => {
  return (
    <div className="mt-4 pt-4 md:p-4">
      <h1 className="text-2xl uppercase dark:text-slate-200">{path}</h1>
      <div>
        <p className="p-4 text-sm md:text-base dark:text-slate-200">
          This is [TRILATE], your digital solution partner! We specialize in web
          development, SEO, and consulting services. With a passion for
          innovation and a dedication to excellence, we are here to help you
          succeed in the digital landscape.
        </p>
        <KeyPoints
          heading="Your Success, Our Mission:"
          body="[TRILATE] is driven by the mission to empower your business with
        cutting-edge digital solutions. Our success is measured by your
        success."
        />
        <KeyPoints
          heading="Comprehensive Digital Solutions:"
          body="We offer a range of services tailored to your unique needs. Whether you need a stunning website, improved search engine rankings, or expert guidance, we've got you covered."
        />
        <KeyPoints
          heading="Experienced Team:"
          body="Our experienced team is committed to delivering results that matter. We're not just service providers; we're your partners in digital growth"
        />

        <div className="pb-4 text-lg">
          <Button title="Book a session" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
