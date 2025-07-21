import React from 'react';
import { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowTerminal(true);
    }, 100);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showTerminal ? 'opacity-100' : 'opacity-0'}`}>
      <Terminal />
    </div>
  );
}

export default App;