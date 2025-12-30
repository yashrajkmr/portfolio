import { ShoppingCart, Link2, Code2 } from 'lucide-react';

export const projects = [
  {
    title: "ShopHub",
    description: "Responsive E-Commerce Storefront. A production-ready shopping platform with robust filtering and state management.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yashrajkmr/shophub",
    live: "https://shophub-tan.vercel.app",
    status: "Live",
    icon: ShoppingCart,
    highlights: [
      "20+ products, filters, cart, checkout",
      "Mobile-first responsive design", 
      "Global state management (Context API)",
      "Secure checkout flow"
    ]
  },
  {
    title: "LinkLite",
    description: "URL Shortener + Analytics Dashboard. Built for speed and visualization of data.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yashrajkmr/linklite",
    live: "https://linklite-six.vercel.app",
    status: "Live",
    icon: Link2,
    highlights: [
      "100/100 Lighthouse Performance Score",
      "Real-time analytics dashboard",
      "JWT auth, QR codes, analytics",
      "Scalable REST API architecture"
    ]
  },
  {
    title: "Portfolio",
    description: "This Website. A modular, component-based React application designed to showcase my journey.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yashrajkmr",
    live: "#",
    status: "Live",
    icon: Code2,
    highlights: [
      "Production deployment on Vercel",
      "Fully responsive modern UI",
      "Clean component architecture"
    ]
  }
];