
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, Mic, Volume2 } from 'lucide-react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { 
      from: "bot", 
      text: "नमस्ते! मैं आपकी स्वास्थ्य सहायक हूं। आप हिंदी, अंग्रेजी या मैथिली में प्रश्न पूछ सकते हैं। | Hello! I'm your health assistant. You can ask questions in Hindi, English, or Maithili.",
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const healthQuestions = [
    "मुझे बुखार है, क्या करूं? | I have fever, what to do?",
    "बच्चों के टीकाकरण की जानकारी | Information about child vaccination",
    "पेट दर्द के लिए घरेलू उपाय | Home remedies for stomach pain",
    "मधुमेह के लक्षण क्या हैं? | What are diabetes symptoms?",
    "उच्च रक्तचाप का इलाज | Treatment for high blood pressure"
  ];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input, timestamp: new Date() };
    setMessages((msgs) => [...msgs, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      console.log('Attempting to connect to chatbot API...');
      console.log('Request payload:', { message: currentInput, language: 'multi' });
      
      // Try the API call with additional headers and timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('https://chatbot-xi-kohl.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin,
          'Access-Control-Allow-Origin': '*',
        },
        signal: controller.signal,
        body: JSON.stringify({
          message: currentInput,
          language: 'multi'
        }),
      });

      clearTimeout(timeoutId);
      console.log('Response received:', response.status, response.statusText);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      console.log('Response content type:', contentType);
      
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      
      console.log('Chatbot response data:', data);
      
      let botResponse = "मुझे खुशी है कि आपने प्रश्न पूछा। कृपया अधिक विस्तार से बताएं या निकटतम PHC से संपर्क करें। | I'm glad you asked. Please provide more details or contact your nearest PHC.";
      
      if (typeof data === 'string') {
        botResponse = data;
      } else if (data && typeof data === 'object') {
        botResponse = data.response || data.message || data.reply || data.answer || JSON.stringify(data);
      }
      
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: botResponse, timestamp: new Date() }
      ]);
      
    } catch (error) {
      console.error('Detailed error info:', error);
      
      let errorMessage = "क्षमा करें, चैटबॉट सेवा अभी उपलब्ध नहीं है। | Sorry, the chatbot service is currently unavailable.";
      
      if (error instanceof Error) {
        console.log('Error name:', error.name);
        console.log('Error message:', error.message);
        
        if (error.name === 'AbortError') {
          errorMessage = "अनुरोध का समय समाप्त हो गया। कृपया फिर से कोशिश करें। | Request timed out. Please try again.";
        } else if (error.message === 'Failed to fetch') {
          errorMessage = "कनेक्शन की समस्या है। कृपया अपना इंटरनेट कनेक्शन जांचें या बाद में कोशिश करें। | Connection issue. Please check your internet connection or try later.";
        } else if (error.message.includes('CORS')) {
          errorMessage = "सर्वर कनेक्शन की समस्या है। | Server connection issue.";
        }
      }
      
      // Add a test message to check if the API is reachable
      console.log('Testing API connectivity...');
      fetch('https://chatbot-xi-kohl.vercel.app/api/chat', { method: 'HEAD' })
        .then(response => console.log('HEAD request result:', response.status))
        .catch(headError => console.log('HEAD request failed:', headError));
      
      setMessages((msgs) => [
        ...msgs,
        { 
          from: "bot", 
          text: errorMessage, 
          timestamp: new Date() 
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-100 to-green-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <MessageCircle className="h-6 w-6" />
            स्वास्थ्य बॉट | HealthBot – AI FAQ & Triage Assistant
          </CardTitle>
          <CardDescription>
            AI-powered multilingual health assistant for rural communities
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">त्वरित प्रश्न | Quick Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {healthQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleQuickQuestion(question)}
                className="text-left justify-start h-auto p-3 whitespace-normal"
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card>
        <CardContent className="p-0">
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  msg.from === "bot"
                    ? "bg-white text-gray-700 shadow-md"
                    : "bg-blue-500 text-white shadow-md"
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-2 opacity-70">
                    {msg.timestamp.toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  {msg.from === "bot" && (
                    <Button variant="ghost" size="sm" className="mt-2 p-1 h-auto">
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-lg shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <form className="flex gap-2" onSubmit={handleSend}>
              <Button type="button" variant="outline" size="icon" className="shrink-0">
                <Mic className="h-4 w-4" />
              </Button>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="स्वास्थ्य संबंधी प्रश्न पूछें... | Ask a health question..."
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !input.trim()} className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex justify-center mt-2">
              <p className="text-xs text-gray-500">
                🎤 Voice support • 🌐 Multilingual • ⚠️ For medical emergencies, call 108
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <p className="text-sm text-yellow-800">
            <strong>अस्वीकरण | Disclaimer:</strong> यह केवल सामान्य जानकारी के लिए है। गंभीर स्वास्थ्य समस्याओं के लिए डॉक्टर से मिलें। | This is for general information only. For serious health issues, consult a doctor.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatWindow;
