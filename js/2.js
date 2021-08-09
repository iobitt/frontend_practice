function Person(firstName, lastName)
{
    Person.counter ||= 0;

    this.id = Person.counter++;
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function()
    {
        return firstName + " " + lastName
    };

    this.greeting = function()
    {
        return `Hello, I'm ${this.fullName()}`
    };
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
