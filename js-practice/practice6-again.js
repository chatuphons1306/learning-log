const students = [
    {name: 'Alice', score: 85},
    {name: 'Bob', score: 92},
    {name: 'Charlie', score: 45},
    {name: 'David', score: 40}
];


const addScore = students.map(student => ({...student , score : student.score + 5}));
console.log(addScore); 
console.log(students[1].score); 

const passedStudents = students.filter(student => student.score >= 50);
console.log(passedStudents); // [{name: 'Alice', score: 85}, {name: 'Bob', score: 92}]

const foundStudent = students.find(student => student.name === 'Charlie');
console.log(foundStudent); // {name: 'Charlie', score: 45}

const totalScore = students.reduce((accumulator, student) => accumulator + student.score, 0);
console.log(totalScore); // 262

const countpassed = students.filter(student => student.score >= 50).length;
console.log(countpassed); // 2

const {name, score} = students[0];
console.log(name);

const updated = {...students[0], score: 60} ;
console.log(updated); 
