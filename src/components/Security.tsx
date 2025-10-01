import { Shield, Lock, CheckCircle2, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const securityFeatures = [
  {
    icon: Shield,
    title: "AVG/GDPR Compliance",
    description: "Volledig compliant met Europese privacywetgeving",
  },
  {
    icon: Lock,
    title: "End-to-End Encryptie",
    description: "Alle data versleuteld tijdens opslag en transport",
  },
  {
    icon: CheckCircle2,
    title: "Toegangscontrole",
    description: "Strikte authenticatie en autorisatie protocollen",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Complete traceerbaarheid van alle data toegang",
  },
];

const Security = () => {
  return (
    <section className="py-24 px-6 gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-soft mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Beveiliging & Compliance</span>
            </div>
            <h2 className="text-foreground">
              Uw Medische Data{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                100% Veilig
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bij ZKOO staat beveiliging centraal. Alle systemen zijn ontworpen met 
              de hoogste beveiligingsstandaarden en volledige compliance met AVG/GDPR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="gradient-card border-border/50 shadow-card hover:shadow-soft transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Microsoft Azure Infrastructuur
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Onze systemen draaien op Microsoft Azure, een van de meest betrouwbare 
                  en veilige cloud platforms ter wereld. Dit garandeert:
                </p>
                <ul className="space-y-3">
                  {[
                    "Hoogste niveau van fysieke beveiliging",
                    "Geografische data replicatie",
                    "24/7 monitoring en incident response",
                    "Automatische security updates",
                    "99.99% uptime garantie"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px]">
                <div className="absolute inset-0 gradient-primary rounded-xl opacity-20 blur-2xl" />
                <div className="relative h-full flex items-center justify-center">
                  <Shield className="w-48 h-48 text-primary/30 animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
