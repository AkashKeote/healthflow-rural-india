
// Global variables
let isListening = false;
let recognition;
let isLoading = false;

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeChatbot();
    setupSpeechRecognition();
    setInitialTimestamp();
});

function initializeChatbot() {
    const chatbotContent = document.getElementById('chatbot-content');
    chatbotContent.style.maxHeight = chatbotContent.scrollHeight + 'px';
    
    // Set up Enter key handling for textarea
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

function setInitialTimestamp() {
    const timestamp = document.getElementById('initial-timestamp');
    if (timestamp) {
        timestamp.textContent = new Date().toLocaleTimeString('hi-IN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}

function toggleChatbot() {
    const content = document.getElementById('chatbot-content');
    const icon = document.getElementById('toggle-icon');
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '▼';
        icon.classList.remove('rotated');
    } else {
        content.classList.add('collapsed');
        content.style.maxHeight = '0';
        icon.textContent = '▲';
        icon.classList.add('rotated');
    }
}

function selectQuickQuestion(question) {
    const userInput = document.getElementById('user-input');
    userInput.value = question;
    userInput.focus();
}

function setupSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'hi-IN'; // Default to Hindi, but will detect automatically
        
        recognition.onstart = function() {
            isListening = true;
            const micBtn = document.getElementById('mic-btn');
            micBtn.classList.add('recording');
            micBtn.textContent = '🛑';
        };
        
        recognition.onend = function() {
            isListening = false;
            const micBtn = document.getElementById('mic-btn');
            micBtn.classList.remove('recording');
            micBtn.textContent = '🎤';
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            const userInput = document.getElementById('user-input');
            userInput.value = transcript;
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            isListening = false;
            const micBtn = document.getElementById('mic-btn');
            micBtn.classList.remove('recording');
            micBtn.textContent = '🎤';
        };
    }
}

function toggleMicrophone() {
    if (!recognition) {
        alert('Speech recognition is not supported in this browser.');
        return;
    }
    
    if (isListening) {
        recognition.stop();
    } else {
        recognition.start();
    }
}

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (!message || isLoading) return;
    
    // Add user message to chat
    addMessageToChat('user', message);
    userInput.value = '';
    isLoading = true;
    updateSendButton();
    
    // Show loading indicator
    showLoadingMessage();
    
    try {
        console.log('Sending message to chatbot API...');
        console.log('Request payload:', { message: message, language: 'multi' });
        
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch('https://chatbot-xi-kohl.vercel.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': window.location.origin,
            },
            signal: controller.signal,
            body: JSON.stringify({
                message: message,
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
        
        // Remove loading message and add bot response
        removeLoadingMessage();
        addMessageToChat('bot', botResponse);
        
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
        
        // Test API connectivity
        console.log('Testing API connectivity...');
        fetch('https://chatbot-xi-kohl.vercel.app/api/chat', { method: 'HEAD' })
            .then(response => console.log('HEAD request result:', response.status))
            .catch(headError => console.log('HEAD request failed:', headError));
        
        removeLoadingMessage();
        addMessageToChat('bot', errorMessage);
        
    } finally {
        isLoading = false;
        updateSendButton();
    }
}

function addMessageToChat(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const timestamp = new Date().toLocaleTimeString('hi-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const speakButton = sender === 'bot' ? 
        '<button class="speak-btn" onclick="speakMessage(this)" title="Listen">🔊</button>' : '';
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <span class="timestamp">${timestamp}</span>
            ${speakButton}
        </div>
    `;
    
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showLoadingMessage() {
    const chatWindow = document.getElementById('chat-window');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot-message loading-message';
    loadingDiv.id = 'loading-message';
    
    loadingDiv.innerHTML = `
        <div class="message-content">
            <div class="loading-dots">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
        </div>
    `;
    
    chatWindow.appendChild(loadingDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeLoadingMessage() {
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

function updateSendButton() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    
    sendBtn.disabled = isLoading || !userInput.value.trim();
}

function speakMessage(button) {
    const messageContent = button.closest('.message-content');
    const messageText = messageContent.querySelector('p').textContent;
    
    if ('speechSynthesis' in window) {
        // Stop any ongoing speech
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(messageText);
        
        // Try to set appropriate language based on content
        if (/[\u0900-\u097F]/.test(messageText)) {
            utterance.lang = 'hi-IN'; // Hindi
        } else {
            utterance.lang = 'en-US'; // English
        }
        
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        utterance.onstart = function() {
            button.textContent = '🔇';
            button.disabled = true;
        };
        
        utterance.onend = function() {
            button.textContent = '🔊';
            button.disabled = false;
        };
        
        utterance.onerror = function() {
            button.textContent = '🔊';
            button.disabled = false;
        };
        
        speechSynthesis.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in this browser.');
    }
}

// Update send button state when user types
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('input', updateSendButton);
});
