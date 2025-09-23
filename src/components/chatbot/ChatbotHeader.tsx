import React from 'react';
import { X, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import chatbotIcon from '@/assets/ayur-chatbot-icon.png';

interface ChatbotHeaderProps {
  onClose: () => void;
}

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ onClose }) => {
  return (
    <div className="relative bg-gradient-primary p-4 text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-8 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-6 right-12 w-8 h-8 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-2 left-16 w-4 h-4 bg-primary-foreground/20 rounded-full"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <img 
              src={chatbotIcon} 
              alt="Ayurvedic AI" 
              className="w-8 h-8 object-contain animate-pulse"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Ayurvedic AI Assistant</h3>
            <p className="text-xs opacity-90">Powered by Gemini AI & Ayurveda 🌿</p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={onClose}
            title="Close"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotHeader;