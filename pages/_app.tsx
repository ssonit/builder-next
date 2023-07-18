import type { AppProps } from "next/app";
import builder from "@builder.io/react";
import builderConfig from "@/configs/builder";

import "@/utils/registerComponent";
import "@/styles/globals.css";

builder.init(builderConfig.PUBLIC_API_KEY);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
