

const CategorySection = ({ category, items }) => {

    return (
        <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold">{category}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.id} className="p-4 rounded box-lunch">
                            <h3 className="text-2xl font-semibold mb-2 entrada">{item.name}</h3>
                            <p className="text-yellow-900 text-1xl font-bold mb-2">{item.description}</p>
                            <p className="text-pink-900 text-base font-bold">${item.price.toFixed(3)}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default CategorySection;