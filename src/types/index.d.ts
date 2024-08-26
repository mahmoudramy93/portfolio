// src/types/index.d.ts
declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.webp" {
  const classes: string;
  export default classes;
}
