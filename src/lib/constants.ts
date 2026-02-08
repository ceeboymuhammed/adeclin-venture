export const COMPANY = {
  name: "Adeclin Venture Services",
  tagline: "Empowering Agriculture in West Africa",
  promise: "Clean Food on the Table",
  phoneDisplay: "+234 806 966 6634",
  phoneE164: "+2348069666634",
  email: "hello@adeclinventure.com",
  address: "Plot 10, Area 11, Garki, Abuja, Nigeria",
};

export const WHATSAPP = {
  // WhatsApp click-to-chat (wa.me expects digits only)
  numberDigitsOnly: "2348069666634",
  defaultMessage:
    "Hello Adeclin Venture Services. I’d like to make an inquiry about your services/products.",
  url() {
    const text = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${this.numberDigitsOnly}?text=${text}`;
  },
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Global Trade", href: "/global-trade" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRIORITY_SERVICES = [
  {
    title: "Livestock Import & Export",
    href: "/services/livestock-import-export",
    summary:
      "Trade coordination built on reliable sourcing, professional handling, and clear communication from request to delivery.",
    outcomes: [
      "Clear requirements and timelines",
      "Coordinated sourcing and movement",
      "Quality-minded handling approach",
      "Buyer-ready communication and follow-through",
    ],
  },
  {
    title: "Farming & Farm Management",
    href: "/services/farm-management",
    summary:
      "Hands-on farm operations support to improve yield, reduce waste, and strengthen consistency across the production cycle.",
    outcomes: [
      "Season planning and execution support",
      "Operational oversight and reporting",
      "Input and schedule coordination",
      "Productivity and quality improvements",
    ],
  },
  {
    title: "Agricultural Consulting & Training",
    href: "/services/consulting-training",
    summary:
      "Practical training and advisory for farmers, teams, and institutions—focused on results, discipline, and market readiness.",
    outcomes: [
      "Training workshops and sessions",
      "Operational best practices",
      "Quality and handling mindset",
      "Commercial and market guidance",
    ],
  },
];

export const PRODUCT_PURE_IRON_BEANS = {
  name: "PURE IRON BEANS",
  href: "/products/pure-iron-beans",
  short:
    "Clean, natural, ready-to-cook beans for wholesale buyers—carefully selected and prepared for convenience and consistent results.",
  bullets: [
    "Carefully selected iron beans",
    "Washed thoroughly",
    "Skin gently peeled off for you",
    "No stones, no dirt, no stress",
    "Cooks faster and tastes richer",
    "Perfect for porridge, moi moi, rice & beans, beans & yam",
  ],
  wholesaleNote:
    "Available for wholesale supply. Share your quantity, destination, and timeline for a quote.",
};

export const SEO = {
  siteName: "Adeclin Venture Services",
  siteDescription:
    "Adeclin Venture Services is a leading agricultural company in Nigeria supporting livestock import/export, farm management, and agricultural consulting & training—guided by clean-food standards and professional execution across West Africa.",
};
