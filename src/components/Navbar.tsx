import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-smooth">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
              <Cloud className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">ZKOO</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#diensten" className="text-sm font-medium hover:text-primary transition-smooth">
              Diensten
            </a>
            <a href="#beveiliging" className="text-sm font-medium hover:text-primary transition-smooth">
              Beveiliging
            </a>
            <a href="#over" className="text-sm font-medium hover:text-primary transition-smooth">
              Over Ons
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          <Button size="sm" className="shadow-soft hover:shadow-glow transition-smooth">
            Demo Aanvragen
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
