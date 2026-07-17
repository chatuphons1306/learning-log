const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม", "องุ่น", "มะม่วง"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);
fruits.push("สับปะรด");
console.log(fruits);

const user = {
    name: "Chatuphon",
    age: 27,
    skill: ["JavaScript", "HTML", "CSS"]
};
console.log(user.name, user.age, user.skill[3]);
console.log(user.address);

const product = [
    {id: "แอปเปิ้ล", price: 100},
    {id: "กล้วย", price: 400},
    {id: "ส้ม", price: 500},
    {id: "องุ่น", price: 700}
];

const vat = product.map((item) => item.price * 1.07);
console.log(vat);

const filteredProducts = product.filter((item) => item.price > 500);
console.log(filteredProducts);

const found = product.find((item) => item.id === "ส้ม");
console.log(found);

const totalPrice = product.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(totalPrice);

const{id, price} = product[0];
console.log({id, price});

const updatedProduct = {...product[0], price: 600};
console.log(updatedProduct);

const arr = [1, 2, 3];
const arr2 = arr;        // ก็อป "ที่อยู่" → ชี้บ้านเดียวกัน
arr2.push(4);
console.log(arr);        // [1, 2, 3, 4] ← เปลี่ยนตาม เพราะบ้านเดียวกัน

const arr3 = [...arr];   // สร้าง "บ้านใหม่" ขนของไปใส่
arr3.push(5);
console.log(arr);        // [1, 2, 3, 4] ← ไม่เปลี่ยน! (arr3 = [1,2,3,4,5] อยู่คนละบ้าน)