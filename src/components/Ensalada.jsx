import React from 'react'
import CategoryHealtly from './CategoryHealtly';
import menuData from '../data/data';
import deluxe from '../source/ensaladas/deluxe.webp';
// import casa from '../source/ensaladas/casa.webp';

const Ensaladas = () => {
    const saladData = {
    "Opciones" : menuData["Ensaladas"]
    };

return (
    <section id="ensaladas">
            <section className='brusquetas-section'>
                <div className='title-brusquetas flex'>
                    <h2 className='text-5xl w-40'>Ensaladas de la Casa</h2>
                    <img className='w-50 px-5' src={deluxe} alt="" />
                </div>
            </section>
    {Object.entries(saladData).map(([category, items]) => (
        <CategoryHealtly key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Ensaladas