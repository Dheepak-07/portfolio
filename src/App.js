import './App.css';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Project from './Pages/Project';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Dynamically load scroll animate script
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/scrollAnimate.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="scroll-animate">
      <div id="scroll-animate-main">
        <div className="wrapper-parallax">
          <Header />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
