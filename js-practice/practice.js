const name = "จตุพร ศรีพรหม";
let age = 27;
console.log(`ผมชื่อ: ${name} อายุ: ${age} ปี`);

const nickname = "ต้า";
const number = 10;
const isStudent = false;
let address;

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof nickname); // string
console.log(typeof number); // number
console.log(typeof isStudent); // boolean
console.log(typeof address); // undefined

console.log(`ชื่อเล่น: ${nickname} เลขที่: ${number} เป็นนักเรียนหรือไม่: ${isStudent}, ที่อยู่: ${address}`);

const score = 60;
if (score >= 80) {
    console.log("เกรด A");
} else if (score >= 70) {
    console.log("เกรด B");
} else if (score >= 50) {
    console.log("เกรด C");
} else {
    console.log("สอบตก");
}

for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let num = 4;
function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    return false;
}

console.log(isEven(num));


const isEvenArrow = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
};
console.log(isEvenArrow(num));

console.log(0 == "");
console.log(0 === "");
console.log(typeof ("2" + 2));
console.log(typeof ("2" - 2));
console.log ("2" + 2);
console.log ("2" - 2);
