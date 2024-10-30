import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import tortilla from '../source/entradas/tortilla.webp';
import './Entradas.css'

const Entradas = () => {
  const entradaData = {
    "Entradas": menuData["Entradas y Picadas"]
  };

  return (
    <section id="entradas">
      <div className='header-entradas p-4'>
      <h1 className="text-2xl font-bold mb-4">Entradas y Picadas</h1>
      <img src={tortilla} alt="tortilla"/>
      </div>
      {Object.entries(entradaData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Entradas;