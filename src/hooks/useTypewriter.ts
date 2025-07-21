import { useState, useEffect } from 'react';

export const useTypewriter = (
  text: string | string[],
  speed: number = 50,
  startDelay: number = 0
) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    setCurrentIndex(0);

    const textToType = Array.isArray(text) ? text.join('\n') : text;
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex >= textToType.length) {
            clearInterval(interval);
            setIsComplete(true);
            return prevIndex;
          }
          
          setDisplayText(textToType.slice(0, prevIndex + 1));
          return prevIndex + 1;
        });
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
};