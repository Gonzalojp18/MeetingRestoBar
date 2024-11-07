import React from 'react'
import CategoryDetox from './CategoryDetox';
import green from '../source/meriendas/green.webp'
import detox from '../source/detox/detox.jpeg'
import drinkData from '../data/dataDrink'

const Detox = () => {
    const detoxData = {
    "Orgánicos y sin conservantes" : drinkData["Opciones Detox"]
    };

return (
    <section id="detox" className='pb-10 detox'>
            <div className='detox-section'>
            <img className='my-10' src={green} alt="green" />
                <div className='title-toast py-5'>
                    <h2 className='text-5xl'>Detox</h2>
                </div>
            </div>
    {Object.entries(detoxData).map(([category, items]) => (
        <CategoryDetox key={category} category={category} items={items} />
    ))}
                <img className='my-10' src={detox} alt="orange" />
    </section>
)
}

export default Detox