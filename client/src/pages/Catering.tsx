import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Instagram, MessageCircle, Clock, Gift } from "lucide-react";
import CateringInquiryForm from "@/components/CateringInquiryForm";

/**
 * Design Philosophy: Warm Artisanal Storytelling
 * - Dedicated catering page with focused messaging
 * - Elegant presentation of catering services and packages
 * - Professional inquiry form for custom quotes
 */

export default function Catering() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663328994859/DUUbCvsmtzDWXqQG.png" alt="Made With Love by Cinthia" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Made With Love</h1>
              <p className="text-xs text-muted-foreground">by Cinthia</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="/#brigadeiros" className="text-sm hover:text-primary transition">Brigadeiros</a>
            <a href="/#menu" className="text-sm hover:text-primary transition">Cakes</a>
            <a href="/#contact" className="text-sm hover:text-primary transition">Contact</a>
            <a href="/catering" className="text-sm hover:text-primary transition">Catering</a>
          </div>

          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://made-with-love-by-cinthia.square.site/s/shop" target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Catering Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Make your special moments unforgettable with authentic Brazilian flavors and handcrafted treats tailored to your event.
            </p>
          </div>
        </div>
      </section>

      {/* Catering Packages Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Catering Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Perfect for your special moments and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Small Package */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Small Pack</CardTitle>
                <CardDescription className="text-base">Up to 25 people</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Perfect for intimate gatherings
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">50 assorted brigadeiros, up to 3 flavors (GF)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">25 mini cupcakes, 1 flavor</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">25 mini mousse, 1 flavor</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">100 items total</p>
                <div className="text-3xl font-bold text-primary mb-6">
                  R$300
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Inquire
                </Button>
              </CardContent>
            </Card>

            {/* Medium Package */}
            <Card className="hover:shadow-lg transition-shadow border-primary/20 md:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Medium Pack</CardTitle>
                <CardDescription className="text-base">Up to 50 people</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Great for celebrations
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">100 assorted brigadeiros, up to 4 flavors (GF)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">50 mini cupcakes, 2 flavors</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">50 mini mousse, 1 flavor</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">50 mini filled cookies (GF)</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">250 items total</p>
                <div className="text-3xl font-bold text-primary mb-6">
                  R$775
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Inquire
                </Button>
              </CardContent>
            </Card>

            {/* Large Package */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Large Pack</CardTitle>
                <CardDescription className="text-base">Up to 200 people</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  For big events and large celebrations
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">400 assorted brigadeiros, up to 8 flavors (GF)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">200 mini cake in a jar, 4 flavors</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">200 mini mousse, 2 flavors</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">200 mini filled cookies (GF)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm text-muted-foreground">200 mini quindim (GF)</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">1,200 items total</p>
                <div className="text-3xl font-bold text-primary mb-6">
                  R$4,200
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Inquire
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Catering Display Image */}
          <div className="mb-12">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663328994859/vhjyBGFCBPTxpXYg.png"
              alt="Beautiful catering display with desserts and floral arrangements"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Custom Catering Inquiry Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <Card className="bg-accent/10 border-primary/20">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Custom Catering Inquiry</h2>
              <p className="text-muted-foreground mb-8">
                Looking for something specific? Fill out this form with your event details and I'll get back to you with a personalized quote. Whether it's a corporate gathering, wedding, birthday party, or Brazilian-themed celebration, let's create something special together.
              </p>
              <CateringInquiryForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Why Choose Our Catering?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary text-center mb-3">Authentic Flavors</h3>
                <p className="text-muted-foreground text-center">
                  Genuine Brazilian recipes and premium ingredients in every bite
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary text-center mb-3">Personal Touch</h3>
                <p className="text-muted-foreground text-center">
                  Customized to your vision with direct communication throughout
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary text-center mb-3">Professional Service</h3>
                <p className="text-muted-foreground text-center">
                  Reliable delivery and beautiful presentation for your event
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Weddings",
              "Birthday Parties",
              "Corporate Events",
              "Anniversaries",
              "Graduations",
              "Brazilian Celebrations",
              "Intimate Gatherings",
              "Holiday Parties"
            ].map((event) => (
              <div key={event} className="flex items-center p-4 bg-accent/5 rounded-lg border border-primary/10">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-lg text-foreground font-medium">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something delicious and memorable for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" asChild>
                <a href="#inquiry">Get a Quote</a>
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="https://wa.me/19024784600" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
