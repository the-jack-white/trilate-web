import { Button, HeroContainer, PageContainer } from "@/components";
import Link from "next/link";

const Pricing = () => {
  return (
    <PageContainer fullscreen>
      <HeroContainer
        path="Pricing"
        description="Our pricing is transparent and designed to meet the diverse needs of businesses. 
    Choose the plan that suits your requirements and budget. We offer the following packages:"
      >
        <div className="w-full flex justify-center">
          <Link href="/booking">
            <Button title="Get Started" />
          </Link>
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-2 ">
          {/* THIS IS THE CARD */}
          <div className="w-full md:w-1/3 p-4 border border-slate-600 rounded-lg dark:border-slate-200">
            <h1 className="text-2xl uppercase dark:text-slate-200">Basic:</h1>
            <p className="text-sm md:text-base dark:text-slate-200">
              Ideal for startups and small businesses looking to establish an
              online presence. This package includes essential web development,
              basic SEO, and introductory consulting.
            </p>
            <ul className="mt-4 flex flex-col gap-2 uppercase dark:text-slate-200">
              <li>- Essential web development</li>
              <li>- Basic SEO</li>
              <li>- Introductory consulting</li>
              <li>
                - For startups and small businesses looking to establish an
                online presence
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4 border border-slate-600 rounded-lg dark:border-slate-200">
            <h1 className="text-2xl uppercase dark:text-slate-200">Pro:</h1>
            <p className="text-sm md:text-base dark:text-slate-200">
              A comprehensive plan for businesses seeking to enhance their
              digital footprint. With the Pro Package, you get advanced web
              development, extensive SEO, strategic consulting tailored to your
              goals, and full integration of automation workflows to streamline
              your operations and boost productivity.
            </p>
            <ul className="mt-4 flex flex-col gap-2 uppercase dark:text-slate-200">
              <li>- Advanced web development</li>
              <li>- Extensive SEO</li>
              <li>- Strategic consulting tailored to your goals</li>
              <li>
                - Full integration of automation workflows to streamline your
                operations and boost productivity
              </li>
              <li>
                - Ideal for businesses seeking to enhance their digital
                footprint
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4 border border-slate-600 rounded-lg dark:border-slate-200">
            <h1 className="text-2xl uppercase dark:text-slate-200">
              Enterprise:
            </h1>
            <p className="text-sm md:text-base dark:text-slate-200">
              Tailored solutions for larger organizations with complex
              requirements. The Enterprise Package offers advanced web
              development, extensive SEO, in-depth consulting, and additional
              tailored features designed to drive digital transformation.
            </p>
            <ul className="mt-4 flex flex-col gap-2 uppercase dark:text-slate-200">
              <li>- Advanced web development</li>
              <li>- Extensive SEO</li>
              <li>- In-depth consulting</li>
              <li>
                - Comprehensive automation solutions designed to maximize
                productivity
              </li>
              <li>
                - Tailored solutions for larger organizations with complex
                requirements
              </li>
              <li>
                - Custom requirements and features for digital transformation
              </li>
            </ul>
          </div>
        </div>
      </HeroContainer>
    </PageContainer>
  );
};

export default Pricing;
