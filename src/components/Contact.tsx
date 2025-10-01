import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-foreground">Contact & Demo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wilt u meer weten over onze oplossingen of een demo aanvragen? 
            Neem contact met ons op.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Plan een Demo</h3>
                <p className="text-muted-foreground mb-8">
                  Ontdek hoe ZKOO uw zorginstelling kan helpen met veilige, 
                  schaalbare cloud oplossingen. Plan een persoonlijke demo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:info@zkoo.nl" className="text-muted-foreground hover:text-primary transition-smooth">
                      info@zkoo.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Telefoon</div>
                    <a href="tel:+31201234567" className="text-muted-foreground hover:text-primary transition-smooth">
                      +31 20 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Locatie</div>
                    <div className="text-muted-foreground">
                      Amsterdam, Nederland<br />
                      Brussel, België
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full shadow-glow hover:shadow-soft transition-smooth">
                Vraag een Demo Aan
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="gradient-card border-border/50 shadow-card p-8">
              <h4 className="font-semibold text-lg mb-4">Voor Huisartsen</h4>
              <p className="text-muted-foreground">
                Stroomlijn uw praktijk met onze EPD oplossingen, speciaal ontworpen 
                voor huisartsenpraktijken met focus op gebruiksgemak en veiligheid.
              </p>
            </Card>

            <Card className="gradient-card border-border/50 shadow-card p-8">
              <h4 className="font-semibold text-lg mb-4">Voor Zorgorganisaties</h4>
              <p className="text-muted-foreground">
                Schaalbare oplossingen voor grotere organisaties met complexe 
                workflows en multi-locatie ondersteuning.
              </p>
            </Card>

            <Card className="gradient-card border-border/50 shadow-card p-8">
              <h4 className="font-semibold text-lg mb-4">Voor GGZ Instellingen</h4>
              <p className="text-muted-foreground">
                Gespecialiseerde systemen voor de geestelijke gezondheidszorg met 
                focus op privacy en behandelplan management.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
