import { Wrench, Car, Settings, ShieldCheck, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
const Index = () => {
  return <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Service Professionnel et Fiable
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Depuis 1997, nous offrons un service d'entretien automobile de qualité supérieure à Québec.
              </p>
              <a href="#contact" className="inline-block bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-dark transition-colors">
                Prendre Rendez-vous
              </a>
            </div>
            <div className="relative animate-fade-down">
              <div className="absolute inset-0 bg-coral/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <img alt="Service automobile professionnel" className="w-full h-auto rounded-2xl" src="/lovable-uploads/a508739d-35c2-43ee-a0ea-6f7d07603794.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Que ce soit pour un simple changement d'huile, une mise au point ou toute autre réparation,
              nos mécaniciens d'expérience prendront soin de votre véhicule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Car />} title="Entretien Régulier" description="Changement d'huile, filtres, et inspection complète de votre véhicule." />
            <ServiceCard icon={<Wrench />} title="Réparations" description="Diagnostic et réparation de tous types de problèmes mécaniques." />
            <ServiceCard icon={<Settings />} title="Service de Pneus" description="Entreposage de pneus et service complet de changement saisonnier." />
            <ServiceCard icon={<ShieldCheck />} title="Survoltage" description="Service de survoltage rapide pour les situations d'urgence." />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pour Nous Joindre
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-coral" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">418-523-5325</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-coral" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">532 Boul. Langelier, Québec</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Heures d'ouverture</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lundi - Vendredi: 8h00 - 17h00</p>
                  <p>Samedi - Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Garage Langelier Inc. Tous droits réservés.</p>
        </div>
      </footer>
    </div>;
};
const ServiceCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up">
      <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4">
        <div className="text-coral">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
export default Index;