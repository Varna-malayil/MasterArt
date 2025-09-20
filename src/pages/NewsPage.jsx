import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Navigation from "../components/Navigation"
import PageHeader from "../components/PageHeader"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "New Contemporary Art Exhibition Opens This Month",
      excerpt:
        "Discover the latest works from emerging artists in our newest exhibition featuring contemporary pieces that challenge traditional boundaries.",
      author: "Isabella Artisan",
      date: "2024-01-15",
      image: "/placeholder.svg?height=300&width=400",
      category: "Exhibitions",
    },
    {
      id: 2,
      title: "Artist Spotlight: Elena Rodriguez's Abstract Journey",
      excerpt:
        "Meet Elena Rodriguez, whose abstract paintings have captivated audiences worldwide with their vibrant colors and emotional depth.",
      author: "Gallery Team",
      date: "2024-01-10",
      image: "/placeholder.svg?height=300&width=400",
      category: "Artist Spotlight",
    },
    {
      id: 3,
      title: "Gallery Expansion: New Wing Opening Soon",
      excerpt:
        "We're excited to announce the upcoming opening of our new contemporary wing, featuring state-of-the-art lighting and climate control.",
      author: "Isabella Artisan",
      date: "2024-01-05",
      image: "/placeholder.svg?height=300&width=400",
      category: "Gallery News",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <PageHeader
        title="Gallery News"
        subtitle="Stay updated with the latest exhibitions, artist features, and gallery announcements."
      />

      {/* News Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-balance group-hover:text-purple-400 transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6 text-pretty leading-relaxed">{article.excerpt}</p>
                      <Button variant="outline" className="group/btn bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
