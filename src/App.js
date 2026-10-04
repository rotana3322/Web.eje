import react from 'react';
import Home from './Home';
import { useEffect } from 'react';
export default function App() {
  useEffect(() => {
    // Load external scripts dynamically
    const scripts = [
      '/js/jquery.easing.1.3.js',
      '/js/jquery.waypoints.min.js',
      '/js/jquery.stellar.min.js',
      '/js/owl.carousel.min.js',
      '/js/jquery.magnific-popup.min.js',
      '/js/aos.js',
      '/js/jquery.animateNumber.min.js',
      '/js/bootstrap-datepicker.js',
      '/js/jquery.timepicker.min.js',
      '/js/scrollax.min.js',
      '/js/main.js'
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    scripts.reduce((promise, src) => {
      return promise.then(() => loadScript(src));
    }, Promise.resolve());
  }, []);
  return (
  
    <Home />
  
  );
}