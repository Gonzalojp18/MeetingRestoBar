import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import './Hamburguesas.css'
// import burgerone from '../source/burgerandwraps/para.webp'

const Hamburguesas = () => {
  const hamburguesas = {
    "Hamburguesas": menuData["Hamburguesas"],
    "Sandwiches (pan de ciabatta)" : menuData["Nuestros Sandwiches"],
  };

  return (
    <section id="hamburguesas">
      <div className="box-burger p-4">
      <h1 className="font-bold">Hamburguesas & <br /> Sandwiches</h1>
      {/* <img src={burgerone} alt="de la casa" /> */}
      </div>
      {Object.entries(hamburguesas).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Hamburguesas;