import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductItem.scss';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        setLoading(true);
        const res = await fetch('/products');
        const data = await res.json();

        setProducts(data);
        setLoading(false);
    }

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <ul className="products-list">
            {!loading && products.length === 0 ? (<p>No products to show...</p>) : (
                products.map(product => <ProductItem product={product} key={product.productId} />)
            )}
        </ul>
    )
}

export default Products;