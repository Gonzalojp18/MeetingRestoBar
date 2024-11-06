import React from 'react'
import CategoryBebidas from './CategoryBebidas';
import drinkData from '../data/dataDrink';
import './CategoryBebidas.css'
import pepsi from '../source/marcas/pepsi.PNG'
import seven from '../source/marcas/7up.PNG'
import corona from '../source/marcas/corona.PNG'
import stella from '../source/marcas/stella.PNG'
import toro from '../source/marcas/toros.PNG'
import gatorade from '../source/marcas/gatorade.PNG';


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
                        <div className='logo-marcas'>
                    <img src={pepsi} alt="" />
                    <img src={seven} alt="" />
                    <img src={corona} alt="" />
                    <img src={stella} alt="" />
                    <img src={toro} alt="" />
                    <img src={gatorade} alt="" />

                    </div>
    </section>
)
}

export default Bebidas