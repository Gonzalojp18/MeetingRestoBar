import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import './Sandwiches.css'

const Sandwiches = () => {
  const sandwiches = {
    "En pan de ciabatta" : menuData["Nuestros Sandwiches"],
  };

  return (
    <section id="sandwiches">
      <div className="box-sandwiches p-2">
      <h1 className="font-bold">Nuestros Sandwiches</h1>
      </div>
      {Object.entries(sandwiches).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default Sandwiches;