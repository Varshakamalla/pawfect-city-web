
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold">Pet-Friendly Cities</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#adopt" className="text-foreground hover:text-primary transition-colors">Adopt</a>
            <a href="#volunteer" className="text-foreground hover:text-primary transition-colors">Volunteer</a>
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">Stories</a>
            <Button>Join the Movement</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#adopt" className="block text-foreground hover:text-primary transition-colors">Adopt</a>
            <a href="#volunteer" className="block text-foreground hover:text-primary transition-colors">Volunteer</a>
            <a href="#stories" className="block text-foreground hover:text-primary transition-colors">Stories</a>
            <Button className="w-full">Join the Movement</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
