import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState({
    fonts: false,
    images: false,
    scripts: false,
    styles: false,
    dom: false
  });

  const loadingSteps = [
    'Loading fonts and typography...',
    'Initializing React components...',
    'Loading CSS stylesheets...',
    'Preparing terminal interface...',
    'Loading portfolio data...',
    'Optimizing for your device...',
    'Finalizing user experience...',
    'Terminal ready!'
  ];

  // Check if fonts are loaded
  useEffect(() => {
    const checkFonts = async () => {
      try {
        await document.fonts.ready;
        setLoadingProgress(prev => ({ ...prev, fonts: true }));
      } catch (error) {
        // Fallback after timeout
        setTimeout(() => {
          setLoadingProgress(prev => ({ ...prev, fonts: true }));
        }, 1000);
      }
    };
    checkFonts();
  }, []);

  // Check if DOM is ready
  useEffect(() => {
    const checkDOM = () => {
      if (document.readyState === 'complete') {
        setLoadingProgress(prev => ({ ...prev, dom: true, scripts: true, styles: true }));
      } else {
        const handleLoad = () => {
          setLoadingProgress(prev => ({ ...prev, dom: true, scripts: true, styles: true }));
        };
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    };
    checkDOM();
  }, []);

  // Check for images (if any)
  useEffect(() => {
    const images = document.querySelectorAll('img');
    if (images.length === 0) {
      setLoadingProgress(prev => ({ ...prev, images: true }));
    } else {
      let loadedImages = 0;
      const checkImageLoad = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          setLoadingProgress(prev => ({ ...prev, images: true }));
        }
      };

      images.forEach(img => {
        if (img.complete) {
          checkImageLoad();
        } else {
          img.addEventListener('load', checkImageLoad);
          img.addEventListener('error', checkImageLoad); // Count errors as loaded
        }
      });
    }
  }, []);

  // Progress through steps based on actual loading
  useEffect(() => {
    const progressValues = Object.values(loadingProgress);
    const completedCount = progressValues.filter(Boolean).length;
    const totalSteps = progressValues.length;
    
    // Map completed resources to loading steps
    const targetStep = Math.min(
      Math.floor((completedCount / totalSteps) * (loadingSteps.length - 1)),
      loadingSteps.length - 1
    );

    if (targetStep > currentStep) {
      const timer = setTimeout(() => {
        setCurrentStep(targetStep);
      }, 200);
      return () => clearTimeout(timer);
    }

    // All resources loaded
    if (completedCount === totalSteps && currentStep < loadingSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(loadingSteps.length - 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, currentStep, loadingSteps.length]);

  const { displayText, isComplete: stepComplete } = useTypewriter(
    loadingSteps[currentStep] || '',
    50,
    0
  );

  useEffect(() => {
    // Only complete when we're on the last step and all resources are loaded
    if (stepComplete && currentStep === loadingSteps.length - 1 && Object.values(loadingProgress).every(Boolean)) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onLoadingComplete, 500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stepComplete, currentStep, onLoadingComplete, loadingProgress]);

  // Calculate real progress based on loaded resources
  const resourceProgress = (Object.values(loadingProgress).filter(Boolean).length / Object.values(loadingProgress).length) * 100;
  const stepProgress = ((currentStep + 1) / loadingSteps.length) * 100;
  const progress = Math.max(resourceProgress, stepProgress);

  return (
    <div className="fixed inset-0 bg-gray-900 text-green-400 font-mono flex items-center justify-center z-50">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* ASCII Art Logo */}
        <div className="mb-8 text-xs sm:text-sm text-green-400">
          <pre className="whitespace-pre">
{`
╔═══════════════════════════════════════════════════════════════╗
║  ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗  ║
║  ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║  ║
║     ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║  ║
║     ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║  ║
║     ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
║     ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
║                                                                 ║
║                    PORTFOLIO SYSTEM v2.1                       ║
║                   Shaik Khasim Sharif                          ║
╚═══════════════════════════════════════════════════════════════╝
`}
          </pre>
        </div>

        {/* Loading Text */}
        <div className="mb-6 h-8 flex items-center justify-center">
          <div className="text-sm sm:text-base">
            <span className="text-blue-400">[SYSTEM]</span>
            <span className="ml-2">{displayText}</span>
            {!stepComplete && <span className="animate-pulse ml-1">▍</span>}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="text-left max-w-md mx-auto space-y-1">
          {loadingSteps.map((step, index) => (
            <div 
              key={index} 
              className={`text-xs flex items-center transition-all duration-300 ${
                index < currentStep 
                  ? 'text-green-400' 
                  : index === currentStep 
                    ? 'text-blue-400' 
                    : 'text-gray-600'
              }`}
            >
              <span className="mr-2">
                {index < currentStep ? '✓' : index === currentStep ? '⟳' : '○'}
              </span>
              {step}
            </div>
          ))}
        </div>

        {/* Resource Loading Status */}
        <div className="mt-6 text-xs text-gray-500">
          <div className="flex justify-center space-x-4 flex-wrap">
            <span className={loadingProgress.fonts ? 'text-green-400' : 'text-gray-600'}>
              {loadingProgress.fonts ? '✓' : '○'} Fonts
            </span>
            <span className={loadingProgress.styles ? 'text-green-400' : 'text-gray-600'}>
              {loadingProgress.styles ? '✓' : '○'} Styles
            </span>
            <span className={loadingProgress.scripts ? 'text-green-400' : 'text-gray-600'}>
              {loadingProgress.scripts ? '✓' : '○'} Scripts
            </span>
            <span className={loadingProgress.dom ? 'text-green-400' : 'text-gray-600'}>
              {loadingProgress.dom ? '✓' : '○'} DOM
            </span>
          </div>
        </div>

        {/* Matrix-style background effect */}
        <div className="fixed inset-0 pointer-events-none opacity-10 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Completion message */}
        {isComplete && (
          <div className="mt-8 text-center animate-fade-in">
            <div className="text-green-400 text-sm">
              ✓ System initialization complete
            </div>
            <div className="text-gray-400 text-xs mt-2">
              Welcome to the terminal...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;