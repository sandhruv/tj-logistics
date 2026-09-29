"use client";

import { usePathname } from "next/navigation";
import content from "../lib/content";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return <div dangerouslySetInnerHTML={{ __html: content.footer }} />;
}
