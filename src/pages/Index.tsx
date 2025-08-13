import { useState } from "react";
import { LoginForm } from "@/components/login-form";

const Index = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-medical-gradient flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-medical-gradient opacity-95"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Sistema de Prontuário Eletrônico
          </h1>
          <p className="text-white/90 text-lg drop-shadow-md">
            Gestão eficiente de filas médicas
          </p>
        </div>
        
        <LoginForm onToggleMode={toggleMode} isSignUp={isSignUp} />
        
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            Sistema seguro e confiável para profissionais de saúde
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;