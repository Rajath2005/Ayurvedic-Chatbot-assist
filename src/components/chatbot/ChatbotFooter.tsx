import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic, Paperclip, Send } from 'lucide-react';

const ChatbotFooter: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Voice input logic would go here
  };

  return (
    <div className="p-4 bg-background/80 border-t border-border/50">
      <div className="flex items-center space-x-2">
        {/* Voice Input Button */}
        <Button
          variant="outline"
          size="sm"
          className={`
            w-10 h-10 p-0 rounded-full border-primary/30
            ${isRecording 
              ? 'bg-destructive text-destructive-foreground animate-pulse' 
              : 'hover:bg-primary/10 hover:border-primary/50'
            }
          `}
          onClick={handleVoiceInput}
          title="Voice input"
        >
          <Mic className="w-4 h-4" />
        </Button>

        {/* Message Input */}
        <div className="flex-1 relative">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about remedies, symptoms, or appointments..."
            className="
              pr-12 rounded-full border-primary/30 
              bg-secondary/50 focus:bg-background 
              focus:border-primary/60 transition-all duration-300
              placeholder:text-muted-foreground/60
            "
          />
          
          {/* Attach Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 p-0 hover:bg-primary/10"
            title="Attach file"
          >
            <Paperclip className="w-3 h-3" />
          </Button>
        </div>

        {/* Send Button */}
        <Button
          size="sm"
          className={`
            w-10 h-10 p-0 rounded-full bg-gradient-primary
            hover:shadow-glow transition-all duration-300
            ${!message.trim() ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={handleSend}
          disabled={!message.trim()}
          title="Send message"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Input Suggestions */}
      {!message && (
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            'What herbs help with digestion?',
            'I have a headache',
            'Book appointment',
            'Nearby shops'
          ].map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="h-6 px-2 text-xs rounded-full border-primary/20 hover:border-primary/40"
              onClick={() => setMessage(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      )}

      {/* Powered by */}
      <div className="mt-2 text-center">
        <p className="text-xs text-muted-foreground">
          Powered by <span className="text-primary font-medium">Gemini AI</span> & 
          <span className="text-ayur-herbal font-medium"> Ayurveda</span>
        </p>
      </div>
    </div>
  );
};

export default ChatbotFooter;