import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Update deze URL naar je Web VM IP of domein
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      
      const response = await fetch(`${apiUrl}/api/demo-requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Aanvraag verzonden!",
          description: "We nemen zo spoedig mogelijk contact met u op.",
        });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        throw new Error(data.error || 'Er ging iets mis');
      }
    } catch (error) {
      toast({
        title: "Fout bij verzenden",
        description: "Probeer het later opnieuw of neem direct contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  Vul het formulier in en ontdek hoe ZKOO uw zorginstelling kan helpen met veilige, schaalbare cloud oplossingen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Naam *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefoon"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Organisatie"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Bericht"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-glow hover:shadow-soft transition-smooth"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verzenden..." : "Vraag een Demo Aan"}
                </Button>
              </form>

              <div className="pt-6 border-t border-border/50 space-y-4">
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
