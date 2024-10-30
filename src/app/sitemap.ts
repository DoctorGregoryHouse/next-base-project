import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/impressum`,
      priority: 0.1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/datenschutz`,
      priority: 0.1,
    },
  ];
}

// Recommended Priorities:
// Homepage: 1,
// Produkte, Übersichten, etc: 0.7,
// Detailseiten: 0.5,
// Impressum, AGB, ... : 0.1
// Markenwelten und Magazinbereiche(Marketing): 0.9
