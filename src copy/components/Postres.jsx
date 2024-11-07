import React from 'react'
import CategoryDelicious from './CategoryDelicious';
import sweetMenu from '../data/dataSweet';
import './CategoryInfo.css'
import budin from '../source/delicias/budin.webp'

const Postres = () => {
    const postreData = {
    "" : sweetMenu["Cositas Ricas"],
    };

return (
    <section id="tortas"  className="section-delicious">
            <div className='flex'>
                <article className='title-postre'>
                    <h2 className='text-4xl'>Cositas Ricas</h2>
                    <div className='box-description'>
            <p className='text-2xl font-extrabold py-2 text-center'>NUEVO</p>
            <p className='text-3xl title font-extrabold text-center'>Budin De Pan</p>
            <p className='text-description font-semibold text-center'>Cremoso y exquisito</p>
            <p className='price text-4xl'>$2500</p>
            <div>
                <p>Topping opcionales:</p>
                <p className="text-gray-800">Dulce de leche</p>
                <p className="text-gray-800">Crema Blanca</p>
                <p className="text-gray-800">$700 c/u</p>
            </div>
        </div>
        <img className='mx-auto' src={budin} alt="budin" />
                </article>
            </div>
    {Object.entries(postreData).map(([category, items]) => (
        <CategoryDelicious key={category} category={category} items={items} />
    ))}
    <section className='budin my-6'>
    </section>
    </section>
)
}

export default Postres