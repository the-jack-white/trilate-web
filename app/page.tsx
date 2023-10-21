import { HeroContainer, KeyPoints, PageContainer } from "@/components";

// const { Client } = require("@notionhq/client");

export default function Home() {
  // const notionHandler = async () => {
  //   try {
  //     const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
  //     const databaseId = process.env.NEXT_PUBLIC_NOTION_DB_ID;
  //     const myPage = await notion.databases.query({
  //       database_id: databaseId,
  //       filter: {
  //         property: "Published",
  //         checkbox: {
  //           equals: true,
  //         },
  //       },
  //     });

  //     console.log("My Page: ", myPage);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // notionHandler();

  return (
    <PageContainer>
      <HeroContainer
        path="Welcome"
        description="This is [TRILATE], your digital solution partner! We specialize in web
        development, SEO, and consulting services. With a passion for
        innovation and a dedication to excellence, we are here to help you
        succeed in the digital landscape."
      >
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
      </HeroContainer>
    </PageContainer>
  );
}
