import React from 'react'
import CategoryDetox from './CategoryDetox';
import alfajores from '../data/dataSweet';
import './Alfajores.css'
import alfajorTwo from '../source/delicias/alfajores.webp'

const Alfajores = () => {
    const aljadorData = {
    "" : alfajores["Alfajores"]
    };

return (
    <section id="alfajor" className='pb-8 detox'>
            <div className='alfajor-section'>
                <div className='title-alfajor py-5'>
                    <h2 className='text-5xl mt-8'>Alfajores</h2>
                    <img src={alfajorTwo} alt="" srcset="" />
                </div>
            </div>
    {Object.entries(aljadorData).map(([category, items]) => (
        <CategoryDetox key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Alfajores