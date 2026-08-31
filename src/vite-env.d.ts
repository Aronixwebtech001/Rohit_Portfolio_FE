/// <reference types="vite/client" />

declare module "*.png" {
  const src: string;
  return src;
}

declare module "*.jpg" {
  const src: string;
  return src;
}

declare module "*.jpeg" {
  const src: string;
  return src;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  return src;
}

declare module "*.webp" {
  const src: string;
  return src;
}
