console.log("<------------- 2.1 ------------>");

class Person
{
    static counter = 0;

    constructor(firstName, lastName)
    {
        this.id = Person.counter++;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName()
    {
        return this.firstName + " " + this.lastName;
    }

    greeting()
    {
        return `Hello, I'm ${this.fullName()}`;
    }
}

const person = new Person("Вячеслав", "Бакшаев");
const person2 = new Person("Ярослав", "Бакшаев");
const person3 = new Person("Братислав", "Бакшаев");
const person4 = new Person("Святослав", "Бакшаев");

console.assert(Person.isPrototypeOf(person), "Конструктор Person не является прототипом для объекта person");

console.log(person.greeting());
console.log(person2.greeting());
console.log(person3.greeting());
console.log(person4.greeting());
