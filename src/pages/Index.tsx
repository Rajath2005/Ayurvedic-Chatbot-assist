import React from 'react';
import AyurvedicChatbot from '@/components/chatbot/AyurvedicChatbot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Sparkles, Stethoscope, Calendar, Store, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Header */}
      <header className="p-6 border-b border-primary/10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MediQ Health</h1>
              <p className="text-sm text-muted-foreground">Ayurvedic Wellness Platform</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Appointments
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Medicine
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Shops
            </a>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
              Login
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Ayurvedic Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Personal
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Ayurvedic </span>
            Wellness Guide
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the wisdom of Ayurveda enhanced by modern AI. Get personalized remedies, 
            symptom analysis, and expert guidance powered by Gemini AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow px-8">
              <Leaf className="w-5 h-5 mr-2" />
              Explore Ayurveda
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">AI Symptom Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Describe your symptoms and get instant Ayurvedic recommendations based on traditional wisdom and modern AI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-healing mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Natural Remedies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Access thousands of time-tested Ayurvedic remedies tailored to your constitution and current health needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary mx-auto mb-4 flex items-center justify-center">
                  <Store className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Authentic Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Find verified Ayurvedic medicines and herbs from trusted suppliers and certified practitioners.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chatbot Demo Section */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Try Our AI Assistant</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Your Ayurvedic AI Assistant
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Click the floating button in the bottom-right corner to start chatting with our AI-powered 
            Ayurvedic assistant. Get instant answers to your health questions, remedy suggestions, 
            and personalized guidance.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="text-left glass-card border-ayur-herbal/20">
              <CardHeader>
                <CardTitle className="text-lg text-ayur-herbal">✨ Intelligent Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Natural language processing for symptom analysis</li>
                  <li>• Personalized Ayurvedic remedy suggestions</li>
                  <li>• Integration with appointment booking</li>
                  <li>• Voice input and accessibility features</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-left glass-card border-ayur-gold/20">
              <CardHeader>
                <CardTitle className="text-lg text-ayur-gold">🌿 Traditional Wisdom</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Based on authentic Ayurvedic principles</li>
                  <li>• Vetted by qualified practitioners</li>
                  <li>• Comprehensive herbal medicine database</li>
                  <li>• Safe and natural treatment options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/10 bg-background/80">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">MediQ Health</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Bridging ancient Ayurvedic wisdom with modern AI technology for your wellness journey.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
          </div>
        </div>
      </footer>

      {/* Ayurvedic Chatbot */}
      <AyurvedicChatbot />
    </div>
  );
};

export default Index;
