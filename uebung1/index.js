import { Student } from './classes.js';

let mediaStudents = [
    new Student('Maria Mustermann', 23, 'Medieninformatik'),
    new Student('Max Mustermann', 19, 'Medieninformatik')
];
let engineeringStudents = [
    new Student('Martin Musterfrau', 33, 'Ingenieurinformatik'),
    new Student('Martina Mustermann', 32, 'Ingenieurinformatik')
];

console.log("Alle Medieninformatiker:");
for (let index = 0; index < mediaStudents.length; index++) {
    console.log(mediaStudents[index]);
}
console.log();

console.log("Alle Ingenieurinformatiker:");
for (let index = 0; index < engineeringStudents.length; index++) {
    console.log(engineeringStudents[index]);
}
console.log();

console.log("Alle Studenten:");
let allStudents = [...mediaStudents, new Student('Manuel Mustermensch', 20, 'Wirtschaftsinformatik'), ...engineeringStudents];
for (let index = 0; index < allStudents.length; index++) {
    console.log(allStudents[index]);
}
console.log();

console.log("Namen aller Studenten:");
let studentNames = [];
allStudents.forEach(i => {
    studentNames.push(i.name)
});
for (let index = 0; index < studentNames.length; index++) {
    console.log(studentNames[index]);
}
console.log();

console.log("Liste der Namen aller Studenten:");
let items = studentNames.map(studentName => `<li>${studentName}</li>`);
console.log(items);
console.log();

console.log("Name des ersten Medieninformatikers:");
var [firstName] = mediaStudents;
console.log(firstName.name);