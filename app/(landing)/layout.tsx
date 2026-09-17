import type { ReactNode } from "react";
import LandingLayout from "@/components/LandingLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
