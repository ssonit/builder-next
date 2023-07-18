import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("@/components/PostItem")),
  {
    name: "PostItem",
    inputs: [
      { name: "title", type: "text" },
      { name: "body", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/Header")),
  {
    name: "Header",
    inputs: [
      {
        name: "links",
        type: "array",
        defaultValue: [
          {
            title: "Home",
            url: "/",
          },
        ],
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "url",
            type: "string",
          },
        ],
      },
    ],
  }
);
