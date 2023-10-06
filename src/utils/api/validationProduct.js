function isValidProduct(product) {
    const requiredProperties = ['id', 
                                'image', 
                                'name', 
                                'price', 
                                'sizes', 
                                'colore', 
                                'description', 
                                'sole', 
                                'closure', 
                                'upper', 
                                'lining', 
                                'gender'];

return (
    product &&
    typeof product === 'object' &&
    requiredProperties.every(prop => typeof product[prop] !== 'undefined')
    );
}

export { isValidProduct };