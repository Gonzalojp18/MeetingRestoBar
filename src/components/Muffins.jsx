import React from 'react'
import CategoryDelicious from './CategoryDelicious';
import muffins from '../data/dataSweet';
import './Alfajores.css'
import fotomuffins from '../source/delicias/muffins/muffinslight.webp'

const Muffins = () => {
    const muffinsData = {
    "" : muffins["Muffins"]
    };

return (
    <section id="muffins" className='muffins py-8'>
            <div className='muffins-section'>
                <div className='title-muffins py-0'>
                    <img className="mb-10" src={fotomuffins} alt="" srcset="" />
                    <h2 className='text-5xl'>Muffins</h2>
                </div>
            </div>
    {Object.entries(muffinsData).map(([category, items]) => (
        <CategoryDelicious key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Muffins