import { useMemo } from "react";

const categoryData = {
  "oil-painting": {
    name: "Oil Painting",
    description: "Explore rich textures and colors in oil paintings.",
    paintings: [
      { id: 1, image: "/oil1.jpg" },
      { id: 2, image: "/oil2.jpg" },
      { id: 3, image: "/oil3.jpg" },
      { id: 4, image: "/oil4.jpg" },
      { id: 5, image: "/oil5.jpg" },
      { id: 6, image: "/oil6.jpg" },
      { id: 7, image: "/oil7.jpg" },
      { id: 8, image: "/oil8.jpg" },
      { id: 9, image: "/oil9.jpg" },
      { id: 10, image: "/oil10.jpg" },
      { id: 11, image: "/oil11.jpg" },
      { id: 12, image: "/oil12.jpg" },
      { id: 13, image: "/oil13.jpg" },
      { id: 14, image: "/oil14.jpg" },
      { id: 15, image: "/oil15.jpg" },
      { id: 16, image: "/oil16.jpg" },
    ],
  },
  "digital-art": {
    name: "Digital Art",
    description: "Vibrant and modern digital artworks for every taste.",
    paintings: [
      { id: 1, image: "/digital1.jpg" },
      { id: 2, image: "/digital2.jpg" },
      { id: 3, image: "/digital3.jpg" },
      { id: 4, image: "/digital4.jpg" },
      { id: 5, image: "/digital5.jpg" },
      { id: 6, image: "/digital6.jpg" },
      { id: 7, image: "/digital7.jpg" },
    ],
  },

  "acrylic-painting": {
    name: "Acrylic Painting",
    description: "Vibrant and versatile acrylic artworks for every taste.",
    paintings: [
      { id: 1, image: "/acrylic1.jpg" },
      { id: 2, image: "/acrylic2.jpg" },
      { id: 3, image: "/acrylic3.jpg" },
      { id: 4, image: "/acrylic4.jpg" },
      { id: 5, image: "/acrylic5.jpg" },
      { id: 6, image: "/acrylic6.jpg" },
      { id: 7, image: "/acrylic7.jpg" },
      { id: 8, image: "/acrylic8.jpg" },
    ],
  },
  "mural-art": {
    name: "Mural Art",
    description: "Large scale murals that transform any space.",
    paintings: [
      { id: 1, image: "/mural1.jpg" },
      { id: 2, image: "/mural2.jpg" },
      { id: 3, image: "/mural3.jpg" },
      { id: 4, image: "/mural4.jpg" },
      { id: 5, image: "/mural5.jpg" },
    ],
  },
  "water-color": {
    name: "Water Painting",
    description: "Capturing Life in Gentle Washes.",
    paintings: [
      { id: 1, image: "/water1.jpg" },
      { id: 2, image: "/water2.jpg" },
      { id: 3, image: "/water3.jpg" },
      { id: 4, image: "/water4.jpg" },
      { id: 6, image: "/water6.jpg" },
      { id: 7, image: "/water7.jpg" },
      { id: 8, image: "/water8.jpg" },
      { id: 9, image: "/water9.jpg" },
      { id: 10, image: "/water10.jpg" },
      { id: 11, image: "/water11.jpg" },
      { id: 12, image: "/water12.jpg" },
      { id: 13, image: "/water13.jpg" },
      { id: 14, image: "/water14.jpg" },
      { id: 15, image: "/water15.jpg" },
      { id: 16, image: "/water16.jpg" },
    ],
  },

  "foam-carving": {
    name: "Foam Carving",
    description: "Big Art, Bold Foam, Beautiful Spaces.",
    paintings: [
      { id: 1, image: "/foam1.jpg" },
      { id: 2, image: "/foam2.jpg" },
      { id: 3, image: "/foam3.jpg" },

      { id: 5, image: "/foam5.jpg" },

      { id: 7, image: "/foam7.jpg" },
      { id: 8, image: "/foam8.jpg" },
    ],
  },
  "interior-design": {
    name: "Interior Design",
    description: "Art pieces curated for interior spaces.",
    paintings: [
      { id: 1, image: "/int1.jpg" },
      { id: 2, image: "/int2.jpg" },
      { id: 3, image: "/int3.jpg" },
      { id: 4, image: "/int4.jpg" },
      { id: 5, image: "/int5.jpg" },
      { id: 6, image: "/int6.jpg" },
      { id: 7, image: "/int7.jpg" },
      { id: 8, image: "/int8.jpg" },
      { id: 9, image: "/int9.jpg" },
      { id: 10, image: "/int10.jpg" },
      { id: 11, image: "/int11.jpg" },
      { id: 12, image: "/int12.jpg" },
      { id: 15, image: "/int15.jpg" },
      { id: 16, image: "/int16.jpg" },
      { id: 17, image: "/int17.jpg" },
      { id: 18, image: "/int18.jpg" },
      { id: 19, image: "/int19.jpg" },
      { id: 20, image: "/int20.jpg" },
      { id: 21, image: "/int21.jpg" },
      { id: 22, image: "/int22.jpg" },
      { id: 23, image: "/int23.jpg" },
      { id: 24, image: "/int24.jpg" },
      { id: 25, image: "/int25.jpg" },
      { id: 26, image: "/int26.jpg" },
      { id: 27, image: "/int27.jpg" },
      { id: 28, image: "/int28.jpg" },
      { id: 29, image: "/int29.jpg" },
      { id: 30, image: "/int30.jpg" },
      { id: 31, image: "/int31.jpg" },
    ],
  },
  "sculpture-art": {
    name: "Sculpture",
    description: "Sculpting Imagination Into Reality.",
    paintings: [
      { id: 1, image: "/scul1.jpg" },
      { id: 2, image: "/scul2.jpg" },
      { id: 3, image: "/scul3.jpg" },
      { id: 4, image: "/scul4.jpg" },
      { id: 5, image: "/scul5.jpg" },
      { id: 6, image: "/scul6.jpg" },
      { id: 7, image: "/scul7.jpg" },
      { id: 8, image: "/scul8.jpg" },
      { id: 10, image: "/scul10.jpg" },
      { id: 11, image: "/scul11.jpg" },
      { id: 12, image: "/scul12.jpg" },
      { id: 13, image: "/scul13.jpg" },
      { id: 14, image: "/scul14.jpg" },
      { id: 15, image: "/scul5.jpg" },
      { id: 16, image: "/scul6.jpg" },
      { id: 17, image: "/scul17.jpg" },
      { id: 18, image: "/scul18.jpg" },
      { id: 19, image: "/scul19.jpg" },
      { id: 20, image: "/scul20.jpg" },
      { id: 21, image: "/scul21.jpg" },
      { id: 22, image: "/scul22.jpg" },
    ],
  },
};
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
// Utility to get slug from category name (for routing)
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export default function ShowcasePage() {
  const featuredArtworks = useMemo(() => {
    const allArtworks: {
      id: string;
      image: string;
      category: string;
      slug: string;
    }[] = [];

    for (const [slug, category] of Object.entries(categoryData)) {
      category.paintings.forEach((painting, index) => {
        allArtworks.push({
          id: `${slug}-${painting.id}`,
          image: painting.image,
          category: category.name,
          slug,
        });
      });
    }

    return allArtworks.sort(() => 0.5 - Math.random());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <PageHeader
        title="Featured Showcase"
        subtitle="Discover our most celebrated pieces, carefully selected to represent the finest in contemporary and classical art."
        backgroundImage="/bgGrid.jpg"
      />

      {/* Featured Artworks Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Featured Artworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredArtworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="bg-gray-900 border border-gray-700 overflow-hidden group hover:scale-105 hover:border-purple-500/50 transition-all duration-300 shadow-2xl"
              >
                <CardContent className="p-0">
                  <div className="relative h-80">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 z-10">
                      <Link href={`/category/${artwork.slug}`}>
                        <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-700 transition-colors">
                          {artwork.category}
                        </span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
