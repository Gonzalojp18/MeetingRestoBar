import React from 'react'
import CategoryDelicious from './CategoryDelicious';
import sweetMenu from '../data/dataSweet';
import './CategoryInfo.css'
import budin from '../source/delicias/budin.webp'

const Postres = () => {
    const postreData = {
    "Postres" : sweetMenu["Cositas Ricas"],
    };

return (
    <section id="tortas"  className="section-delicious">
            <div className='flex'>
                <article className='title-postre'>
                    <h2 className='text-4xl py-4'>Cositas Ricas</h2>
                </article>
            </div>
    {Object.entries(postreData).map(([category, items]) => (
        <CategoryDelicious key={category} category={category} items={items} />
    ))}
    <section className='budin my-6'>
        <div className='box-description'>
            <p className='text-2xl font-extrabold py-2 text-center'>NUEVO</p>
            <p className='text-3xl title font-extrabold text-center'>Budin De Pan</p>
            <p className='text-description font-semibold text-center'>Cremoso y exquisito, acompañado con crema blanca y tentador dulce de leche</p>
    </div>
        <img src={budin} alt="budin" />
    </section>
    </section>
)
}

export default Postres