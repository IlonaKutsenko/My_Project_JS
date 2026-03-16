const product = {
    name : `Quantum Headphone`,
    price : 149.99,
    getFormattedPrice : function () {
        return `${this.price}`;
    }
};

const createProductLabel = ({name, getFormattedPrice}) =>
    `Product: ${name} | Price: ${getFormattedPrice.call(product)}`;

console.log(createProductLabel(product));
