  import React, { useState, useEffect, useRef } from 'react';
  import { FaRegCalendarAlt, FaRegClock, FaCalculator, FaAddressBook, FaCloudSun, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import icons
  import * as math from 'mathjs'; // Correct import statement

  const responses = {
    hello: "Hi there! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm doing well! How about you?",
    "what is your name": "I am a friendly chat bot!",
    "bye": "Goodbye! Have a great day!",
    "what time is it": () => new Date().toLocaleTimeString(),
    "what's the date": () => new Date().toLocaleDateString(),
    "open calculator": "I can't open apps directly, but you can use the calculator app on your device.",
    "open contacts": "I can't open contacts directly, but you can access your contacts app on your device.",
    "what is the weather": "I can't check the weather directly, but you can use a weather app or website for that.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what is the meaning of life": "The meaning of life is a question philosophers have debated for centuries. Some say it's about finding happiness and fulfillment.",
    "open youtube": () => window.open('https://www.youtube.com', '_blank'),
    "open facebook": () => window.open('https://www.facebook.com', '_blank'),
    "open twitter": () => window.open('https://www.twitter.com', '_blank'),
    "open google": () => window.open('https://www.google.com', '_blank'),
    "open linkedin": () => window.open('https://www.linkedin.com', '_blank'),
    "open instagram": () => window.open('https://www.instagram.com', '_blank'),
    "open pinterest": () => window.open('https://www.pinterest.com', '_blank'),
    "open reddit": () => window.open('https://www.reddit.com', '_blank'),
    "open github": () => window.open('https://www.github.com', '_blank'),
    "open stack overflow": () => window.open('https://stackoverflow.com', '_blank'),
    "open quora": () => window.open('https://www.quora.com', '_blank'),
    "open news": () => window.open('https://news.google.com', '_blank'),
    "open weather": () => window.open('https://weather.com', '_blank'),
    "open amazon": () => window.open('https://www.amazon.com', '_blank'),
    "open ebay": () => window.open('https://www.ebay.com', '_blank'),
    "open imdb": () => window.open('https://www.imdb.com', '_blank'),
    "open wikipedia": () => window.open('https://www.wikipedia.org', '_blank'),
    "open spotify": () => window.open('https://www.spotify.com', '_blank'),
    "open netflix": () => window.open('https://www.netflix.com', '_blank'),
    "open apple": () => window.open('https://www.apple.com', '_blank'),
    "open microsoft": () => window.open('https://www.microsoft.com', '_blank'),
    "open cnn": () => window.open('https://www.cnn.com', '_blank'),
    "open bbc": () => window.open('https://www.bbc.com', '_blank'),
    "open forbes": () => window.open('https://www.forbes.com', '_blank'),
    "open the guardian": () => window.open('https://www.theguardian.com', '_blank'),
    "open business insider": () => window.open('https://www.businessinsider.com', '_blank'),
    "open huffpost": () => window.open('https://www.huffpost.com', '_blank'),
    "open nyt": () => window.open('https://www.nytimes.com', '_blank'),
    "open washington post": () => window.open('https://www.washingtonpost.com', '_blank'),
    "open the independent": () => window.open('https://www.independent.co.uk', '_blank'),
    "open al jazeera": () => window.open('https://www.aljazeera.com', '_blank'),
    
    "open npr": () => window.open('https://www.npr.org', '_blank'),
    "open bbc sport": () => window.open('https://www.bbc.com/sport', '_blank'),
    "open espn": () => window.open('https://www.espn.com', '_blank'),
    "open sky sports": () => window.open('https://www.skysports.com', '_blank'),
    "open bleacher report": () => window.open('https://bleacherreport.com', '_blank'),
    "open sports illustrated": () => window.open('https://www.si.com', '_blank'),
    "open cnbc": () => window.open('https://www.cnbc.com', '_blank'),
    "open bloomberg": () => window.open('https://www.bloomberg.com', '_blank'),
    "open marketwatch": () => window.open('https://www.marketwatch.com', '_blank'),
    "open reuters": () => window.open('https://www.reuters.com', '_blank'),
    
    "open techcrunch": () => window.open('https://techcrunch.com', '_blank'),
    "open wired": () => window.open('https://www.wired.com', '_blank'),
    "open arstechnica": () => window.open('https://arstechnica.com', '_blank'),
    "open the verge": () => window.open('https://www.theverge.com', '_blank'),
    "open gizmodo": () => window.open('https://gizmodo.com', '_blank'),
    "open engadget": () => window.open('https://www.engadget.com', '_blank'),
    "open tom's hardware": () => window.open('https://www.tomshardware.com', '_blank'),
    "open pcmag": () => window.open('https://www.pcmag.com', '_blank'),
    "open howto geek": () => window.open('https://www.howtogeek.com', '_blank'),
    "open lifehacker": () => window.open('https://lifehacker.com', '_blank'),
    
    "open myfitnesspal": () => window.open('https://www.myfitnesspal.com', '_blank'),
    "open strava": () => window.open('https://www.strava.com', '_blank'),
    "open nike": () => window.open('https://www.nike.com', '_blank'),
    "open under armour": () => window.open('https://www.underarmour.com', '_blank'),
    "open adidas": () => window.open('https://www.adidas.com', '_blank'),
    "open reebok": () => window.open('https://www.reebok.com', '_blank'),
    "open fitbit": () => window.open('https://www.fitbit.com', '_blank'),
    "open peloton": () => window.open('https://www.onepeloton.com', '_blank'),
    "open headspace": () => window.open('https://www.headspace.com', '_blank'),
    "open calm": () => window.open('https://www.calm.com', '_blank'),
    
    "open coursera": () => window.open('https://www.coursera.org', '_blank'),
    "open edx": () => window.open('https://www.edx.org', '_blank'),
    "open udacity": () => window.open('https://www.udacity.com', '_blank'),
    "open khan academy": () => window.open('https://www.khanacademy.org', '_blank'),
    "open duolingo": () => window.open('https://www.duolingo.com', '_blank'),
    "open skillshare": () => window.open('https://www.skillshare.com', '_blank'),
    "open linkedin learning": () => window.open('https://www.linkedin.com/learning', '_blank'),
    "open pluralsight": () => window.open('https://www.pluralsight.com', '_blank'),
    "open futurelearn": () => window.open('https://www.futurelearn.com', '_blank'),
    "open treehouse": () => window.open('https://teamtreehouse.com', '_blank'),

    "open myfitnesspal": () => window.open('https://www.myfitnesspal.com', '_blank'),
    "open strava": () => window.open('https://www.strava.com', '_blank'),
    "open nike": () => window.open('https://www.nike.com', '_blank'),
    "open under armour": () => window.open('https://www.underarmour.com', '_blank'),
    "open adidas": () => window.open('https://www.adidas.com', '_blank'),
    "open reebok": () => window.open('https://www.reebok.com', '_blank'),
    "open fitbit": () => window.open('https://www.fitbit.com', '_blank'),
    "open peloton": () => window.open('https://www.onepeloton.com', '_blank'),
    "open headspace": () => window.open('https://www.headspace.com', '_blank'),
    "open calm": () => window.open('https://www.calm.com', '_blank'),
    
    "open coursera": () => window.open('https://www.coursera.org', '_blank'),
    "open edx": () => window.open('https://www.edx.org', '_blank'),
    "open udacity": () => window.open('https://www.udacity.com', '_blank'),
    "open khan academy": () => window.open('https://www.khanacademy.org', '_blank'),
    "open duolingo": () => window.open('https://www.duolingo.com', '_blank'),
    "open skillshare": () => window.open('https://www.skillshare.com', '_blank'),
    "open linkedin learning": () => window.open('https://www.linkedin.com/learning', '_blank'),
    "open pluralsight": () => window.open('https://www.pluralsight.com', '_blank'),
    "open futurelearn": () => window.open('https://www.futurelearn.com', '_blank'),
    "open treehouse": () => window.open('https://teamtreehouse.com', '_blank'),
    
    "open angellist": () => window.open('https://angel.co', '_blank'),
    "open product hunt": () => window.open('https://www.producthunt.com', '_blank'),
    "open dribbble": () => window.open('https://dribbble.com', '_blank'),
    "open behance": () => window.open('https://www.behance.net', '_blank'),
    "open deviantart": () => window.open('https://www.deviantart.com', '_blank'),
    "open 500px": () => window.open('https://500px.com', '_blank'),
    "open flickr": () => window.open('https://www.flickr.com', '_blank'),
    "open unsplash": () => window.open('https://unsplash.com', '_blank'),
    "open pexels": () => window.open('https://www.pexels.com', '_blank'),
    "open pixabay": () => window.open('https://pixabay.com', '_blank'),
    
    "open canva": () => window.open('https://www.canva.com', '_blank'),
    "open adobe spark": () => window.open('https://spark.adobe.com', '_blank'),
    "open venngage": () => window.open('https://venngage.com', '_blank'),
    "open visme": () => window.open('https://www.visme.co', '_blank'),
    "open infogram": () => window.open('https://infogram.com', '_blank'),
    "open piktochart": () => window.open('https://piktochart.com', '_blank'),
    "open tableau": () => window.open('https://www.tableau.com', '_blank'),
    "open google sheets": () => window.open('https://sheets.google.com', '_blank'),
    "open microsoft excel": () => window.open('https://www.microsoft.com/en-us/microsoft-365/excel', '_blank'),
    "open airtable": () => window.open('https://airtable.com', '_blank'),
    "open adobe": () => window.open('https://www.adobe.com', '_blank'),
    "open zoom": () => window.open('https://zoom.us', '_blank'),
    "open slack": () => window.open('https://slack.com', '_blank'),
    "open paypal": () => window.open('https://www.paypal.com', '_blank'),
    "what's your favorite color": "I don't have personal preferences, but I think blue is a nice color!",
    "tell me a fact": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "what is the capital of France": "The capital of France is Paris.",
    "who is the president of the united states": "As of 2024, the President of the United States is Joe Biden.",
    "what's the latest news": "I don't have real-time news, but you can check news websites for the latest updates.",
    "what's your favorite movie": "I don't watch movies, but many people enjoy classics like 'The Shawshank Redemption' or 'The Godfather'.",
    "what's the time in london": () => new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }),
    "how do you say hello in spanish": "In Spanish, you say 'Hola' to greet someone.",
    "who won the last world cup": "As of 2024, the most recent FIFA World Cup was won by France in 2018. The next tournament will be in 2022.",
    "can you help me with my homework": "I can try! What subject do you need help with?",
    "what's the distance to the moon": "The average distance to the moon is about 238,855 miles (384,400 kilometers).",
    "who wrote 'To Kill a Mockingbird'": "The novel 'To Kill a Mockingbird' was written by Harper Lee.",
    "what is the square root of 144": "The square root of 144 is 12.",
    "what's the weather like today": "I can't check real-time weather, but you can use a weather app or website for the latest updates.",
    "what's the meaning of 'carpe diem'": "'Carpe diem' is a Latin phrase that means 'seize the day'.",
    "how do you make a cup of tea": "To make a cup of tea, boil water, steep a tea bag in a cup, and then remove the bag. Add milk or sugar if desired.",
    "what's the best way to learn programming": "Practice coding regularly, work on projects, read documentation, and consider taking online courses or tutorials.",
    "what's your favorite book": "I don't read books, but many people enjoy classics like '1984' by George Orwell or 'Pride and Prejudice' by Jane Austen.",
    "who is the CEO of Tesla": "As of 2024, Elon Musk is the CEO of Tesla.",
    "what's the capital of Japan": "The capital of Japan is Tokyo.",
    "what is the currency of the UK": "The currency of the United Kingdom is the British Pound Sterling (GBP).",
    "how tall is the Eiffel Tower": "The Eiffel Tower is approximately 324 meters (1,063 feet) tall.",
    "how do you make a resume": "Include your contact information, a summary statement, work experience, education, skills, and any relevant certifications.",
    "who discovered penicillin": "Penicillin was discovered by Alexander Fleming in 1928.",
    "what's the most popular sport in the world": "Soccer (football) is considered the most popular sport globally.",
    "how many planets are in our solar system": "There are eight planets in our solar system.",
    "what's the best way to stay healthy": "Maintain a balanced diet, exercise regularly, stay hydrated, and get enough sleep.",
    "how do I bake a cake": "Mix flour, sugar, eggs, and other ingredients, pour the batter into a pan, and bake at 350°F (175°C) until done.",
    "what is the largest ocean": "The Pacific Ocean is the largest and deepest ocean on Earth.",
    "who painted the Mona Lisa": "The Mona Lisa was painted by Leonardo da Vinci.",
    "what's the speed of light": "The speed of light in a vacuum is approximately 299,792 kilometers per second (186,282 miles per second).",
    "how do I reset my password": "Typically, you can reset your password by clicking on the 'Forgot password' link on the login page and following the instructions.",
    "who is the author of '1984'": "The author of '1984' is George Orwell.",
    "what's the best way to save money": "Create a budget, reduce unnecessary expenses, and consider saving a portion of your income regularly.",
    "what is the chemical symbol for gold": "The chemical symbol for gold is Au.",
    "who invented the telephone": "The telephone was invented by Alexander Graham Bell.",
    "what's the fastest animal on land": "The cheetah is the fastest land animal, capable of reaching speeds up to 75 miles per hour (120 kilometers per hour).",
    "how does a plane fly": "Planes fly by generating lift with their wings, which overcomes gravity. Thrust from the engines propels them forward.",
    "what's the latest technology trend": "Trends include artificial intelligence, blockchain technology, and advancements in quantum computing.",
    "how do I start a blog": "Choose a platform, select a niche, create content, and promote your blog through social media and SEO techniques.",
    "who is the founder of Microsoft": "Microsoft was founded by Bill Gates and Paul Allen.",
    "what is the tallest building in the world": "As of 2024, the tallest building in the world is the Burj Khalifa in Dubai.",
    "what's the difference between a virus and a bacteria": "Viruses are smaller and require a host cell to replicate, while bacteria are single-celled organisms that can reproduce on their own.",
    "how do I use a map": "Identify your current location and destination, use the map's scale to measure distance, and follow the directions indicated.",
    "what's the best way to learn a new language": "Immerse yourself in the language, practice speaking, listen to native speakers, and use language learning apps or courses.",
    "how do I fix a leaky faucet": "Turn off the water supply, disassemble the faucet, replace worn washers or O-rings, and reassemble it.",
    "what's the capital of Canada": "The capital of Canada is Ottawa.",
    "how do I change a tire": "Jack up the vehicle, remove the lug nuts, replace the tire with a spare, and tighten the lug nuts.",
    "what's the biggest planet in our solar system": "The biggest planet in our solar system is Jupiter.",
    "who wrote 'Pride and Prejudice'": "The novel 'Pride and Prejudice' was written by Jane Austen.",
    "how do I cook rice": "Rinse the rice, add water, and cook it according to the package instructions or using a rice cooker.",
    "what's the most common language in the world": "Mandarin Chinese is the most spoken language in the world by the number of native speakers.",
    "how can I improve my writing skills": "Read regularly, write frequently, seek feedback, and study grammar and style.",
    "what's the best way to manage stress": "Practice relaxation techniques, exercise, maintain a balanced lifestyle, and seek support from friends or professionals.",

  };

  const solveMath = (expression) => {
    try {
      const result = math.evaluate(expression);
      return `The result is ${result}`;
    } catch (error) {
      return "Sorry, I couldn't understand that math expression.";
    }
  };

  const suggestions = [
    { text: "What's the time?", command: "what time is it", icon: <FaRegClock /> },
    { text: "What's the date?", command: "what's the date", icon: <FaRegCalendarAlt /> },
    { text: "Open calculator", command: "open calculator", icon: <FaCalculator /> },
    { text: "Open contacts", command: "open contacts", icon: <FaAddressBook /> },
    { text: "What's the weather?", command: "what is the weather", icon: <FaCloudSun /> },
    { text: "Open YouTube", command: "open youtube", icon: <FaYoutube /> },
    { text: "Open Facebook", command: "open facebook", icon: <FaFacebook /> },
    { text: "Open Twitter", command: "open twitter", icon: <FaTwitter /> },
  ];

  const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);
    const recognitionRef = useRef(null); // For speech recognition

    // Initialize speech synthesis
    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    };

    // Initialize speech recognition
    const startRecognition = () => {
      if (!('webkitSpeechRecognition' in window)) {
        alert("Sorry, your browser does not support speech recognition.");
        return;
      }

      recognitionRef.current = new webkitSpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.continuous = false;

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSendMessage({ preventDefault: () => {} });
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
      };

      recognitionRef.current.start();
    };

    const handleSendMessage = (e) => {
      e.preventDefault();
      if (input.trim() === '') return;

      // Add user message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user' },
      ]);

      // Determine response
      const lowerCaseInput = input.toLowerCase();
      const responseFunc = responses[lowerCaseInput];
      
      let response;
      if (typeof responseFunc === 'function') {
        response = responseFunc();
      } else if (lowerCaseInput.startsWith('solve ')) {
        const mathExpression = input.slice(6); // Remove 'solve ' from the input
        response = solveMath(mathExpression);
      } else {
        response = responses[lowerCaseInput] || "I'm not sure how to respond to that.";
      }

      // Add bot response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: 'ai' },
      ]);

      // Speak the response
      speak(response);

      // Clear input field
      setInput('');
    };

    const handleSuggestionClick = (command) => {
      setInput(command);
      handleSendMessage({ preventDefault: () => {} });
    };

    const handleScroll = () => {
      const chatContainer = chatContainerRef.current;
      const isAtBottom = chatContainer.scrollHeight - chatContainer.scrollTop === chatContainer.clientHeight;
      setIsUserScrolling(!isAtBottom);
    };

    // Scroll to the bottom of the messages container whenever messages change
    useEffect(() => {
      if (!isUserScrolling) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages, isUserScrolling]);

    return (
      <div className="relative flex flex-col h-screen bg-black text-white">
        {/* Header */}
        <header className="p-4 bg-gray-900 shadow-md flex items-center">
          <h1 className="text-xl font-semibold">Chatbot</h1>
          <p className="ml-4 text-sm text-gray-400">Powered by Mendable and Vercel</p>
        </header>

        {/* Chat Container */}
        <main className="flex-1 overflow-hidden flex flex-col">
          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-auto p-4 space-y-4"
            onScroll={handleScroll}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`relative p-4 rounded-lg ${msg.sender === 'ai' ? 'bg-gray-800 text-gray-200' : 'bg-blue-700 text-white'}`}
                >
                  <span className="block font-semibold">{msg.sender === 'ai' ? 'AI' : 'You'}</span>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* This will help in auto-scrolling */}
          </div>

          {/* Suggestions */}
          <div className="bg-gray-900 p-4 border-t border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="flex items-center p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm"
                  onClick={() => handleSuggestionClick(suggestion.command)}
                >
                  {suggestion.icon}
                  <span className="ml-2">{suggestion.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="bg-gray-900 p-4 border-t border-gray-700">
            <form className="flex items-center" onSubmit={handleSendMessage}>
              <input
                className="flex-1 p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="ml-2 p-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white"
                type="submit"
              >
                Send
              </button>
              <button
                type="button"
                className="ml-2 p-3 rounded-md bg-green-600 hover:bg-green-500 text-white"
                onClick={startRecognition}
              >
                🎤
              </button>
            </form>
          </div>
        </main>

        {/* ChatGPT Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/608/790/original/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg" // Example logo URL
            alt="ChatGPT Logo"
            className="w-32 h-32 opacity-20"
          />
        </div>
      </div>
    );
  };

  export default ChatBot;
