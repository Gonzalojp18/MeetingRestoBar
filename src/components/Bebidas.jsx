import React from 'react'
import CategoryBebidas from './CategoryBebidas';
import drinkData from '../data/dataDrink';
import './CategoryBebidas.css'

const Bebidas = () => {
    const bebidasData = {
    "" : drinkData["Bebidas"],
    };

return (
    <section id="bebidas"  className="section-bebidas">
            <section className='flex box-bebidas'>
                    <h2 className='text-5xl py-4'>Bebidas</h2>
            </section>
    {Object.entries(bebidasData).map(([category, items]) => (
        <CategoryBebidas key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Bebidas