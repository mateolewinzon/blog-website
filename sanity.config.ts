import { defineConfig } from "sanity";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  projectId: "qndoziy1",
  dataset: "production",
  plugins: [markdownSchema()],
  schema: {
    types: [
      {
        name: "post",
        type: "document",
        title: "Post",
        fields: [
          { name: "title", title: "Title", type: "string" },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
          },
          { name: "content", title: "Content", type: "markdown" },
          { name: "teaser", title: "Teaser", type: "string" },
          { name: "image", title: "Image", type: "image" },
          { name: "date", title: "Date", type: "datetime" },
          {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
          },
        ],
      },
      {
        name: "category",
        type: "document",
        title: "Category",
        fields: [{ name: "name", title: "Name", type: "string" }],
      },
    ],
  },
});
