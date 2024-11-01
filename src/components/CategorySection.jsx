

const CategorySection = ({ category, items }) => {

    return (
        <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold">{category}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.id} className="p-4 rounded box-lunch">
<<<<<<< HEAD
                            <h3 className="text-xl font-bold mb-2 entrada">{item.name}</h3>
                            <p className="text-1xl font-semibold mb-2">{item.description}</p>
                            <p className="text-amber-600 text-base font-bold">${item.price.toFixed(3)}</p>
=======
                            <h3 className="text-l font-semibold mb-2 entrada">{item.name}</h3>
                            <p className="mb-2">{item.description}</p>
                            <p className="font-semibold text-l">${item.price.toFixed(3)}</p>
>>>>>>> 6d3630d76748cfd9716cebc9d384f80e8e1686d6
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default CategorySection;