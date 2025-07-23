function calculateDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 100;
const percentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, percentage);

console.log("Original price: $" + originalPrice);
console.log("Discount: "+ percentage + "%");
console.log("Price with discount: $" + finalPrice);