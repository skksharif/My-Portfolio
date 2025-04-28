import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { userData } from "./user"; // Import user data
import "./ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey! Ask me anything about Shaik Khasim Sharif 👨‍💻" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

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
            `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
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

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-header">
        <h3>Chat with SharifBot</h3>
      </div>
      <div className="chatbot-messages-container">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div
              className="message-bubble"
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="message-bubble typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Shaik Khasim Sharif..."
          className="chatbot-input-field"
        />
        <button onClick={sendMessage} className="chatbot-send-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
