import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Onze Missie",
    description: "ZKOO levert veilige, schaalbare cloud oplossingen die zorginstellingen in staat stellen om zich te focussen op wat echt belangrijk is: de zorg voor hun patiënten.",
  },
  {
    icon: Users,
    title: "Ons Team",
    description: "Een team van ervaren developers, security experts en zorgprofessionals die samen werken aan de beste software voor de zorgsector.",
  },
  {
    icon: Award,
    title: "Kwaliteit",
    description: "Wij hanteren de hoogste standaarden op het gebied van softwareontwikkeling, beveiliging en compliance met AVG/GDPR wetgeving.",
  },
  {
    icon: TrendingUp,
    title: "Innovatie",
    description: "Continue verbetering en innovatie met de nieuwste cloud technologieën zoals Microsoft Azure om optimale prestaties te garanderen.",
  },
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-foreground">Over ZKOO</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ZorgKwaliteit OndersteuningsOrganisatie (ZKOO) is een toonaangevende leverancier 
            van cloud-based software oplossingen voor de zorgsector in Nederland en België.
          </p>
        </div>

        <div className="mb-16">
          <Card className="gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold">Wie We Zijn</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ZKOO ontwikkelt gespecialiseerde software voor huisartsenpraktijken, wijkzorgorganisaties 
                  en GGZ-aanbieders. Onze oplossingen ondersteunen het dagelijkse werk van zorgverleners 
                  en verwerken zeer gevoelige gegevens, waaronder medische dossiers, diagnoses, 
                  behandelplannen en consultverslagen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Met de overstap naar Microsoft Azure bieden wij flexibele, schaalbare cloud oplossingen 
                  waarbij beveiliging en compliance altijd voorop staan. Onze infrastructuur is ontworpen 
                  volgens de hoogste beveiligingsstandaarden en volledig compliant met AVG/GDPR wetgeving.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="gradient-card border-border/50 shadow-card hover:shadow-soft transition-smooth hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">Onze Locaties</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-primary">Nederland</h4>
                  <p className="text-muted-foreground">
                    Hoofdkantoor Amsterdam<br />
                    Servicing alle Nederlandse zorginstellingen
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-primary">België</h4>
                  <p className="text-muted-foreground">
                    Kantoor Brussel<br />
                    Servicing alle Belgische zorginstellingen
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
