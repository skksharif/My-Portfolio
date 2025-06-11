import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { userData } from "./user";

const ChatBot = ({ isDarkMode }) => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey! Ask me anything about Shaik Khasim Sharif 👨‍💻" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Synonym normalization for categories
  const normalizeKeywords = (question) => {
    const synonymMapping = {
      education: [
        "education",
        "college",
        "study",
        "academic background",
        "degree",
        "schooling",
        "university",
        "graduation",
        "academic history",
        "educational qualifications",
        "degree program",
      ],
      skills: [
        "skills",
        "technologies",
        "tech",
        "programming languages",
        "tools",
        "technical skills",
        "technological expertise",
        "development languages",
        "coding skills",
        "tech stack",
      ],
      experience: [
        "experience",
        "internship",
        "work",
        "professional background",
        "job history",
        "work experience",
        "roles",
        "work experience history",
        "employment",
        "previous roles",
      ],
      projects: [
        "projects",
        "portfolio",
        "work done",
        "developed applications",
        "created projects",
        "project work",
        "personal projects",
        "built projects",
        "previous work",
      ],
      certifications: [
        "certifications",
        "certificates",
        "courses",
        "achievements",
        "credentials",
        "professional courses",
        "training",
        "certified courses",
        "qualification certificates",
      ],
      hobbies: [
        "hobbies",
        "interests",
        "activities",
        "leisure activities",
        "passions",
        "favorite pastimes",
        "free time activities",
      ],
      socialLinks: [
        "social media",
        "social links",
        "profiles",
        "contact links",
        "online presence",
        "github",
        "linkedin",
      ],
      address: [
        "address",
        "location",
        "where you are from",
        "residence",
        "city",
        "place of residence",
        "hometown",
      ],
    };

    const q = question.toLowerCase();
    let matchedContext = {};

    // Match different categories based on question
    Object.entries(synonymMapping).forEach(([key, synonyms]) => {
      if (synonyms.some((synonym) => q.includes(synonym))) {
        matchedContext[key] = userData[key];
      }
    });

    // Handle individual project requests
    if (q.includes("project") || q.includes("portfolio")) {
      const projectName = q.match(/"(.*?)"/); // Look for project names in quotes
      if (projectName) {
        const project = userData.projects.find((p) =>
          p.toLowerCase().includes(projectName[1].toLowerCase())
        );
        if (project) {
          matchedContext.project = project;
        } else {
          matchedContext.project =
            "Sorry, I couldn't find a project with that name.";
        }
      } else {
        matchedContext.projects = userData.projects;
      }
    }

    // Handle social media links (GitHub, LinkedIn, Twitter)
    if (q.includes("github")) {
      matchedContext.socialLinks = `My GitHub profile: ${userData.socialLinks.github}`;
    } else if (q.includes("linkedin")) {
      matchedContext.socialLinks = `My LinkedIn profile: ${userData.socialLinks.linkedin}`;
    } else if (q.includes("twitter")) {
      matchedContext.socialLinks = `My Twitter profile: ${userData.socialLinks.twitter}`;
    }

    if (Object.keys(matchedContext).length === 0) {
      matchedContext = userData; // Return all user data for general questions
    }

    return matchedContext;
  };

  const handleCasualQuestions = (input) => {
    const casualQuestions = [
      "hello",
      "hi",
      "how are you",
      "what's up",
      "hey",
      "good morning",
      "good evening",
    ];

    if (
      casualQuestions.some((greeting) => input.toLowerCase().includes(greeting))
    ) {
      return "Hey there! 😊 How can I assist you today?";
    }

    return null; // No casual greeting found
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Handle casual questions
    const casualResponse = handleCasualQuestions(input);
    if (casualResponse) {
      setMessages([...newMessages, { role: "bot", text: casualResponse }]);
      setLoading(false);
      return;
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const context = normalizeKeywords(input);

      const prompt = `
  Here is some information about Shaik Khasim Sharif:
  
  ${Object.entries(context)
    .map(
      ([key, value]) =>
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${
          Array.isArray(value) ? value.join(", ") : value
        }`
    )
    .join("\n")}
  
  Answer the following question based only on that info:
  "${input}"
  `;

      const result = await model.generateContent(prompt);
      let reply = result.response.text();

      // Format reply content
      if (!reply || reply === "") {
        setMessages([
          ...newMessages,
          {
            role: "bot",
            text: "I don't know the answer to that. Can you ask something else?",
          },
        ]);
      } else {
        // Check if the response contains any URLs and convert them to hyperlinks
        const formattedReply = reply.replace(
          /(https?:\/\/[^\s]+)/g,
          (url) =>
            `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 underline">${url}</a>`
        );

        setMessages([...newMessages, { role: "bot", text: formattedReply }]);
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "bot",
          text: "I'm sorry, I couldn't understand that. Can you please rephrase?",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`w-full h-full rounded-2xl flex flex-col overflow-hidden font-sans transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'
    }`}>
      {/* Header */}
      <div className={`${
        isDarkMode 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
          : 'bg-gradient-to-r from-purple-500 to-cyan-500'
      } text-white p-3 text-center border-b border-white/10 transition-all duration-300`}>
        <h3 className="text-lg font-semibold">Chat with SharifBot</h3>
        <p className="text-xs opacity-80 mt-1">Ask me anything about Sharif!</p>
      </div>

      {/* Messages Container */}
      <div className={`flex-1 p-3 overflow-y-auto scrollbar-thin ${
        isDarkMode 
          ? 'scrollbar-thumb-purple-600 scrollbar-track-gray-700' 
          : 'scrollbar-thumb-purple-400 scrollbar-track-gray-200'
      } transition-all duration-300`}>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex mb-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed break-words transition-all duration-300 hover:scale-[1.02] ${
                msg.role === 'user' 
                  ? isDarkMode
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-md shadow-lg'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-md shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-700/80 text-gray-100 rounded-bl-md shadow-lg border border-gray-600/30'
                    : 'bg-white/90 text-gray-800 rounded-bl-md shadow-lg border border-gray-200/50'
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-3">
            <div className={`flex gap-1 p-3 rounded-2xl ${
              isDarkMode ? 'bg-gray-700/80' : 'bg-white/90'
            } shadow-lg animate-fade-in`}>
              <span className={`w-2 h-2 rounded-full animate-bounce ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              }`} style={{ animationDelay: '0s' }}></span>
              <span className={`w-2 h-2 rounded-full animate-bounce ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              }`} style={{ animationDelay: '0.2s' }}></span>
              <span className={`w-2 h-2 rounded-full animate-bounce ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
              }`} style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div className={`flex p-3 border-t transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/50 border-gray-700/30' 
          : 'bg-white/50 border-gray-200/30'
      }`}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about Shaik Khasim Sharif..."
          className={`flex-1 p-2.5 px-4 border-none rounded-full text-sm outline-none transition-all duration-300 focus:ring-2 ${
            isDarkMode
              ? 'bg-gray-700/80 text-gray-100 placeholder-gray-400 focus:ring-purple-500/50 focus:bg-gray-700'
              : 'bg-white/80 text-gray-800 placeholder-gray-500 focus:ring-purple-400/50 focus:bg-white'
          }`}
          disabled={loading}
        />
        <button 
          onClick={sendMessage} 
          disabled={loading || !input.trim()}
          className={`ml-2 w-10 h-10 border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
            isDarkMode
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500'
              : 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400'
          } shadow-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;