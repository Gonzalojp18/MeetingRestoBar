import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import './Milanesa.css'

const Milanesas = () => {
  const sandwiches = {
    "de milanesa Carne o Pollo" : menuData["Sandwiches de Milanesa"],
  };

  return (
    <section id="milanesa">
      <div className="box-milanesa p-2">
      <h1 className="font-bold">Sandwiches</h1>
      {/* <img src={burgerone} alt="de la casa" /> */}
      </div>
      {Object.entries(sandwiches).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Milanesas;