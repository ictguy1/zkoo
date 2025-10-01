import { Cloud } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ZKOO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Veilige cloud oplossingen voor de zorgsector in Nederland en België.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Huisartsenpraktijken</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Wijkzorgorganisaties</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">GGZ-aanbieders</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Azure Cloud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Over Ons</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Beveiliging</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Carrière</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">AVG/GDPR</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Algemene Voorwaarden</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} ZKOO. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <span>Amsterdam, Nederland</span>
            <span>•</span>
            <span>Brussel, België</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
