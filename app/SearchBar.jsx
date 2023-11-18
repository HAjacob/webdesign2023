import React, {useState, useEffect} from "react"
//import"./SearchBar.css"

export default function SearchBar() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);

    return (
        <div>
            <p>The Search Bar!</p>
            <input
                type="text"
                placeholder="Search..."
                onChange={event => setSearchTerm(event.target.value)}
            />
            <div>{filterProducts.map((product, index) => (
                <div key={index}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))}</div>
        </div>
    );
}