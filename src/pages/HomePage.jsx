// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { Menu, X, Play, Info, Eye } from "lucide-react";

// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const paintings = [
//     {
//       id: 1,
//       title: "Abstract Dreams",
//       artist: "Elena Rodriguez",
//       image: "/abstract-colorful-painting-with-flowing-shapes.jpg",
//     },
//     {
//       id: 2,
//       title: "Mountain Serenity",
//       artist: "James Chen",
//       image: "/placeholder-lok48.png",
//     },
//     {
//       id: 3,
//       title: "Urban Reflections",
//       artist: "Maria Santos",
//       image: "/placeholder-dxt7p.png",
//     },
//     {
//       id: 4,
//       title: "Ocean Whispers",
//       artist: "David Kim",
//       image: "/placeholder-5go6p.png",
//     },
//     {
//       id: 5,
//       title: "Forest Mystique",
//       artist: "Sarah Johnson",
//       image: "/placeholder-1akp4.png",
//     },
//     {
//       id: 6,
//       title: "Portrait of Grace",
//       artist: "Michael Brown",
//       image: "/placeholder-4tqtk.png",
//     },
//     {
//       id: 7,
//       title: "Geometric Harmony",
//       artist: "Lisa Wang",
//       image: "/placeholder-mxs3s.png",
//     },
//     {
//       id: 8,
//       title: "Sunset Boulevard",
//       artist: "Robert Davis",
//       image: "/placeholder-us97x.png",
//     },
//     {
//       id: 9,
//       title: "Floral Symphony",
//       artist: "Anna Martinez",
//       image: "/placeholder-wtk2m.png",
//     },
//     {
//       id: 10,
//       title: "Cosmic Journey",
//       artist: "Thomas Wilson",
//       image: "/placeholder-hmuxq.png",
//     },
//   ];

//   const categories = [
//     {
//       name: "Abstract",
//       image: "/placeholder-ems3s.png",
//       count: 25,
//     },
//     {
//       name: "Landscapes",
//       image: "/placeholder-20ems.png",
//       count: 18,
//     },
//     {
//       name: "Portraits",
//       image: "/placeholder-liu6h.png",
//       count: 12,
//     },
//     {
//       name: "Modern",
//       image: "/placeholder-slmrj.png",
//       count: 20,
//     },
//     {
//       name: "Classical",
//       image: "/placeholder-gxktr.png",
//       count: 15,
//     },
//   ];

//   const trendingArtworks = [
//     {
//       id: 1,
//       title: "Midnight Reverie",
//       artist: "Sofia Chen",
//       image: "/abstract-colorful-painting-with-flowing-shapes.jpg",
//       views: "2.1K",
//     },
//     {
//       id: 2,
//       title: "Golden Hour",
//       artist: "Marcus Rivera",
//       image: "/placeholder-lok48.png",
//       views: "1.8K",
//     },
//     {
//       id: 3,
//       title: "Ocean Dreams",
//       artist: "Luna Park",
//       image: "/placeholder-dxt7p.png",
//       views: "1.5K",
//     },
//     {
//       id: 4,
//       title: "Urban Poetry",
//       artist: "Alex Thompson",
//       image: "/placeholder-5go6p.png",
//       views: "1.2K",
//     },
//     {
//       id: 5,
//       title: "Forest Whispers",
//       artist: "Maya Singh",
//       image: "/placeholder-1akp4.png",
//       views: "980",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % paintings.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [paintings.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % paintings.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + paintings.length) % paintings.length);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <header className="relative z-50">
//         <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
//           <div className="container mx-auto px-4 py-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-xl">A</span>
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold text-balance bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
//                     ARTISAN
//                   </h1>
//                   <p className="text-sm text-gray-400">GALLERY</p>
//                 </div>
//               </div>

//               {/* Desktop Navigation */}
//               <nav className="hidden md:flex items-center space-x-8">
//                 <Link
//                   href="/"
//                   className="text-white hover:text-purple-400 transition-colors font-medium"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/showcase"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Showcase
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Contact
//                 </Link>
//               </nav>

//               {/* Mobile Menu Button */}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="md:hidden text-white"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <X /> : <Menu />}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-40">
//             <nav className="container mx-auto px-4 py-4 space-y-4">
//               <Link
//                 href="/"
//                 className="block text-white hover:text-purple-400 transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/showcase"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 Showcase
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         )}
//       </header>

//       <section className="relative h-screen overflow-hidden">
//         {/* Background artwork grid */}
//         <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-20">
//           {paintings
//             .concat(paintings)
//             .slice(0, 24)
//             .map((painting, index) => (
//               <div key={index} className="aspect-[3/4] overflow-hidden">
//                 <img
//                   src={painting.image || "/placeholder.svg"}
//                   alt={painting.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//         </div>

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

