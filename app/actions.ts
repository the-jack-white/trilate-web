"use server";

const { Client } = require("@notionhq/client");
import { CallbackType } from "@/components/Form/Form.types";

export async function notionHandler(content: CallbackType) {
  try {
    const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
    const databaseId = process.env.NEXT_PUBLIC_NOTION_DB_ID;
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: content.name,
              },
            },
          ],
        },
        Company: {
          rich_text: [
            {
              text: {
                content: content.company,
              },
            },
          ],
        },
        Email: {
          email: content.email,
        },
        Phone: {
          phone_number: content.phone,
        },
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
