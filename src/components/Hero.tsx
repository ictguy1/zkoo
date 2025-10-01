import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern healthcare technology and cloud computing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-soft">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AVG/GDPR Compliant</span>
          </div>

          {/* Heading */}
          <h1 className="text-foreground drop-shadow-lg">
            Veilige Cloud Oplossingen voor de{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-bold">
              Zorg
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ZKOO ontwikkelt beveiligde software voor zorginstellingen in Nederland en België. 
            Uw medische data, veilig in de cloud.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 shadow-glow hover:shadow-soft transition-smooth group">
              Ontdek Onze Oplossingen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Cloud className="w-4 h-4" />
              Beveiliging & Compliance
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">AVG Compliant</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Cloud Support</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Zorginstellingen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
