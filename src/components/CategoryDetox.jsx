import React from 'react'
import './CategoryDetox.css'

const CategoryDetox = ({ category, items }) => {
    return (
        <section>
                <h2 className="text-xl font-semibold py-8">{category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <div key={item.id} className="p-4" id="card-brusquetas">
                        <h3 className="text-2xl font-bold mb-2 entrada text-gray-700">{item.name}</h3>
                        <p className="text-gray-600 font-semibold mb-2">{item.description}</p>
                        <p className="text-amber-600 text-xl font-extrabold">${item.price.toFixed(3)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryDetox