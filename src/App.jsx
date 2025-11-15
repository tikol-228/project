import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  
  // Компенсация высоты хедера (h-20)
  const HEADER_COMPENSATION_CLASS = '-mt-20'; 

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* FIX: -mt-20 подтягивает <main> вверх, чтобы оно начиналось в y=0,
          а Header (который fixed) накладывался сверху.
      */}
      <main className={HEADER_COMPENSATION_CLASS}>
        <Home />
        <Menu />
        <About />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;