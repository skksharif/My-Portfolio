import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from 'framer-motion';
import './StudentIDCard.css';

const StudentIDCard = () => {
  const rotateZ = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 1000], [0.2, 1]);

  useEffect(() => {
    if (!isHovered) {
      animate(rotateZ, [0, 8, -8, 0], {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
        type: 'tween',
      });
    }
  }, [isHovered, rotateZ]);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (!isHovered) {
        const nudge = Math.max(-10, Math.min(10, delta * 0.5));
        animate(rotateZ, nudge, {
          type: 'spring',
          stiffness: 80,
          damping: 15,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered, rotateZ]);

  return (
    <div className="id-container">
      <motion.div className="card-bg" style={{ opacity: bgOpacity }} />
      <div className="string"></div>
      <motion.div
        className="card"
        style={{ rotateZ, transformOrigin: 'top center' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="./assets/mine/sharif.jpg"
          alt="Student"
          className="photo"
        />
        <h2 className="college">Lakireddy Bali Reddy College of Engineering</h2>
        <p className="branch">Information Technology</p>
      </motion.div>
    </div>
  );
};

export default StudentIDCard;
