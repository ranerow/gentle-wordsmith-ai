import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onToggleMode: () => void;
  isSignUp: boolean;
}

export const LoginForm = ({ onToggleMode, isSignUp }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp && password !== confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: isSignUp ? "Cadastro realizado!" : "Login realizado!",
      description: isSignUp 
        ? "Bem-vindo ao Sistema de Filas" 
        : "Redirecionando para o painel principal...",
    });
  };

  return (
    <Card className="w-full max-w-md shadow-medical-card hover:shadow-medical-hover transition-all duration-300 bg-white/95 backdrop-blur-sm border-0">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-medical-gradient rounded-full flex items-center justify-center shadow-lg">
          <Stethoscope className="w-8 h-8 text-white" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Sistema de Filas
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {isSignUp ? "Crie sua conta no sistema" : "Entre com suas credenciais"}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-gray-200 focus:border-medical-primary focus:ring-medical-primary/20 transition-all duration-300"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-gray-200 focus:border-medical-primary focus:ring-medical-primary/20 transition-all duration-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-gray-200 focus:border-medical-primary focus:ring-medical-primary/20 transition-all duration-300"
            />
          </div>

          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-gray-200 focus:border-medical-primary focus:ring-medical-primary/20 transition-all duration-300"
              />
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-medical-gradient hover:shadow-medical-hover transition-all duration-300 text-white font-medium py-3 text-base border-0 shadow-lg hover:scale-[1.02]"
          >
            <LogIn className="w-4 h-4 mr-2" />
            {isSignUp ? "Cadastrar" : "Entrar"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={onToggleMode}
            className="text-medical-primary hover:text-medical-primary-dark font-medium transition-colors duration-300"
          >
            {isSignUp ? "Já tem conta? Faça login" : "Não tem conta? Cadastre-se"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};