//         {/* Hero content */}
//         <div className="relative z-10 flex items-center h-full">
//           <div className="container mx-auto px-4">
//             <div className="max-w-2xl">
//               <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
//                 Unlimited artworks,
//                 <br />
//                 masterpieces, and
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   more
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-300 mb-8 text-pretty">
//                 Discover thousands of premium artworks from world-renowned
//                 artists. Start your artistic journey today.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   size="lg"
//                   className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
//                 >
//                   <Play className="w-5 h-5 mr-2" />
//                   Explore Gallery
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
//                 >
//                   <Info className="w-5 h-5 mr-2" />
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-white">Trending Now</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {trendingArtworks.map((artwork, index) => (
//               <div key={artwork.id} className="group cursor-pointer">
//                 <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//                   <img
//                     src={artwork.image || "/placeholder.svg"}
//                     alt={artwork.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//                   {/* Large number overlay */}
//                   <div className="absolute -bottom-4 -left-4 text-8xl font-black text-white/20 group-hover:text-purple-400/30 transition-colors duration-300">
//                     {index + 1}
//                   </div>

//                   {/* Content */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white font-bold text-lg mb-1 truncate">
//                       {artwork.title}
//                     </h3>
//                     <p className="text-gray-300 text-sm mb-2">
//                       by {artwork.artist}
//                     </p>
//                     <div className="flex items-center text-xs text-gray-400">
//                       <Eye className="w-3 h-3 mr-1" />
//                       {artwork.views} views
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Owner Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <Card className="glass-card max-w-4xl mx-auto overflow-hidden hover:scale-[1.02] transition-transform duration-300">
//             <CardContent className="p-0">
//               <div className="grid md:grid-cols-2 gap-0">
//                 <div className="relative h-64 md:h-full">
//                   <img
//                     src="/placeholder-o8lo0.png"
//                     alt="Gallery Owner"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-8 flex flex-col justify-center">
//                   <h2 className="text-3xl font-bold mb-4 text-balance">
//                     Meet the Curator
//                   </h2>
//                   <h3 className="text-xl text-purple-400 mb-4">
//                     Isabella Artisan
//                   </h3>
//                   <p className="text-gray-300 leading-relaxed mb-6 text-pretty">
//                     With over 20 years of experience in the art world, Isabella
//                     has curated some of the most prestigious collections
//                     globally. Her passion for discovering emerging artists and
//                     preserving classical masterpieces has made Artisan Gallery a
//                     beacon for art enthusiasts and collectors alike.
//                   </p>
//                   <Button className="self-start">
//                     Learn More About Our Story
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-6 text-balance text-white">
//               Explore Our Collections
//             </h2>
//             <p className="text-gray-400 text-xl max-w-3xl mx-auto text-pretty leading-relaxed">
//               Discover our carefully curated categories, each telling a unique
//               story through the language of art.
//             </p>
//             <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {categories.map((category, index) => (
//               <Link
//                 key={category.name}
//                 to={`/category/${category.name.toLowerCase()}`}
//               >
//                 <Card
//                   className={`bg-gray-900 border-gray-700 overflow-hidden group hover:scale-105 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-2xl ${
//                     index === 1 || index === 4 ? "md:mt-12" : "" // Middle column offset
//                   }`}
//                 >
//                   <CardContent className="p-0 relative">
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={category.image || "/placeholder.svg"}
//                         alt={category.name}
//                         className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
//                       <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                       <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
//                         <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
//                           {category.name}
//                         </h3>
//                         <p className="text-sm opacity-90 drop-shadow-md">
//                           {category.count} masterpieces
//                         </p>
//                         <div className="w-12 h-0.5 bg-purple-600 mt-3 rounded-full group-hover:w-20 transition-all duration-300"></div>
//                       </div>
//                     </div>

//                     {/* Netflix-style hover overlay */}
//                     <div className="absolute inset-0 border-2 border-purple-600/0 group-hover:border-purple-600/50 transition-colors duration-300 rounded-lg"></div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black border-t border-gray-800 py-12 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-xl">A</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white">
//                     Artisan Gallery
//                   </h3>
//                   <p className="text-gray-400">Premium Art Collection</p>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-pretty">
//                 Discover the world's finest artworks and connect with the
//                 stories behind each masterpiece.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
//               <div className="space-y-2">
//                 <Link
//                   to="/"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/showcase"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   Showcase
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   Contact
//                 </Link>
//                 <Link
//                   to="/news"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   News
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4 text-white">Connect</h4>
//               <div className="space-y-2">
//                 <a
//                   href="#"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   Instagram
//                 </a>
//                 <a
//                   href="#"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   Facebook
//                 </a>
//                 <a
//                   href="#"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   Twitter
//                 </a>
//                 <a
//                   href="#"
//                   className="block text-gray-400 hover:text-purple-400 transition-colors"
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//             <p className="text-gray-400">
//               © 2024 Artisan Gallery. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
