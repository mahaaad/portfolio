import React, { useEffect, useState } from 'react';

const FadeIn = ({ delay = 0, duration = 500, className = '', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const style = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-in`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default FadeIn;

