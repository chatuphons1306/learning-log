// //books
// const books = [
//     { title : "ภาษาไทย", price : 299, year : 2015 },
//     { title : "ภาษาอังกฤษ", price : 239, year : 2026 },
//     { title : "ภาษาญี่ปุ่น", price : 499, year : 2010 }
// ];
// console.log(books[0]);


// const updatedBook = {...books[0], price:199 };

// console.log(updatedBook);


// const discountedBook = books.map ( book => ({...book, price :  book.price*0.9}));
// console.log(discountedBook);


//game
const gameSteam = [
    { name: "Doom", price: 1290 },
    { name: "Gta6", price: 2990 },
    { name: "Apex legend", price: 0 }
];

const updatedGame = { ...gameSteam[2], price: 400 };
console.log(updatedGame);

const discountedGame = gameSteam.map(game => ({...game, price: game.price*0.4}));
console.log(discountedGame);
