const products = [
  { id: 1, name: "iPhone 17 Pro Max", price: 45900 },
  { id: 2, name: "Samsung Galaxy Z Fold 6", price: 52900 },
  { id: 3, name: "Google Pixel 9 Pro", price: 38900 },
  { id: 4, name: "OnePlus 13", price: 32900 },
  { id: 5, name: "Xiaomi 15 Ultra", price: 34900 },
];

const getProductDetail = () => {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex].price;
};

// ทดลองเรียกใช้
console.log(getProductDetail());
console.log(getProductDetail());
console.log(getProductDetail());
