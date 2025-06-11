
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Heart, Mail, MapPin, User } from "lucide-react";

const VolunteerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    role: "",
    experience: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Volunteer form submitted:", formData);
    toast({
      title: "Thank you for volunteering! 🐾",
      description: "We'll contact you soon with more information about opportunities in your area.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      city: "",
      role: "",
      experience: "",
      motivation: ""
    });
  };

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Our Volunteer Family <Heart className="inline w-8 h-8 text-red-500" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us create pet-friendly communities by volunteering your time and skills. 
              Every contribution makes a difference in a pet's life.
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Volunteer Registration</CardTitle>
              <CardDescription>
                Fill out this form to get started with your volunteer journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      City
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Your city"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Role Preference</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foster">Foster Care Provider</SelectItem>
                        <SelectItem value="adoption">Adoption Coordinator</SelectItem>
                        <SelectItem value="events">Event Organizer</SelectItem>
                        <SelectItem value="transport">Pet Transportation</SelectItem>
                        <SelectItem value="social">Social Media Manager</SelectItem>
                        <SelectItem value="education">Community Education</SelectItem>
                        <SelectItem value="fundraising">Fundraising</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Experience with Pets</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - New to pet care</SelectItem>
                      <SelectItem value="some">Some Experience - Pet owner or casual volunteer</SelectItem>
                      <SelectItem value="experienced">Experienced - Regular volunteer or professional</SelectItem>
                      <SelectItem value="expert">Expert - Veterinary or extensive rescue experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">What motivates you to volunteer?</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    placeholder="Tell us why you want to help create pet-friendly communities..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-scale">
                  <Heart className="mr-2 w-4 h-4" />
                  Submit Volunteer Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
