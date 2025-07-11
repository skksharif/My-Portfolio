import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaskEffect = ({ children, maskType = 'circle', className = '' }) => {
  const maskRef = useRef(null);

  useEffect(() => {
    const element = maskRef.current;
    if (!element) return;

    // Create mask reveal animation
    gsap.fromTo(element, 
      {
        clipPath: maskType === 'circle' 
          ? 'circle(0% at 50% 50%)' 
          : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
      },
      {
        clipPath: maskType === 'circle' 
          ? 'circle(100% at 50% 50%)' 
          : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, [maskType]);

  return (
    <div ref={maskRef} className={`mask-reveal ${className}`}>
      {children}
    </div>
  );
};

export default MaskEffect;