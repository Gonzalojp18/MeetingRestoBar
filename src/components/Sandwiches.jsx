import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';

const Sandwiches = () => {
  const sandwiches = {
    "Sandwiches (pan de ciabatta)" : menuData["Nuestros Sandwiches"],
  };

  return (
    <section id="hamburguesas">
      <div className="box-burger p-2">
      <h1 className="font-bold">Sandwiches</h1>
      {/* <img src={burgerone} alt="de la casa" /> */}
      </div>
      {Object.entries(sandwiches).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Sandwiches;