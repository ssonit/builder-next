import { builderConfig } from "@/configs/builder";
import builder from "@builder.io/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/utils/registerComponent";

builder.init(builderConfig.PUBLIC_API_KEY);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
