"use client";

import { useEffect } from "react";

const SERVICES = [
  {
    id: "freight",
    name: "Freight Forwarding",
    icon: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
    description:
      "International freight forwarding services with seamless coordination across air, sea, and road transport for global shipping needs.",
    services: ["Air Freight", "Sea Freight (FCL & LCL)", "Road Transportation", "Multimodal Transport"],
    images: [
      "https://images.unsplash.com/photo-1767868278896-2ec1025d7424?w=400&h=240&fit=crop",
      "/images/sea-freight.jpg",
      "https://images.unsplash.com/photo-1745956983820-6e960f7e8472?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=240&fit=crop",
    ],
  },
  {
    id: "customs",
    name: "Customs Clearance",
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    description:
      "Smooth customs clearance services ensuring compliance with Indian import/export regulations and minimizing delays.",
    services: ["Import Clearance", "Export Clearance", "Documentation Handling", "Regulatory Compliance"],
    images: ["/images/customs.jpg", "/images/customs.jpg", "/images/customs.jpg", "/images/customs.jpg"],
  },
  {
    id: "warehouse",
    name: "Warehousing & Distribution",
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    description:
      "Strategically located warehouses offering flexible storage, detailed inventory management, and streamlined distribution.",
    services: ["Storage Solutions", "Inventory Management", "Order Fulfillment", "Last-Mile Delivery"],
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1565891741441-64926e441838?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1745956983820-6e960f7e8472?w=400&h=240&fit=crop",
    ],
  },
  {
    id: "specialized",
    name: "Specialized Logistics",
    icon: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
    description:
      "Expert handling of hazardous materials, oversized cargo, and specialized logistics solutions with strict compliance to safety regulations.",
    services: ["DG Shipment Handling", "Project Cargo", "E-commerce Logistics", "Supply Chain Management"],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=240&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=240&fit=crop",
    ],
  },
];

const ARROW_SVG =
  '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="card-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';
const CTA_SVG =
  '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

function panelHTML(s) {
  return `<div class="content-grid"><div class="content-info"><h3>${s.name}</h3><p>${s.description}</p><div class="product-list">${s.services
    .map(
      (x) =>
        `<div class="product-item"><span class="product-bullet"></span>${x}</div>`
    )
    .join("")}</div><a class="btn-primary-custom" href="/contact-us">Request Quote ${CTA_SVG}</a></div><div class="content-visual"><div class="visual-grid">${s.services
    .map(
      (name, i) =>
        `<div class="visual-card" style="animation-delay:${(i * 0.1).toFixed(1)}s"><img src="${s.images[i]}" alt="${name}" class="card-image" loading="lazy"/><div class="card-info"><span class="card-name">${name}</span>${ARROW_SVG}</div></div>`
    )
    .join("")}</div></div></div>`;
}

export default function Behaviors() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const ANIM = ".fade-in:not(.visible), .slide-in-left:not(.visible), .slide-in-right:not(.visible)";
    const observe = () =>
      document.querySelectorAll(ANIM).forEach((el) => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    const onClick = (e) => {
      const btn = e.target.closest(".tab-btn");
      if (btn) {
        const wrap = btn.closest(".services-tabs");
        const tabs = [...wrap.querySelectorAll(".tab-btn")];
        const idx = tabs.indexOf(btn);
        tabs.forEach((t, i) => t.classList.toggle("active", i === idx));
        const content = document.querySelector(".services-content");
        if (content && SERVICES[idx]) content.innerHTML = panelHTML(SERVICES[idx]);
      }
    };

    const onSubmit = async (e) => {
      const form = e.target;
      if (form.classList.contains("contact-form")) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const btn = form.querySelector('button[type="submit"]');
        try {
          if (btn) btn.disabled = true;
          const res = await fetch("/api/inquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!res.ok) throw new Error("failed");
          alert("Thank you for your inquiry! We will contact you soon.");
          form.reset();
        } catch {
          alert("Failed to send inquiry. Please try again.");
        } finally {
          if (btn) btn.disabled = false;
        }
      } else if (form.classList.contains("login-form")) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        try {
          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const json = await res.json();
          if (json.success) {
            localStorage.setItem("tj_token", json.token);
            alert("Login successful!");
            window.location.href = "/";
          } else {
            alert(json.message || "Invalid credentials.");
          }
        } catch {
          alert("Login failed. Please try again.");
        }
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
