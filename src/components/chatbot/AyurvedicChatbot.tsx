import React, { useState, useEffect } from 'react';
import ChatbotFloatingButton from './ChatbotFloatingButton';
import ChatbotWindow from './ChatbotWindow';

const AyurvedicChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.chatbot-window') && !target.closest('.chatbot-float-btn')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <ChatbotFloatingButton onClick={handleToggle} isOpen={isOpen} />
      <ChatbotWindow isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default AyurvedicChatbot;