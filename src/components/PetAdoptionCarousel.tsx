
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Users } from "lucide-react";
import { useState, useEffect } from "react";

const pets = [
  {
    id: 1,
    name: "Luna",
    breed: "Golden Retriever Mix",
    age: "2 years",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    personality: ["Friendly", "Energetic", "Loyal"],
    story: "Luna loves long walks and playing fetch. She's great with kids and other dogs!",
    aiMatch: "95% match for active families"
  },
  {
    id: 2,
    name: "Whiskers",
    breed: "Domestic Shorthair",
    age: "3 years",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    personality: ["Calm", "Affectionate", "Independent"],
    story: "Whiskers is a gentle soul who loves quiet afternoons and gentle head scratches.",
    aiMatch: "90% match for quiet households"
  },
  {
    id: 3,
    name: "Rocky",
    breed: "German Shepherd Mix",
    age: "4 years",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    personality: ["Protective", "Smart", "Loyal"],
    story: "Rocky is a gentle giant who's looking for an experienced family to call his own.",
    aiMatch: "88% match for experienced owners"
  },
  {
    id: 4,
    name: "Bella",
    breed: "Labrador Mix",
    age: "1 year",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    personality: ["Playful", "Sweet", "Social"],
    story: "Bella is a young pup with endless energy and love to give. Perfect for an active lifestyle!",
    aiMatch: "92% match for young families"
  },
  {
    id: 5,
    name: "Mittens",
    breed: "Persian Cat",
    age: "5 years",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    personality: ["Gentle", "Quiet", "Loving"],
    story: "Mittens is a senior cat looking for a peaceful home where she can enjoy her golden years.",
    aiMatch: "85% match for senior pet lovers"
  }
];

const PetAdoptionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % pets.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextPet = () => {
    setCurrentIndex((prev) => (prev + 1) % pets.length);
    setIsAutoPlaying(false);
  };

  const prevPet = () => {
    setCurrentIndex((prev) => (prev - 1 + pets.length) % pets.length);
    setIsAutoPlaying(false);
  };

  const currentPet = pets[currentIndex];

  return (
    <section id="adopt" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet Your New Best Friend 🐾
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered matching system helps you find the perfect pet companion 
            based on your lifestyle, preferences, and living situation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-square lg:aspect-auto">
                <img 
                  src={currentPet.image}
                  alt={currentPet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">
                    AI Suggested
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90">
                    <Heart className="w-3 h-3 mr-1" />
                    Available
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">{currentPet.name}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{currentPet.breed}</p>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {currentPet.age}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {currentPet.location}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Personality Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPet.personality.map((trait) => (
                      <Badge key={trait} variant="outline">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {currentPet.story}
                  </p>
                </div>

                <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold text-primary">AI Compatibility</span>
                  </div>
                  <p className="text-sm text-primary">{currentPet.aiMatch}</p>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 hover-scale">
                    <Heart className="w-4 h-4 mr-2" />
                    Adopt {currentPet.name}
                  </Button>
                  <Button variant="outline" className="hover-scale">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevPet}>
              ← Previous
            </Button>
            
            <div className="flex space-x-2">
              {pets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={nextPet}>
              Next →
            </Button>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Can't find the perfect match? Our AI can help you find more compatible pets!
            </p>
            <Button variant="outline" className="hover-scale">
              Take Compatibility Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetAdoptionCarousel;
