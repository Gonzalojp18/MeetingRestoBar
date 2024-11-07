import React from 'react'
import CategoryHealtly from './CategoryHealtly';
import menuData from '../data/data';
import deluxe from '../source/ensaladas/realsald.webp';


const Ensaladas = () => {
    const saladData = {
    "Nuestras opciones:" : menuData["Ensaladas"]
    };

return (
    <section id="ensaladas">
                <div className='title-salad'>
                    <h2>Ensaladas de la Casa</h2>
                    <img className='salad' src={deluxe} alt="" />
                </div>
    {Object.entries(saladData).map(([category, items]) => (
        <CategoryHealtly key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Ensaladas