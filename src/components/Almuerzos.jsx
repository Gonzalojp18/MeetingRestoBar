import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import pizzetados from '../source/almuerzos/pizzetados.jpeg';
import './Almuerzos.css'

const Almuerzos = () => {
  const almuerzosData = {
    "Almuerzos": menuData["Nuestros Platos"]
  };

  return (
    <section id="almuerzos">
      <div className='box-almuerzos p-4'>
      <h1 className="font-bold mb-4">Nuestros Platos</h1>
      {Object.entries(almuerzosData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
      <img className='rounded-lg' src={pizzetados} alt="" />
      </div>
    </section>
  );
};

export default Almuerzos;