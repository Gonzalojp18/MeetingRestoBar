import React from 'react';
import CategorySection from './CategorySection';
import menuData from '../data/data';
import './TartasWraps.css'
import wrap  from '../source/burgerandwraps/wrap.webp'

const Tartas = () => {
  const tartasData = {
    "Tartas (acompañadas con mix de ojas verdes)": menuData["Tartas"],
    "Wraps (acompañadas con papas rusticas)": menuData["Wraps"]
  };

  return (
    <section id="tartas">
      <h1 className="mb-4 text-center">Tartas y Wraps</h1>
      {Object.entries(tartasData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
      <img src={wrap} alt="" />
    </section>
  );
};

export default Tartas;