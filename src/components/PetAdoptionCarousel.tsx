
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
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80",
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
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80",
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
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80",
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
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80",
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
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80",
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
    <section id="adopt" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Meet Your New Best Friend 🐾
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered matching system helps you find the perfect pet companion 
            based on your lifestyle, preferences, and living situation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={currentPet.image}
                  alt={currentPet.name}
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                    AI Suggested
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-white/95 border-pink-300 text-pink-600">
                    <Heart className="w-3 h-3 mr-1" />
                    Available
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 text-gray-800">{currentPet.name}</h3>
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

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Personality Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPet.personality.map((trait) => (
                      <Badge key={trait} variant="outline" className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {currentPet.story}
                  </p>
                </div>

                <div className="mb-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                  <div className="flex items-center mb-1">
                    <Users className="w-4 h-4 mr-2 text-emerald-600" />
                    <span className="font-semibold text-emerald-700 text-sm">AI Compatibility</span>
                  </div>
                  <p className="text-xs text-emerald-600">{currentPet.aiMatch}</p>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 hover-scale bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-sm">
                    <Heart className="w-4 h-4 mr-1" />
                    Adopt {currentPet.name}
                  </Button>
                  <Button variant="outline" className="hover-scale border-purple-300 text-purple-600 hover:bg-purple-50 text-sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Button variant="outline" size="sm" onClick={prevPet} className="hover-scale border-purple-300 text-purple-600 hover:bg-purple-50">
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
                  className={`w-2 h-2 rounded-full transition-colors hover-scale ${
                    index === currentIndex ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={nextPet} className="hover-scale border-purple-300 text-purple-600 hover:bg-purple-50">
              Next →
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-3 text-sm">
              Can't find the perfect match? Our AI can help you find more compatible pets!
            </p>
            <Button variant="outline" className="hover-scale border-violet-300 text-violet-600 hover:bg-violet-50">
              Take Compatibility Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetAdoptionCarousel;
