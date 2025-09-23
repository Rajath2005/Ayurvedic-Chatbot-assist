import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ChatbotHeader from './ChatbotHeader';
import ChatbotBody from './ChatbotBody';
import ChatbotFooter from './ChatbotFooter';

interface ChatbotWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotWindow: React.FC<ChatbotWindowProps> = ({ isOpen, onClose }) => {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const window = windowRef.current;
    if (!window) return;

    if (isOpen) {
      gsap.set(window, { 
        scale: 0.8, 
        opacity: 0, 
        y: 100,
        display: 'flex'
      });
      
      gsap.to(window, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(window, {
        scale: 0.8,
        opacity: 0,
        y: 100,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(window, { display: 'none' });
        }
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={windowRef}
      className="chatbot-window flex-col max-w-sm w-full max-h-[80vh] hidden z-40"
      style={{ display: 'none' }}
    >
      <ChatbotHeader onClose={onClose} />
      <ChatbotBody />
      <ChatbotFooter />
    </div>
  );
};

export default ChatbotWindow;