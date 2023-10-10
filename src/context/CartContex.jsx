import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [productCart, setProductCart] = useState([]);

    const addToCart = (productIdNumber, quantity, selectedSize) => {
    setProductCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex(item => item.productIdNumber === productIdNumber);

        if (existingProductIndex !== -1) {
        const existingProduct = prevCart[existingProductIndex];

        if (existingProduct.selectedSize !== selectedSize) {
            return [...prevCart, { productIdNumber, quantity, selectedSize }];
        };

        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
        } else {
        return [...prevCart, { productIdNumber, quantity, selectedSize }];
        }
    });
    };

    const removeFromCart = (productId, selectedSize) => {
    setProductCart((prevCart) =>
        prevCart.filter((item) => item.productIdNumber !== productId || item.selectedSize !== selectedSize)
    );
    };

    return (
    <CartContext.Provider value={{ productCart, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
    );
};
