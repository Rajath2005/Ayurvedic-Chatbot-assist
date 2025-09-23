import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Leaf, 
  Stethoscope, 
  Calendar, 
  Store,
  User,
  Bot,
  ExternalLink 
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const ChatbotBody: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Welcome to your Ayurvedic AI Assistant! 🙏 I can help you with remedies, symptoms, appointments, and more. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [queryCount, setQueryCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    {
      icon: Leaf,
      label: 'Ayurvedic Home Remedies',
      color: 'bg-gradient-primary',
      action: () => handleQuickOption('I need Ayurvedic home remedies')
    },
    {
      icon: Stethoscope,
      label: 'Symptom Diagnosis',
      color: 'bg-gradient-healing',
      action: () => handleQuickOption('I want to describe my symptoms for diagnosis')
    },
    {
      icon: Calendar,
      label: 'Book Appointment',
      color: 'bg-gradient-secondary',
      action: () => handleQuickOption('I want to book an appointment')
    },
    {
      icon: Store,
      label: 'Ayurvedic Shops',
      color: 'bg-gradient-earth',
      action: () => handleQuickOption('Show me nearby Ayurvedic shops')
    }
  ];

  const handleQuickOption = (query: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setQueryCount(prev => prev + 1);

    // Simulate bot thinking
    setTimeout(() => {
      const typingMessage: Message = {
        id: Date.now().toString() + '_typing',
        type: 'bot',
        content: '',
        timestamp: new Date(),
        isTyping: true
      };
      setMessages(prev => [...prev, typingMessage]);

      // Simulate response
      setTimeout(() => {
        setMessages(prev => prev.filter(msg => !msg.isTyping));
        
        let botResponse = '';
        if (query.includes('remedies')) {
          botResponse = 'I can suggest natural Ayurvedic remedies based on your specific condition. What symptoms or health concerns would you like me to address? 🌿';
        } else if (query.includes('symptoms')) {
          botResponse = 'Please describe your symptoms in detail. I\'ll analyze them according to Ayurvedic principles and suggest appropriate remedies. ⚠️ Remember to consult a doctor if symptoms are severe.';
        } else if (query.includes('appointment')) {
          botResponse = 'I can help you book an appointment with qualified Ayurvedic practitioners. Would you like to explore our appointment booking feature on the main site? 📅';
        } else if (query.includes('shops')) {
          botResponse = 'Let me show you nearby Ayurvedic medicine shops and pharmacies. You can also explore our curated shop directory on the main site. 🏬';
        }

        const botMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          content: botResponse,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);

        // Check if user needs to login
        if (queryCount >= 3) {
          setTimeout(() => {
            const loginMessage: Message = {
              id: Date.now().toString() + '_login',
              type: 'bot',
              content: 'To continue using the Ayurvedic Assistant and access personalized recommendations, please login to your account. 🌿',
              timestamp: new Date()
            };
            setMessages(prev => [...prev, loginMessage]);
          }, 1000);
        }
      }, 2000);
    }, 500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
      <Bot className="w-5 h-5 text-primary" />
      <div className="typing-dots">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
      <span className="text-sm text-muted-foreground">Assistant is thinking...</span>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-background/50">
      {/* Quick Options */}
      <div className="p-4 border-b border-border/50">
        <div className="grid grid-cols-2 gap-2">
          {quickOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`
                h-auto p-3 flex flex-col items-center text-center gap-2 
                border-primary/20 hover:border-primary/40 
                bg-gradient-to-br from-background to-secondary/30
                hover:from-secondary/50 hover:to-secondary/70
                transition-all duration-300
              `}
              onClick={option.action}
            >
              <option.icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium leading-tight">
                {option.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] rounded-lg p-3 animate-fade-in
                  ${message.type === 'user' 
                    ? 'bg-gradient-primary text-primary-foreground ml-4' 
                    : 'glass-card mr-4'
                  }
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-2">
                  {message.type === 'bot' && (
                    <Bot className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  )}
                  {message.type === 'user' && (
                    <User className="w-4 h-4 text-primary-foreground mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    {message.isTyping ? (
                      <TypingIndicator />
                    ) : (
                      <>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                          {message.type === 'bot' && message.content.includes('main site') && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs opacity-80 hover:opacity-100"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Visit
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Disclaimer */}
      <div className="px-4 py-2 bg-muted/30 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          ⚠️ Please consult a doctor if symptoms are severe.
        </p>
      </div>
    </div>
  );
};

export default ChatbotBody;