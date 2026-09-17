import type { ReactNode } from "react";
import PaperLayout from "@/components/PaperLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <PaperLayout>{children}</PaperLayout>;
}
