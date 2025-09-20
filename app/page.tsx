"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Play, Info, Eye, Instagram, Facebook } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["700"],
});

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const paintings = [
    {
      id: 1,
      image: "/acrylic2.jpg",
    },
    {
      id: 2,
      image: "/acrylic7.jpg",
    },
    {
      id: 3,
      image: "water13.jpg",
    },
    {
      id: 4,
      image: "/oil10.jpg",
    },
    {
      id: 5,
      image: "/scul5.jpg",
    },
    {
      id: 6,
      image: "/scul13.jpg",
    },
    {
      id: 7,
      image: "/oil7.jpg",
    },
    {
      id: 8,
      image: "/acrylic8.jpg",
    },
    {
      id: 9,
      image: "/oil1.jpg",
    },
    {
      id: 10,
      image: "/digital4.jpg",
    },
  ];

  const categories = [
    {
      name: "Oil Painting",
      slug: "oil-painting",
      image: "/oil1.jpg",
      count: 16,
    },
    {
      name: "Acrylic Painting",
      slug: "acrylic-painting",
      image: "/acrylic6.jpg",
      count: 8,
    },
    {
      name: "Digital Art",
      slug: "digital-art",
      image: "/digital4.jpg",
      count: 7,
    },
    {
      name: "Mural Art",
      slug: "mural-art",
      image: "/mural2.jpg",
      count: 5,
    },
    {
      name: "Foam Carving",
      slug: "foam-carving",
      image: "/foam3.jpg",
      count: 6,
    },
    {
      name: "Interior Design",
      slug: "interior-design",
      image: "/int1.jpg",
      count: 29,
    },
    {
      name: "Sculpture",
      slug: "sculpture-art",
      image: "/scul3.jpg",
      count: 22,
    },
    {
      name: "Water Painting",
      slug: "water-color",
      image: "/water1.jpg",
      count: 22,
    },
  ];

  const trendingArtworks = [
    {
      id: 1,
      title: "Chromatic Solitude",
      image: "/acrylic2.jpg",
    },
    {
      id: 2,
      title: "Garden of Echoes",
      image: "/mural2.jpg",
    },
    {
      id: 3,
      title: "Urban Eden",
      image: "/acrylic8.jpg",
    },
    {
      id: 4,
      title: "Wisdom in Oil",
      image: "/oil10.jpg",
    },
    {
      id: 5,
      title: "March of Ideals",
      image: "/acrylic7.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % paintings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paintings.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % paintings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + paintings.length) % paintings.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header className="relative z-50">
        <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/masters-logo.png"
                    alt="Masters Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h1
                    className={`text-3xl md:text-4xl  ml-3 tracking-wider bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent ${baloo.className}`}
                  >
                    Master Arts
                  </h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className={`transition-colors font-medium ${
                    isActive("/")
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/showcase"
                  className={`transition-colors font-medium ${
                    isActive("/showcase")
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Showcase
                </Link>
                <Link
                  href="/contact"
                  className={`transition-colors font-medium ${
                    isActive("/contact")
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-40">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/showcase"
                className="block text-white hover:text-purple-400 transition-colors"
              >
                Showcase
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-purple-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="relative h-screen overflow-hidden">
        {/* Background artwork grid */}
        <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-20">
          {paintings
            .concat(paintings)
            .slice(0, 24)
            .map((painting, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden">
                <img
                  src={painting.image || "/placeholder.svg"}
                  alt={painting.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl px-4">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
                Experience Art,
                <br />
                beyond
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  the Canvas.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Experience premium art from renowned artist. Begin your artistic
                journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/showcase" className="inline-block">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Explore Gallery
                  </Button>
                </Link>
                <Link href="/contact" className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
                  >
                    <Info className="w-5 h-5 mr-2" />
                    Discover
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Spotlight</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trendingArtworks.map((artwork, index) => (
              <div key={artwork.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Large number overlay */}
                  <div className="absolute -bottom-4 -left-4 text-8xl font-black text-white/20 group-hover:text-purple-400/30 transition-colors duration-300">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1 truncate">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="glass-card max-w-4xl mx-auto overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src="/suresh 3.jpg"
                    alt="Gallery Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  {/* Heading with theme colors */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Meet the <span className="text-purple-400">Curator</span>
                  </h2>
                  <h3 className="text-2xl text-purple-400 mb-4">Suresh</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Highly talented and versatile fine artist/illustrator with
                    experience in storyboarding, set and costume design, pattern
                    creation, album covers, banners, and sculpture. Skilled in
                    pencil, ink, watercolor, oil, acrylic, and digital tools,
                    blending traditional and digital techniques for playful,
                    quirky illustrations. Proven ability to take projects from
                    concept to completion, delivering creative and effective
                    work on time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="my-16 px-4">
        <video
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-balance text-white">
              Explore Our Collections
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover our carefully curated categories, each telling a unique
              story through the language of art.
            </p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <Card
                  className={`bg-gray-900 border-gray-700 overflow-hidden group hover:scale-105 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-2xl ${
                    index === 1 || index === 4 ? "md:mt-12" : "" // Middle column offset
                  }`}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                          {category.name}
                        </h3>
                        <p className="text-sm opacity-90 drop-shadow-md">
                          {category.count} masterpieces
                        </p>
                        <div className="w-12 h-0.5 bg-purple-600 mt-3 rounded-full group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Netflix-style hover overlay */}
                    <div className="absolute inset-0 border-2 border-purple-600/0 group-hover:border-purple-600/50 transition-colors duration-300 rounded-lg"></div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/masters-logo.png"
                    alt="Masters Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3
                    className={`text-3xl md:text-4xl  ml-3 tracking-wider bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent ${baloo.className}`}
                  >
                    Master Arts
                  </h3>
                  <p className="text-gray-400">Premium Art Collections</p>
                </div>
              </div>
              <p className="text-gray-400 text-pretty max-w-xs md:max-w-full">
                Experience artistry that speaks beyond the canvas.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/showcase"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Showcase
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/cmdmastersuresh?igsh=YzRuNjliYzM0aXhx"
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/14JZQ6F8yeo/"
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Masters. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
