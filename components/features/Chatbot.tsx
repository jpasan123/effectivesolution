'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const predefinedQA = [
  { question: "What is Effective Solution?", answer: "Effective Solution is a company that provides innovative tech solutions to businesses." },
  { question: "What services do you offer?", answer: "We offer web development, mobile app development, and cloud solutions." },
  { question: "Where are you located?", answer: "We are located in San Francisco, California." },
  { question: "How can I contact you?", answer: "You can contact us via email at contact@effectivesolution.com or call us at (123) 456-7890." },
  { question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9 AM to 6 PM." },
  { question: "Do you offer customer support?", answer: "Yes, we offer 24/7 customer support through our website and phone." },
  { question: "Can I get a free consultation?", answer: "Yes, we offer a free initial consultation to understand your needs." },
  { question: "What industries do you serve?", answer: "We serve a variety of industries including healthcare, finance, and retail." },
  { question: "Do you have any case studies?", answer: "Yes, you can find our case studies on our website under the 'Case Studies' section." },
  { question: "How long have you been in business?", answer: "We have been in business for over 10 years, providing top-notch tech solutions." }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const responseMessage = predefinedQA.find(qa => qa.question.toLowerCase() === userMessage.toLowerCase())?.answer || "Sorry, I don't have an answer for that question.";
      setMessages(prev => [...prev, { role: 'assistant', content: responseMessage }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-24 z-50 rounded-full shadow-lg"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 z-50 w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">Effective AI Assisitant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <span className="animate-pulse">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}