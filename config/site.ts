export const siteConfig = {
  name: "Roamly",
  description: "Discover, create, and share real travel itineraries. Uncover hidden gems, get reality checks, and learn what people regret missing.",
  url: "http://localhost:3000",
  mainNav: [
    {
      title: "Explore",
      href: "/explore",
    },
    {
      title: "Create",
      href: "/create",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Collections",
      href: "/collections",
    },
  ],
  footerLinks: [
    { title: "Explore Trips", href: "/explore" },
    { title: "Share Itinerary", href: "/create" },
    { title: "Reality Checks", href: "/explore?tab=reality-checks" },
    { title: "Avoid Regrets", href: "/explore?tab=regrets" },
  ],
};

export type SiteConfig = typeof siteConfig;
