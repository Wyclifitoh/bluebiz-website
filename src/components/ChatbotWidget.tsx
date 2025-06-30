import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, HelpCircle } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m the BlueBiz Kenya assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    'How do I join BlueBiz Kenya?',
    'What training programs do you offer?',
    'How can I access funding?',
    'What counties do you serve?',
    'Is there a cost to join?'
  ];

  const botResponses = {
    'how do i join bluebiz kenya': 'To join BlueBiz Kenya, simply fill out our registration form on the "Join Us" page. It\'s completely free and takes about 10-15 minutes. We\'ll review your application within 48 hours and contact you for a welcome call.',
    'what training programs do you offer': 'We offer comprehensive training including business plan development, financial literacy, digital marketing, customer service, leadership skills, and blue economy-specific training. All materials are available online and through workshops.',
    'how can i access funding': 'We connect you with various funding sources including angel investors, microfinance institutions, government grants, and our Challenge Fund. We also help you prepare applications and pitches.',
    'what counties do you serve': 'BlueBiz Kenya operates in six coastal counties: Mombasa, Kilifi, Kwale, Lamu, Taita-Taveta, and Tana River. We have local offices in each county.',
    'is there a cost to join': 'No, joining BlueBiz Kenya is completely free! All our programs, workshops, mentorship sessions, and resources are provided at no cost to participants.',
    'default': 'Thank you for your question! For detailed information, please visit our FAQ page or contact our support team at jmuchai@tns.org or +254 706 815605. You can also fill out our contact form for personalized assistance.'
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        message: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message) => {
    // Simple keyword matching
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && message.includes(key.toLowerCase())) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Widget Container */}
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-96 h-96 mb-4 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-orange to-secondary-gold p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">BlueBiz Assistant</h3>
                  <p className="text-xs text-orange-100">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={toggleWidget}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.type === 'user' ? 'bg-primary-orange text-white' : 'bg-white text-primary-orange border border-gray-200'
                  }`}>
                    {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-primary-orange text-white rounded-br-sm shadow-md' 
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-md border border-gray-100'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-xs">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
                    <Bot className="w-4 h-4 text-primary-orange" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-md border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 bg-gray-50">
              <div className="text-xs text-gray-500 mb-2 font-medium">Quick questions:</div>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-white text-gray-600 py-2 px-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors border border-gray-200 font-medium"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-primary-orange text-white p-2 rounded-xl hover:bg-secondary-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleWidget}
        className={`w-14 h-14 bg-gradient-to-r from-primary-orange to-secondary-gold text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'rotate-0' : 'hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default ChatbotWidget;