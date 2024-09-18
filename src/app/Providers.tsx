"use client";
import { ThemeProvider } from "next-themes";

type TProvidersProps = {
  children: React.ReactNode;
  defaultTheme: string;
  attribute: string;
};
const Providers = ({ children }: TProvidersProps) => {
  return (
    <ThemeProvider>
      <div className="">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
