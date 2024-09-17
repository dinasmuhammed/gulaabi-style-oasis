import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our team will get back to you soon!", isBot: true }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-[#FF1493] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Gulaabi Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <MessageSquare className="h-6 w-6" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.isBot ? 'bg-gray-200' : 'bg-[#FFB6C1] text-white'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow mr-2"
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          className="bg-[#FF1493] hover:bg-[#FF69B4] text-white rounded-full p-4"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;