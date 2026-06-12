export interface Brand {
  chip: string;
  index: string;
  visCornerTl: string;
  visCornerBr: string;
  name: string;
  tagline: string;
  desc: string;
  tags: string[];
  domain: string;
  href: string;
  internalHref: string;
  variant: "sea" | "earth";
  image?: string;
}

export const zanetuno: Brand = {
  chip: "House Nº 02 · Seafood",
  index: "/ZNT",
  visCornerTl: "FROM THE INDONESIAN SEAS",
  visCornerBr: "— ZNT —",
  name: "Zanetuno",
  tagline: "Of the Indonesian seas.",
  desc: "Premium frozen seafood sourced from trusted fisheries across the archipelago, with cold-chain integrity, export documentation, and consistent grade all tailored for distributors, processors, and restaurant groups abroad.",
  tags: ["Yellowfin Tuna", "Vannamei Shrimp", "Squid", "Octopus", "Snapper"],
  domain: "zanetuno.com",
  href: "https://www.zanetuno.com",
  internalHref: "/zanetuno",
  variant: "sea",
  image: "/images/herozanetuno.jpg",
};

export const nusateraso: Brand = {
  chip: "House Nº 01 · Agriculture",
  index: "/NTR",
  visCornerTl: "FROM THE INDONESIAN SOIL",
  visCornerBr: "— NTR —",
  name: "Nusateraso",
  tagline: "The island essence.",
  desc: "Vanilla beans, single-origin coffee, and essential spices, which are curated from selected farming regions, processed with traditional methods, and graded against the standards of the world's finest buyers.",
  tags: [
    "Vanilla Planifolia",
    "Arabica Coffee",
    "Robusta Coffee",
    "Cloves",
    "Nutmeg",
    "Coconut Sugar",
  ],
  domain: "nusateraso.com",
  href: "https://www.nusateraso.com",
  internalHref: "/nusateraso",
  variant: "earth",
  image: "/images/heronusateraso.png",
};
