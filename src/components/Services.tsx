import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Users, Brain, Database, Lock, CloudCog } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Huisartsenpraktijken",
    description: "Complete softwareoplossingen voor elektronische patiëntendossiers, consultvoering en praktijkbeheer.",
  },
  {
    icon: Users,
    title: "Wijkzorgorganisaties",
    description: "Systemen voor thuiszorgplanning, medicatiebeheer en coördinatie tussen zorgverleners.",
  },
  {
    icon: Brain,
    title: "GGZ-aanbieders",
    description: "Veilige platforms voor behandelplannen, therapiesessies en patiëntcommunicatie in de geestelijke gezondheidszorg.",
  },
  {
    icon: CloudCog,
    title: "Microsoft Azure Cloud",
    description: "Schaalbare infrastructuur op Azure met flexibele opschaling en maximale beschikbaarheid.",
  },
  {
    icon: Lock,
    title: "Data Beveiliging",
    description: "End-to-end encryptie, toegangscontrole en compliance met AVG/GDPR wetgeving.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Veilige opslag en beheer van gevoelige medische gegevens met gegarandeerde beschikbaarheid.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-foreground">Onze Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Software oplossingen speciaal ontwikkeld voor de gezondheidszorg, 
            met beveiliging en compliance als uitgangspunt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 shadow-card hover:shadow-soft transition-smooth hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-smooth">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
