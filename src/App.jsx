import React, { useState } from 'react';
import './App.css';
import { Menu, X } from 'lucide-react';
import Entradas from './components/Entradas';
import Almuerzos from './components/Almuerzos';
import Hamburguesas from './components/Hamburguesas';
import Tartas from './components/Tartas';
import Desayunos from './components/Desayunos';
import BigToast from './components/BigToast';
import Brusquetas from './components/Brusquetas';
import Postres from './components/Postres';
import Ensaladas from './components/Ensalada';
import Coffe from './components/Coffe';
import Licuados from './components/Licuados';
import Detox from './components/Detox';
import Bebidas from './components/Bebidas';
import Sandwiches from './components/Sandwiches';
import Milanesas from './components/Milanesas';
import Wraps from './components/Wraps';
import Alfajores from './components/Alfajores';
import logo from '../src/source/miselaneous/logosinbg.webp';
import {FiInstagram} from 'react-icons/fi'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="main-container">
      <header className="text-white shadow">
        <div className="container px-4 py-4 flex justify-between items-center section-nav">
          <a href="#main-container"><p>MENU</p></a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} text-white bg-amber-600 nav`}>
        <ul className="container mx-auto px-4 py-2">
          <li className="py-2"><a href="#desayunos" onClick={() => setIsMenuOpen(false)}>Desayunos</a></li>
          <li className="py-2"><a href="#entradas" onClick={() => setIsMenuOpen(false)}>Entradas & Picadas</a></li>
          <li className="py-2"><a href="#almuerzos" onClick={() => setIsMenuOpen(false)}>Nuestros Plantos</a></li>
          <li className="py-2"><a href="#hamburguesas" onClick={() => setIsMenuOpen(false)}>Hamburguesas & Sandwiches</a></li>
          <li className="py-2"><a href="#tartas" onClick={() => setIsMenuOpen(false)}>Tartas & Wraps</a></li>
          <li className="py-2"><a href="#ensaladas" onClick={() => setIsMenuOpen(false)}>Ensaladas</a></li>
          <li className="py-2"><a href="#toast" onClick={() => setIsMenuOpen(false)}>Big Toast</a></li>
          <li className="py-2"><a href="#brusquetas" onClick={() => setIsMenuOpen(false)}>Brusquetas</a></li>
          <li className="py-2"><a href="#tortas" onClick={() => setIsMenuOpen(false)}>Cositas Ricas</a></li>
          <li className="py-2"><a href="#cafe" onClick={() => setIsMenuOpen(false)}>Cafeteria</a></li>
          <li className="py-2"><a href="#licuados" onClick={() => setIsMenuOpen(false)}>Licuados&Exprimidos</a></li>
          <li className="py-2"><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox</a></li>
          <li className="py-2"><a href="#bebidas" onClick={() => setIsMenuOpen(false)}>Bebidas</a></li>
        </ul>
      </nav>
      <main className="container px-10 py-4">
      <section className="box-main">
        <img className="mt-10" src={logo} alt="logo" />
        <p className="text-center text-l text-gray-600 mb-8 italic">
          Bienvenido a nuestro menú digital. Explore nuestras deliciosas opciones y disfrute de una experiencia. <br />
          <span> Comes como en casa, pero sin lavar los platos!</span>
        </p>
        </section>
        <section className='box-main-plate'>
        <div id="cafeteria" className="mb-12">
          <Desayunos />
        </div>
        <div className="mb-12">
          <Entradas />
        </div>
        <div className="mb-12">
          <Almuerzos />
        </div>
        <div className="mb-12">
          <Hamburguesas />
        </div>
        <div className="mb-12">
          <Sandwiches />
        </div>
        <div className="mb-12">
          <Milanesas />
        </div>
        <div className="mb-12">
          <Tartas />
        </div>
        <div className="mb-12">
          <Wraps />
        </div>
        </section>
        <div className="mb-12">
          <Ensaladas />
        </div>
        <section>
            <BigToast />
          </section>
        <section>
            <Brusquetas />
          </section>
        <section>
            <Postres />
          </section>
        <section>
            <Alfajores />
          </section>
        <section>
            <Coffe />
          </section>
        <section>
            <Licuados />
          </section>
        <section>
            <Detox />
          </section>
        <section>
            <Bebidas />
          </section>
      </main>
      <footer className="bg-amber-600 text-xl text-white p-4 mt-8 flex flex-col items-center ">
        <div className="container mb-5 text-left">
          <p>Club Obra Sanitaria - (Av Libertador 7281)</p>
          <p className="py-3">Club Obra Sanitaria Anexo - (Av Figueroa Alcorta 7250)</p>
          <p>Club Harrods Gath&Chaves - (Virrey de Pino 1480)</p>
        </div>
        <div className='text-center mb-5'>
          <a target='blank'  href="https://www.instagram.com/meetingrestobar/"><FiInstagram /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
