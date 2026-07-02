export const siteConfig = {
  name: "Roamly",
  description:
    "Discover, create, remix, and share real travel itineraries. Uncover hidden gems, get reality checks, and learn what people regret missing.",
  url: "http://localhost:3000",
  mainNav: [
    {
      title: "Discover",
      href: "/discover",
    },
    {
      title: "Create",
      href: "/create",
    },
    {
      title: "Remix",
      href: "/explore?tab=remix",
    },
    {
      title: "Reviews",
      href: "/explore?tab=reviews",
    },
    {
      title: "Hidden Gems",
      href: "/explore?tab=hidden-gems",
    },
  ],
  footerLinks: [
    { title: "Explore Trips", href: "/discover" },
    { title: "Share Itinerary", href: "/create" },
    { title: "Reality Checks", href: "/explore?tab=reality-checks" },
    { title: "Avoid Regrets", href: "/explore?tab=regrets" },
    { title: "Saved Trips", href: "/saved" },
  ],
};

export type SiteConfig = typeof siteConfig;
