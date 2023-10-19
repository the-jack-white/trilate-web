import { Container, Header } from "@/components";

const { Client } = require("@notionhq/client");

export default function Home() {
  const notionHandler = async () => {
    try {
      const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
      const databaseId = process.env.NEXT_PUBLIC_NOTION_DB_ID;
      const myPage = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      });

      console.log("My Page: ", myPage);
    } catch (error) {
      console.error(error);
    }
  };

  notionHandler();

  return (
    <div>
      <Container>
        <Header />
      </Container>
    </div>
  );
}
