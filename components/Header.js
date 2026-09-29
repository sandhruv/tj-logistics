"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import content from "../lib/content";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".mobile-menu");
    const openBtn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".mobile-close-btn");

    const onScroll = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 50);
    };
    onScroll();
    const open = () => menu && menu.classList.add("open");
    const close = () => menu && menu.classList.remove("open");

    window.addEventListener("scroll", onScroll, { passive: true });
    openBtn && openBtn.addEventListener("click", open);
    closeBtn && closeBtn.addEventListener("click", close);
    menu &&
      menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((a) => {
      const href = a.getAttribute("href");
      a.classList.toggle("active", href === pathname);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      openBtn && openBtn.removeEventListener("click", open);
      closeBtn && closeBtn.removeEventListener("click", close);
    };
  }, [pathname]);

  if (pathname === "/login") return null;
  return <div dangerouslySetInnerHTML={{ __html: content.header }} />;
}
