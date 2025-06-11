
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Max Finds His Forever Home",
    city: "Austin, TX",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    story: "After 8 months in the shelter, Max finally found his perfect match with the Johnson family. Thanks to our community volunteers who never gave up on him!",
    impact: "1 life changed",
    category: "Adoption Success"
  },
  {
    id: 2,
    title: "Community Dog Park Opens",
    city: "Denver, CO",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    story: "Our advocacy efforts led to the opening of Denver's largest dog park, complete with separate areas for small and large dogs, agility equipment, and waste stations.",
    impact: "500+ pets benefit daily",
    category: "Infrastructure"
  },
  {
    id: 3,
    title: "Emergency Pet Relief Fund",
    city: "Seattle, WA",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    story: "When the winter storms hit, our emergency fund helped 200+ families keep their pets fed and warm. Community support made this possible.",
    impact: "200+ families helped",
    category: "Emergency Relief"
  },
  {
    id: 4,
    title: "Mobile Vet Clinic Launch",
    city: "Phoenix, AZ",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    story: "Our mobile veterinary clinic now serves underserved neighborhoods, providing affordable healthcare to pets whose families couldn't otherwise access it.",
    impact: "1,000+ pets treated",
    category: "Healthcare"
  }
];

const ImpactStories = () => {
  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Impact Stories <Heart className="inline w-8 h-8 text-red-500" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real communities showing the incredible impact we're making together. 
            Every pet matters, every story counts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {story.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {story.city}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {story.story}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-primary border-primary">
                    <Heart className="w-3 h-3 mr-1" />
                    {story.impact}
                  </Badge>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium story-link">
                    Read Full Story →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Have a success story to share? We'd love to hear about it!
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors hover-scale">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
