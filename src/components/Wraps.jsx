import React from 'react';
import CategorySection from './CategorySection';
import menuData from '../data/data';
import './Wraps.css'
import wrap  from '../source/burgerandwraps/wrap.webp'

const Tartas = () => {
  const tartasData = {
    "Acompañadas con papas rusticas": menuData["Wraps"]
  };

  return (
    <section id="wraps">
      <h1 className="mb-4 text-center">Wraps</h1>
      {Object.entries(tartasData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
      <img src={wrap} alt="" />
    </section>
  );
};

export default Tartas;