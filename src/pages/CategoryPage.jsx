"use client"

import { useParams } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Eye, Heart, Share2 } from "lucide-react"
import Navigation from "../components/Navigation"
import PageHeader from "../components/PageHeader"

export default function CategoryPage() {
  const { slug } = useParams()

  const categoryData = {
    abstract: {
      name: "Abstract",
      description:
        "Explore the world of abstract art where colors, forms, and lines create emotional experiences beyond representation.",
      artworks: [
        {
          id: 1,
          title: "Cosmic Dance",
          artist: "Elena Rodriguez",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.2K",
          likes: 89,
        },
        {
          id: 2,
          title: "Fluid Dreams",
          artist: "Marcus Chen",
          image: "/placeholder.svg?height=400&width=300",
          views: "980",
          likes: 67,
        },
        {
          id: 3,
          title: "Color Symphony",
          artist: "Sofia Martinez",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.5K",
          likes: 112,
        },
        {
          id: 4,
          title: "Abstract Emotions",
          artist: "David Kim",
          image: "/placeholder.svg?height=400&width=300",
          views: "890",
          likes: 54,
        },
        {
          id: 5,
          title: "Geometric Harmony",
          artist: "Lisa Wang",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.1K",
          likes: 78,
        },
        {
          id: 6,
          title: "Vibrant Chaos",
          artist: "Alex Turner",
          image: "/placeholder.svg?height=400&width=300",
          views: "750",
          likes: 43,
        },
      ],
    },
    landscapes: {
      name: "Landscapes",
      description: "Immerse yourself in breathtaking natural scenes captured through the artist's unique perspective.",
      artworks: [
        {
          id: 1,
          title: "Mountain Majesty",
          artist: "James Wilson",
          image: "/placeholder.svg?height=400&width=300",
          views: "2.1K",
          likes: 156,
        },
        {
          id: 2,
          title: "Ocean Serenity",
          artist: "Maria Santos",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.8K",
          likes: 134,
        },
        {
          id: 3,
          title: "Forest Whispers",
          artist: "Robert Davis",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.4K",
          likes: 98,
        },
        {
          id: 4,
          title: "Desert Sunset",
          artist: "Anna Martinez",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.6K",
          likes: 121,
        },
        {
          id: 5,
          title: "Valley Dreams",
          artist: "Thomas Brown",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.2K",
          likes: 87,
        },
        {
          id: 6,
          title: "Coastal Beauty",
          artist: "Sarah Johnson",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.9K",
          likes: 143,
        },
      ],
    },
    portraits: {
      name: "Portraits",
      description: "Discover the human spirit captured in stunning portraits that reveal character and emotion.",
      artworks: [
        {
          id: 1,
          title: "Soul Reflection",
          artist: "Isabella Chen",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.7K",
          likes: 128,
        },
        {
          id: 2,
          title: "Timeless Grace",
          artist: "Michael Rodriguez",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.3K",
          likes: 95,
        },
        {
          id: 3,
          title: "Inner Light",
          artist: "Emma Wilson",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.5K",
          likes: 110,
        },
        {
          id: 4,
          title: "Character Study",
          artist: "Daniel Kim",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.1K",
          likes: 82,
        },
        {
          id: 5,
          title: "Emotional Depth",
          artist: "Olivia Martinez",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.4K",
          likes: 103,
        },
        {
          id: 6,
          title: "Human Connection",
          artist: "Lucas Davis",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.2K",
          likes: 89,
        },
      ],
    },
    modern: {
      name: "Modern",
      description:
        "Experience contemporary art that pushes boundaries and challenges conventional artistic expression.",
      artworks: [
        {
          id: 1,
          title: "Digital Renaissance",
          artist: "Alex Turner",
          image: "/placeholder.svg?height=400&width=300",
          views: "2.3K",
          likes: 178,
        },
        {
          id: 2,
          title: "Urban Poetry",
          artist: "Maya Patel",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.9K",
          likes: 145,
        },
        {
          id: 3,
          title: "Tech Fusion",
          artist: "Jordan Lee",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.6K",
          likes: 118,
        },
        {
          id: 4,
          title: "Contemporary Vision",
          artist: "Riley Chen",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.8K",
          likes: 132,
        },
        {
          id: 5,
          title: "Modern Expressions",
          artist: "Casey Martinez",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.4K",
          likes: 97,
        },
        {
          id: 6,
          title: "Future Forms",
          artist: "Taylor Kim",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.7K",
          likes: 125,
        },
      ],
    },
    classical: {
      name: "Classical",
      description: "Appreciate timeless masterpieces that have defined artistic excellence through the ages.",
      artworks: [
        {
          id: 1,
          title: "Renaissance Revival",
          artist: "Lorenzo Medici",
          image: "/placeholder.svg?height=400&width=300",
          views: "2.5K",
          likes: 198,
        },
        {
          id: 2,
          title: "Baroque Beauty",
          artist: "Antonio Vivaldi",
          image: "/placeholder.svg?height=400&width=300",
          views: "2.1K",
          likes: 167,
        },
        {
          id: 3,
          title: "Classical Harmony",
          artist: "Maria Rossi",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.8K",
          likes: 142,
        },
        {
          id: 4,
          title: "Timeless Elegance",
          artist: "Giovanni Belli",
          image: "/placeholder.svg?height=400&width=300",
          views: "2.0K",
          likes: 156,
        },
        {
          id: 5,
          title: "Historic Grandeur",
          artist: "Francesca Conti",
          image: "/placeholder.svg?height=400&width=300",
          views: "1.9K",
          likes: 148,
        },
        {
          id: 6,
          title: "Masterpiece Study",
          artist: "Alessandro Nero",
          image: "/placeholder.svg?height=400&width=300",
          views: "2.2K",
          likes: 174,
        },
      ],
    },
  }

  const category = categoryData[slug] || categoryData.abstract

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <PageHeader
        title={category.name}
        subtitle={category.description}
        backgroundImage="/abstract-colorful-painting-with-flowing-shapes.jpg"
      />

      {/* Artworks Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {category.artworks.map((artwork, index) => (
              <Card
                key={artwork.id}
                className={`bg-gray-900 border-gray-700 overflow-hidden group hover:scale-105 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-2xl ${
                  index === 1 || index === 4 ? "md:mt-12" : "" // Middle column offset for staggered effect
                }`}
              >
                <CardContent className="p-0 relative">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="ghost" className="bg-black/50 text-white hover:bg-black/70">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="bg-black/50 text-white hover:bg-black/70">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{artwork.title}</h3>
                      <p className="text-sm opacity-90 drop-shadow-md mb-3">by {artwork.artist}</p>

                      <div className="flex items-center space-x-4 text-xs opacity-80">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{artwork.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{artwork.likes}</span>
                        </div>
                      </div>

                      <div className="w-12 h-0.5 bg-purple-600 mt-3 rounded-full group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Netflix-style hover overlay */}
                  <div className="absolute inset-0 border-2 border-purple-600/0 group-hover:border-purple-600/50 transition-colors duration-300 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
