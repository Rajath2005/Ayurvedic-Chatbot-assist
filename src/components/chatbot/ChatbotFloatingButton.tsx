import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, Leaf } from 'lucide-react';
import chatbotIcon from '@/assets/ayur-chatbot-icon.png';

interface ChatbotFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatbotFloatingButton: React.FC<ChatbotFloatingButtonProps> = ({ onClick, isOpen }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const tooltip = tooltipRef.current;
    const icon = iconRef.current;

    if (!button || !tooltip || !icon) return;

    // Initial animations
    gsap.set(tooltip, { opacity: 0, x: 20, scale: 0.8 });
    gsap.set(button, { scale: 0 });
    
    // Button entrance animation
    gsap.to(button, {
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    // Floating animation
    gsap.to(button, {
      y: -8,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Icon rotation animation
    gsap.to(icon, {
      rotation: 360,
      duration: 8,
      ease: "none",
      repeat: -1
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(tooltip, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(tooltip, {
        opacity: 0,
        x: 20,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="glass-card whitespace-nowrap text-sm font-medium text-foreground">
          Hello, I'm your Ayurvedic Assistant 🌿
        </div>
        <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary/20 border-y-8 border-y-transparent"></div>
      </div>

      {/* Main Button */}
      <button
        ref={buttonRef}
        onClick={onClick}
        className={`
          relative w-16 h-16 rounded-full border-2 border-primary/30 
          bg-gradient-primary shadow-floating hover:shadow-glow
          transition-all duration-300 group overflow-hidden
          ${isOpen ? 'scale-95' : ''}
        `}
        aria-label="Open Ayurvedic AI Assistant"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-healing opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
        
        {/* Icon container */}
        <div ref={iconRef} className="relative z-10 w-full h-full flex items-center justify-center">
          {isOpen ? (
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <img 
                src={chatbotIcon} 
                alt="Ayurvedic Assistant" 
                className="w-8 h-8 object-contain opacity-90"
              />
            </div>
          )}
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-75"></div>
        
        {/* Sparkle particles */}
        <div className="absolute -inset-1">
          <div className="absolute top-1 right-2 w-1 h-1 bg-accent rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-2 left-1 w-1 h-1 bg-ayur-gold rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-primary-glow rounded-full animate-pulse delay-500"></div>
        </div>
      </button>
    </div>
  );
};

export default ChatbotFloatingButton;