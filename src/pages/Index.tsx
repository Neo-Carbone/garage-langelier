import { 
  Wrench, Car, Settings, ShieldCheck, Phone, MapPin, 
  Clock, Award, Shield, MessageCircle, ChevronRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t z-50 p-4 flex justify-between items-center">
        <a href="tel:418-523-5325" className="flex-1 bg-coral text-white text-center py-3 rounded-l-lg">
          <Phone className="inline-block w-5 h-5 mr-2" />
          Appeler
        </a>
        <a href="#contact" className="flex-1 bg-coral-dark text-white text-center py-3 rounded-r-lg">
          Rendez-vous
        </a>
      </div>

      {/* Value Proposition Banner */}
      <div className="bg-coral/10 py-2 text-center text-coral-dark font-semibold">
        Service d'urgence 24/7 • Prix garantis • Inspection gratuite
      </div>
      
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
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <a href="#contact" className="inline-block bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-dark transition-colors">
                  Prendre Rendez-vous
                </a>
                <a href="tel:418-523-5325" className="inline-block bg-coral/10 text-coral px-8 py-4 rounded-lg font-semibold hover:bg-coral/20 transition-colors">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  418-523-5325
                </a>
              </div>
            </div>
            <div className="relative animate-fade-down">
              <div className="absolute inset-0 bg-coral/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <img 
                  alt="Service automobile professionnel" 
                  className="w-full h-auto rounded-2xl" 
                  src="lovable-uploads/a508739d-35c2-43ee-a0ea-6f7d07603794.jpg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi Nous Choisir?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Clock />}
              title="27 Ans d'Expérience"
              description="Une expertise inégalée dans le domaine automobile depuis 1997."
            />
            <FeatureCard 
              icon={<Award />}
              title="Prix Garantis"
              description="Meilleur rapport qualité-prix garanti dans la région de Québec."
            />
            <FeatureCard 
              icon={<Wrench />}
              title="Équipement Moderne"
              description="Technologies de pointe pour un diagnostic précis et rapide."
            />
            <FeatureCard 
              icon={<Shield />}
              title="Service Garanti"
              description="Satisfaction garantie sur tous nos services et réparations."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
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

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Notre Atelier
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img 
              src="lovable-uploads/d7c4b7b0-ea6d-4c64-83f0-e506cd749ab7.jpg"
              alt="Atelier mécanique moderne" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="lovable-uploads/73a17875-afdc-4aac-ad56-1558f24efab8.jpg"
              alt="Service professionnel" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
            <img 
              src="lovable-uploads/02ea6e60-c321-4afe-9c0d-f8c21fd92abb.jpg"
              alt="Équipement moderne" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Pour Nous Joindre
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-coral" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Téléphone</h3>
                      <a href="tel:418-523-5325" className="text-coral hover:text-coral-dark transition-colors">
                        418-523-5325
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-coral" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Adresse</h3>
                      <a 
                        href="https://maps.google.com/?q=532+Boul.+Langelier,+Québec" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-coral hover:text-coral-dark transition-colors"
                      >
                        532 Boul. Langelier, Québec
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-6 h-6 text-coral" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Chat En Direct</h3>
                      <button className="text-coral hover:text-coral-dark transition-colors">
                        Démarrer une conversation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Heures d'ouverture</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Lundi - Vendredi: 8h00 - 17h00</p>
                    <p>Samedi - Dimanche: Fermé</p>
                    <p className="text-coral font-semibold">Service d'urgence 24/7</p>
                  </div>
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
      <a 
        href="#contact" 
        className="inline-flex items-center text-coral hover:text-coral-dark mt-4 transition-colors"
      >
        En savoir plus
        <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>;
};

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4">
      <div className="text-coral">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;
};

export default Index;
