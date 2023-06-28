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
