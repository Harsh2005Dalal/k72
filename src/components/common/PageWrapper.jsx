import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PageWrapperCustom({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(false);
  
  const routeAnimations = {  '/': 'scale',
    '/agence': 'rotate',
    '/projects': 'blur',
  };

  const animation = routeAnimations[location.pathname] || 'fade';

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 1300);
    return () => clearTimeout(timer);
  }, [location]);

  const animations = {
    fade: {
      opacity: show ? 1 : 0,
      transition: show ? 'opacity 0.3s ease-in' : 'none'
    },
    slideUp: {
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(30px)',
      transition: show ? 'opacity 0.4s ease-out, transform 0.4s ease-out' : 'none'
    },
    slideLeft: {
      opacity: show ? 1 : 0,
      transform: show ? 'translateX(0)' : 'translateX(-50px)',
      transition: show ? 'opacity 0.4s ease-out, transform 0.4s ease-out' : 'none'
    },
    blur: {
      opacity: show ? 1 : 0,
      filter: show ? 'blur(0px)' : 'blur(10px)',
      transition: show ? 'opacity 0.5s ease-out, filter 0.5s ease-out' : 'none'
    },
    scale: {
      opacity: show ? 1 : 0,
      transform: show ? 'scale(1)' : 'scale(0.95)',
      transition: show ? 'opacity 0.4s ease-out, transform 0.4s ease-out' : 'none'
    },
    rotate:{
        opacity: show ? 1 : 0,
        transform: show ? 'rotate(0deg) scale(1)' : 'rotate(-5deg) scale(0.95)',
        transition: show ? 'all 0.5s ease-out' : 'none'
    }
  };

  return (
    <div style={animations[animation]}>
      {children}
    </div>
  );
}

export default PageWrapperCustom;