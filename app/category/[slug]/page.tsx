"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Grid, List } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navigation } from "@/components/navigation";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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

  const category =
    categoryData[slug as keyof typeof categoryData] ||
    categoryData["oil-painting"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Use Navigation component like ShowcasePage */}
      <Navigation />

      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bgGrid.jpg')] bg-cover bg-repeat bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl drop-shadow-lg">
            {category.description}
          </p>
          <div className="w-24 h-1 bg-purple-600 mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Controls */}
      <section className="py-8 px-4 bg-gray-900/20">
        <div className="container mx-auto flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
              </Button>
            </Link>
            <p className="text-gray-400">
              Showing {category.paintings.length} artworks
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="hover:scale-110 transition-transform"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="hover:scale-110 transition-transform"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Artworks Grid/List */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.paintings.map((painting) => (
                <Card
                  key={painting.id}
                  className="bg-gray-900 border border-gray-700 overflow-hidden group hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl"
                >
                  <CardContent className="p-0 relative">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={painting.image}
                        alt={painting.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-6px] transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-1 drop-shadow-lg">
                          {painting.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              {category.paintings.map((painting, index) => (
                <Card
                  key={painting.id}
                  className={`
        bg-gray-900 border border-gray-700 overflow-hidden
        hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300
        ${
          index % 2 === 0
            ? "self-start w-full md:w-3/4"
            : "self-end w-full md:w-3/4"
        }
      `}
                >
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <img
                        src={painting.image}
                        alt={painting.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
