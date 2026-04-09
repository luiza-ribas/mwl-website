import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, MapPin, Phone, Mail, Instagram, MessageCircle, Star, Truck, Clock, Gift } from "lucide-react";
import { useState } from "react";


/**
 * Design Philosophy: Warm Artisanal Storytelling
 * - Authentic, personal narrative-driven layout
 * - Warm color palette celebrating Brazilian heritage
 * - Organic flow from story → education → products → services
 * - Emphasis on handmade quality and community connection
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("decorated-cakes");

  // Menu data
  const menuCategories = {
    "decorated-cakes": {
      title: "Decorated Cakes",
      description: "Beautifully decorated custom cakes",
      images: ["/Decorated/1.jpg", "/Decorated/2.jpg", "/Decorated/3.jpg", "/Decorated/4.jpg"]
    },
    "themed-cakes": {
      title: "Themed Cakes",
      description: "Fun themed cakes for special occasions",
      images: ["/Themed/1.jpg", "/Themed/2.jpg", "/Themed/3.jpg", "/Themed/4.jpg"]
    },
    "volcano-cakes": {
      title: "Volcano Cakes",
      description: "Unique volcano-themed cakes",
      images: ["/Volcano/1.svg", "/Volcano/2.svg", "/Volcano/3.svg", "/Volcano/4.svg"]
    }
  };

  // Testimonials
  const testimonials = [
    {
      name: "Luiza Ribas",
      text: "Cinthia's brigadeiros are the best thing I have ever had. I say this as a Brazilian that have eaten tons of brigadeiros of many flavours and her pistachio one is BY FAR THE BEST. Her brigadeiro is not too sweet and melts in the mouth. Actually, everything that I tasted so far is very well made and delicious.",
      rating: 5,
      occasion: "Regular Customer"
    },
    {
      name: "Yonelis Legra",
      text: "I ordered a cake, cupcakes, and brigadeiros expecting them to be good. They were absolutely exceptional. The honey cake alone is worth ordering — nostalgic, refined, and unforgettable. The cupcakes were truly made with love and what an amazing icing. The brigadeiros were a flavour fest in every bite. If you are looking for treats for your next birthday or party look no further. They are truly made with 💗",
      rating: 5,
      occasion: "Birthday party"
    },
    {
      name: "Camila Reis",
      text: "Cinthia's desserts were an absolute highlight of our wedding! From the decadent brigadeiros (crème brûlée, orange, and vegan chocolate) to the refreshing passion fruit and lime mousses, every bite was pure perfection. Not only were they incredibly delicious, but they were also stunningly presented- our guests couldn't stop raving about them! If you want elegant, flavorful, and unforgettable desserts for your special event, Cinthia is the one to trust. 10/10 recommend!",
      rating: 5,
      occasion: "Wedding"
    },
    {
      name: "Sofiko Bekauri",
      text: "Made with Love by Cinthia was amazing! They donated baked goods for our postpartum depression fundraiser, and everyone loved them. The treats were so delicious and looked incredible too. You can really tell they put a lot of care into what they make. Thank you for helping make our event so special!",
      rating: 5,
      occasion: "Community Engagement"
    }
  ];


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
            <a href="#brigadeiros" className="text-sm hover:text-primary transition">Brigadeiros</a>
            <a href="#menu" className="text-sm hover:text-primary transition">Cakes</a>
            <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
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
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/ruRA3GwX9tSpneevPoUBl7/sandbox/KpaB8f3LNslLn46O9FeG4Q-img-1_1770236969000_na1fn_bXdsLWhlcm8tYnJpZ2FkZWlyb3MtbmV3.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcnVSQTNHd1g5dFNwbmVldlBvVUJsNy9zYW5kYm94L0twYUI4ZjNMTnNsTG40Nk85RmVHNFEtaW1nLTFfMTc3MDIzNjk2OTAwMF9uYTFmbl9iWGRzTFdobGNtOHRZbkpwWjJGa1pXbHliM010Ym1WMy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qvUBXf2gaA0W4zd3oLJfm0zx7E~vd9qc8qcOKKmGxWpN7Y3x1clO3H~pI0xLkDVLO2K82MZJab3rb8Jr8weheKR1VwUIvtNWfkc8zinVBh2VDCkROeOvNKdvBvMEs8EbeDzT~kbgruXqiLWVKwlGDsQHLpVZqXnpwj1zJxS-nnONGJHwZgJOmDAzMwQqZbTyRkpDyNnqppygmDB9l0COgP1ez37Jwl2p18b~yTS8LPg~zZcJR3G~mRNoxOMxmwPSIB2jupdoYwqbHc2VM3Balkh1dy0NPzFDfGFC7QR4bBl6hWqCElZxh1kcKyqw1wG9aLzujZPNTzkHBOianBEymg__')",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bringing Brazilian Flavor to Halifax
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Handmade cakes, brigadeiros & catering with love
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://made-with-love-by-cinthia.square.site" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white">
              <a href="#menu">Explore Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Brigadeiros Hero Section */}
      <section id="brigadeiros" className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Discover Brigadeiros</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Brigadeiros are an iconic Brazilian treat—a delicious chocolate confection made with condensed milk, butter, and cocoa. They're naturally gluten-free and perfect for any occasion.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🇧🇷</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Authentic Recipe</h3>
                    <p className="text-sm text-muted-foreground">Traditional Brazilian preparation</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Gluten-Free</h3>
                    <p className="text-sm text-muted-foreground">Naturally free from gluten</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">❤️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Made with Love</h3>
                    <p className="text-sm text-muted-foreground">Handcrafted with care</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://made-with-love-by-cinthia.square.site/shop/brigadeiro/ZUJSKJXIX5AYZQ7MSKUUZRVP?page=1&limit=30&sort_by=category_order&sort_order=asc" target="_blank" rel="noopener noreferrer">
                  Order Brigadeiros
                </a>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663328994859/zlucdYtsOZTGAPBt.png"
                alt="Brigadeiros"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Cake Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Explore our beautiful cake designs
            </p>
          </div>

          <Tabs defaultValue="decorated-cakes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="decorated-cakes">Decorated Cakes</TabsTrigger>
              <TabsTrigger value="themed-cakes">Themed Cakes</TabsTrigger>
              <TabsTrigger value="volcano-cakes">Volcano Cakes</TabsTrigger>
            </TabsList>

            {Object.entries(menuCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.images.map((image, idx) => (
                    <img key={idx} src={image} alt={`${category.title} ${idx + 1}`} className="rounded-lg shadow-lg w-full h-48 object-cover" />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to order one of these beautiful cakes?
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://made-with-love-by-cinthia.square.site/s/shop" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">About Made With Love</h2>
            <p className="text-lg text-muted-foreground">
              Every treat is made with the best ingredients and lots of care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-primary/20 shadow-lg">
                <CardContent className="pt-8">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    Welcome to Made With Love by Cinthia! I'm passionate about bringing authentic Brazilian flavors to Halifax. My journey started with a love for baking and a desire to share the warmth and joy of Brazilian culture through delicious, handmade treats.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    Every brigadeiro, cake, and pastry is crafted with premium ingredients and personal attention. I believe that food made with love tastes better, and that's the heart of everything I create.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Whether you're celebrating a special moment or simply craving something authentic and delicious, I'm here to make it memorable.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663328994859/KEqJBesEkuQNiamm.png" 
                alt="Cinthia with Made With Love products" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from happy customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.occasion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to order or have questions? Reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-8">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/19024784600" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Message us
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-8">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+19024784600" className="text-primary hover:underline">
                  (902) 478-4600
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-8">
                <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <a href="https://instagram.com/mwlbycinthia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Follow us
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-primary">Find Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Daily Pickup</p>
                <p className="text-muted-foreground">Available in West Bedford, NS</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Brewery Market</p>
                <p className="text-muted-foreground">Every Saturday from 8am-1pm</p>
                <p className="text-muted-foreground text-sm">1496 Lower Water St #312</p>
                <p className="text-muted-foreground text-sm">Halifax, NS B3J 0J3</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Follow Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Stay updated with our latest creations and behind-the-scenes moments
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://instagram.com/mwlbycinthia" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Follow @mwlbycinthia
              </a>
            </Button>
          </div>

          {/* Instagram Feed Embed */}
          <div className="flex justify-center">
            <script async defer src="//www.instagram.com/embed.js"></script>
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/mwlbycinthia/" 
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: "0",
                width: "99.375%"
              }}
            >
              <div style={{ padding: "16px" }}>
                <a href="https://www.instagram.com/mwlbycinthia/" target="_blank" rel="noopener noreferrer" style={{ background: "#FFF", lineHeight: "0", padding: "0 0", textAlign: "center", textDecoration: "none", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: "0", height: "40px", marginRight: "14px", width: "40px" }}></div>
                    <div style={{ display: "flex", flexDirection: "column", flexGrow: "1", justifyContent: "center" }}>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: "0", height: "14px", marginBottom: "6px", width: "100px" }}></div>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: "0", height: "14px", width: "60px" }}></div>
                    </div>
                  </div>
                  <div style={{ padding: "19% 0" }}></div>
                  <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                    <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60 C535.114,60 530.342,55.228 530.342,49.342 L530.342,9.656 C530.342,3.77 535.114,0 541,0 L556.869,0 C562.755,0 567.527,4.772 567.527,10.658 L567.527,50.342 C567.527,56.23 562.755,60 556.869,60 Z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: "550", lineHeight: "18px" }}>View this profile on Instagram</div>
                  </div>
                  <div style={{ padding: "12.5% 0" }}></div>
                  <div style={{ display: "flex", flexDirection: "row", marginBottom: "14px", alignItems: "center" }}>
                    <div>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5%", width: "12.5%" }}></div>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5%", marginLeft: "2%", marginTop: "2%", width: "12.5%" }}></div>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5%", marginLeft: "2%", marginTop: "2%", width: "12.5%" }}></div>
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: "0", height: "12.5%", width: "15vw" }}></div>
                    </div>
                  </div>
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663328994859/DUUbCvsmtzDWXqQG.png" alt="Made With Love by Cinthia" className="h-20 w-20 object-contain mb-4" />
              <h3 className="font-bold mb-2">Made With Love</h3>
              <p className="text-sm text-white/80">Bringing Brazilian flavor to Halifax</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#menu" className="hover:text-white/80">Menu</a></li>
                <li><a href="#brigadeiros" className="hover:text-white/80">Brigadeiros</a></li>
                <li><a href="#catering" className="hover:text-white/80">Catering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://instagram.com/mwlbycinthia" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">Instagram</a></li>
                <li><a href="https://wa.me/19024784600" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://made-with-love-by-cinthia.square.site" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">Square Store</a></li>
                <li><a href="#contact" className="hover:text-white/80">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>© 2026 Made With Love by Cinthia. All rights reserved.</p>
            <p className="mt-2">Halifax, HRM • Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
