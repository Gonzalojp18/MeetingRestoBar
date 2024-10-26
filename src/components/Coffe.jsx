import React from 'react'
import drinkData from '../data/dataDrink';
import CategoryCoffe from './CategoryCoffe';
import medialunas from '../source/meriendas/medialunas.webp'
import './CategoryCoffe.css'

const Coffe = () => {
    const coffeData = {
    "Opciones:" : drinkData["Cafeteria"],
    };

return (
    <section id="cafe" className="section-coffe mt-10 py-10 text-white">
            <section className='flex'>
                <article className='title-postre'>
                    <h2 className='text-5xl py-5'>Cafeteria</h2>
                </article>
            </section>
    {Object.entries(coffeData).map(([category, items]) => (
        <CategoryCoffe key={category} category={category} items={items} />
    ))}
    <article>
        <div className="py-5 px-5">
        <p className='text-2xl italic'>Disfruta de nuestras riquisimas Medialunas acompañadas con un buen cafe.</p>
        <p className='text-2xl italic pt-5'>No te pierdas nuestras Promos en Cafeteria y MediaLunas</p>
        </div>
        <img src={medialunas} alt="medialunas" />
    </article>
    </section>
)
}

export default Coffe
