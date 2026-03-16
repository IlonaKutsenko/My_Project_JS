const productName = `WirelessHeadphones`;
const price = 5;
const isInStock = true;
const promotionalDiscount = null;
let lastOrderedBy;

const productDetails = {
    category : `fruits`,
    SKU : `123`
};

const productSummary = `
Name: ${productName}
Price: $${price}
Stock status: ${isInStock ? "In Stock" : "Out of Stock"}`;
console.log(productSummary);
