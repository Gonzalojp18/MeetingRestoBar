import React from 'react'
import CategoryLicuados from './CategoryLicuados';
import drinkData from '../data/dataDrink';
import './CategoryLicuados.css'

const Licuados = () => {
    const licuadosData = {
    "" : drinkData["Licuados y Exprimidos"],
    };

return (
    <section id="licuados"  className="section-licuados">
                    <h2 className='text-4xl py-4'>Licuados & Exprimidos</h2>
                    <p className='text-xl pb-5'>al agua o con leche</p>
    {Object.entries(licuadosData).map(([category, items]) => (
        <CategoryLicuados key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Licuados