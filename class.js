class Students{
    constructor(name, age, school){
        this.name = name
        this.age = age
        this.school = school
        this.hobby = function(){
            return `I love eating`
        }
    }
}
// Students['country'] = 'Kenya'
Students.prototype.country = function(){
    return `I love my country Kenya`
}

var firstStudent = new Students("Tessa", 26, "Akirachix", "Kenya");
console.log(firstStudent.hobby());
console.log(firstStudent.country());
console.log(firstStudent);

// function Student(name,age,country){
//     this.name = name
//     this.age = age
//     this.country = country
// }
// let susan = new Student("Susan", 21, "Uganda")
// console.log(susan);

// susan.hobby = "Eating"
// console.log(susan);