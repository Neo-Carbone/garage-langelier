
import { Phone, MapPin } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-coral">Garage Langelier</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-coral transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-coral transition-colors">Nos Services</a>
            <a href="#contact" className="text-gray-700 hover:text-coral transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="tel:418-523-5325" className="flex items-center text-gray-700 hover:text-coral">
              <Phone className="w-5 h-5 mr-2" />
              <span className="hidden md:block">418-523-5325</span>
            </a>
            <a href="https://maps.google.com/?q=532+Boul.+Langelier" target="_blank" rel="noopener noreferrer" 
               className="flex items-center text-gray-700 hover:text-coral">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="hidden md:block">532 Boul. Langelier</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
