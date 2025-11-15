import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <div className="w-full">
      <Header />
      
      <main className="w-full">
        <Home />
        <Menu />
        <About />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;