// import { Button } from "../components/ui/button"
// import { Card, CardContent } from "../components/ui/card"
// import Navigation from "../components/Navigation"
// import PageHeader from "../components/PageHeader"

// export default function ShowcasePage() {
//   const featuredArtworks = [
//     {
//       id: 1,
//       title: "Ethereal Symphony",
//       artist: "Isabella Martinez",
//       category: "Abstract",
//       image: "/placeholder.svg?height=500&width=400",
//     },
//     {
//       id: 2,
//       title: "Mountain Solitude",
//       artist: "James Chen",
//       category: "Landscapes",
//       image: "/placeholder.svg?height=500&width=400",
//     },
//     {
//       id: 3,
//       title: "Portrait of Time",
//       artist: "Elena Rodriguez",
//       category: "Portraits",
//       image: "/placeholder.svg?height=500&width=400",
//     },
//     {
//       id: 4,
//       title: "Digital Renaissance",
//       artist: "Alex Turner",
//       category: "Modern",
//       image: "/placeholder.svg?height=500&width=400",
//     },
//     {
//       id: 5,
//       title: "Classical Harmony",
//       artist: "Lorenzo Medici",
//       category: "Classical",
//       image: "/placeholder.svg?height=500&width=400",
//     },
//     {
//       id: 6,
//       title: "Urban Dreams",
//       artist: "Maya Patel",
//       category: "Modern",
//       image: "/placeholder.svg?height=500&width=400",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />

//       <PageHeader
//         title="Featured Showcase"
//         subtitle="Discover our most celebrated pieces, carefully selected to represent the finest in contemporary and classical art."
//         backgroundImage="/abstract-colorful-painting-with-flowing-shapes.jpg"
//       />

//       {/* Featured Artworks */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredArtworks.map((artwork) => (
//               <Card
//                 key={artwork.id}
//                 className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300"
//               >
//                 <CardContent className="p-0">
//                   <div className="relative h-80">
//                     <img
//                       src={artwork.image || "/placeholder.svg"}
//                       alt={artwork.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute top-4 right-4">
//                       <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm">
//                         {artwork.category}
//                       </span>
//                     </div>
//                     <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <h3 className="text-xl font-bold mb-1">{artwork.title}</h3>
//                       <p className="text-sm opacity-90">by {artwork.artist}</p>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2 text-balance">{artwork.title}</h3>
//                     <p className="text-gray-300 mb-4">by {artwork.artist}</p>
//                     <Button className="w-full">View Details</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
