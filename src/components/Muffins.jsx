import React from 'react'
import CategoryDetox from './CategoryDetox';
import muffins from '../data/dataSweet';
import './Alfajores.css'
import fotomuffins from '../source/delicias/muffins/muffins.webp'

const Muffins = () => {
    const muffinsData = {
    "" : muffins["Muffins"]
    };

return (
    <section id="muffins" className='muffins py-8'>
            <div className='muffins-section'>
                <div className='title-muffins py-0'>
                    <h2 className='text-5xl'>Muffins</h2>
                </div>
            </div>
    {Object.entries(muffinsData).map(([category, items]) => (
        <CategoryDetox key={category} category={category} items={items} />
    ))}
    <img className="mb-10 mt-10" src={fotomuffins} alt="" srcset="" />
    </section>
)
}

export default Muffins