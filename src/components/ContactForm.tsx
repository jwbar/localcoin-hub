import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Users, Calendar } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    event_type: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        event_type: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bitter font-bold text-foreground mb-6">
              Ready to Deploy at Your Event?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Let's discuss how LocalCoin can enhance your festival, campus, market, or community event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-bitter">
                    <Users className="w-6 h-6 text-primary" />
                    Perfect For
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-open-sans">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>Music Festivals & Events</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>University Campuses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>Local Markets & Bazaars</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>Tourist Destinations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>Community Events</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-bitter">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    What You Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-open-sans">
                  <p className="text-muted-foreground">✓ Whitelabel platform deployment</p>
                  <p className="text-muted-foreground">✓ Custom branding & configuration</p>
                  <p className="text-muted-foreground">✓ Technical support & training</p>
                  <p className="text-muted-foreground">✓ Analytics & usage insights</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-bitter">
                  <Mail className="w-6 h-6 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Tell us about your event and we'll show you how LocalCoin can make it better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-open-sans">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Your full name"
                        className="font-open-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-open-sans">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="font-open-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="font-open-sans">Organization</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleChange("organization", e.target.value)}
                      placeholder="Event company, university, etc."
                      className="font-open-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-type" className="font-open-sans">Event Type</Label>
                    <Select onValueChange={(value) => handleChange("event_type", value)}>
                      <SelectTrigger className="font-open-sans">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="festival">Music Festival</SelectItem>
                        <SelectItem value="campus">University Campus</SelectItem>
                        <SelectItem value="market">Local Market</SelectItem>
                        <SelectItem value="tourism">Tourist Destination</SelectItem>
                        <SelectItem value="community">Community Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-open-sans">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Tell us about your event, expected attendees, and specific needs..."
                      rows={4}
                      className="font-open-sans"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full font-open-sans"
                    variant="default"
                  >
                    {isLoading ? "Sending..." : "Start the Conversation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;