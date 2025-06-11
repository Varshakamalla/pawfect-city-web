
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Building <span className="text-primary bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Pet-Friendly</span> Cities 
              <span className="text-2xl lg:text-4xl"> 🐾</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our movement to create communities where every pet has a loving home 
              and every family finds their perfect companion. Together, we're transforming 
              cities one paw at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group hover-scale bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                Join the Movement
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                <Heart className="mr-2 w-4 h-4" />
                Volunteer Now
              </Button>
              <Button variant="ghost" size="lg" className="hover-scale text-teal-600 hover:bg-teal-50">
                <Users className="mr-2 w-4 h-4" />
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>2,500+ pets adopted this year</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span>50+ participating cities</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Happy family with pets in a park"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800">
                    "Thanks to this amazing community, we found our perfect furry family member!" 
                  </p>
                  <p className="text-xs text-gray-600 mt-1">- Sarah & Max, Austin</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full p-2 shadow-lg animate-bounce">
              <Heart className="w-4 h-4" />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full p-2 shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
              <Users className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
