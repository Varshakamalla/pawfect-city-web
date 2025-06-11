
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/HeroSection";
import VolunteerForm from "@/components/VolunteerForm";
import ImpactStories from "@/components/ImpactStories";
import PetAdoptionCarousel from "@/components/PetAdoptionCarousel";
import Navigation from "@/components/Navigation";
import { Heart, Users, Home, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">2,500+</h3>
              <p className="text-muted-foreground">Pets Adopted</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">1,200+</h3>
              <p className="text-muted-foreground">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">85</h3>
              <p className="text-muted-foreground">Partner Shelters</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-muted-foreground">Cities Participating</p>
            </div>
          </div>
        </div>
      </section>

      <PetAdoptionCarousel />
      <VolunteerForm />
      <ImpactStories />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🐾 Pet-Friendly Cities</h3>
              <p className="text-primary-foreground/80">
                Building communities where every pet has a loving home and every family finds their perfect companion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#volunteer" className="hover:text-primary-foreground transition-colors">Volunteer</a></li>
                <li><a href="#adopt" className="hover:text-primary-foreground transition-colors">Adopt a Pet</a></li>
                <li><a href="#stories" className="hover:text-primary-foreground transition-colors">Success Stories</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <p className="text-primary-foreground/80 mb-2">Follow our journey on social media</p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Pet-Friendly Cities Campaign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
