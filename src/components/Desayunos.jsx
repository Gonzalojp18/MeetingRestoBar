import React from 'react';
import CategorySection from '../components/CategorySection';
import enterMenu from '../data/dataSecondary';
import './Desayuno.css'
import yogourt from '../source/breakfast/yogurt.webp'

const Desayunos = () => {
  const desayunosData = {
    "Desayuno": enterMenu["Desayunos y Meriendas"]
  };

  return (
    <section id="desayunos" className="breakfast p-2">
      <h1 className="mb-4 p-4">Desayunos & Meriendas</h1>
      {Object.entries(desayunosData).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
      <img src={yogourt} alt="" />
    </section>
  );
};

export default Desayunos;