"use client";


import { ThemeProvider } from "next-themes";

type TProvidersProps = {
  children: React.ReactNode;
  defaultTheme: string;
  attribute: string;
};

const Providers = ({ children, defaultTheme, attribute }: TProvidersProps) => {
  return (
    <ThemeProvider defaultTheme={defaultTheme} attribute={attribute}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
