var people ={
    name:"Tessa",
    country:"Kenya"
};
console.log(people['country']);
console.log(people.country);

var person = new Object(people);
console.log(person.name);
person["age"]= 35;
console.log(person);

for ([key,values] of Object.entries(person)){
    console.log(`${key}:${values}`);
}
Object.freeze(person) //prevents addition of properties in the object.
person['school']= "AkiraChix"
console.log(person);

var student = {
    name : "Phiona",
    country : "Uganda",
    hobby: function(){
        console.log(`My name is ${this.name} and my hobby is partying`);
        return ("My favorite hobby is listening to music");
    },
    friends:{
        name:"Marie",
        age:23,
        hobby:{
            first:"cooking"
        }
    }

}
console.log(student.name);
console.log(student.country);
console.log(student.hobby());
console.log(student.friends.name);
console.log(student.friends.hobby.first);
