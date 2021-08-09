const utilityObject = {

    // Возвращает новый объект из модифицированных полей текущего объекта
    // Принимает на вход callback функцию с параметрами (key, value) и возвращающую массив [key, value]
    map: function (callback)
    {
        const new_object = {};
        for (let key in this)
        {
            if (typeof this[key] != "function")
            {
                const res = callback(key, this[key]);
                new_object[res[0]] = res[1];
            }
        }
        return new_object;
    }
}

// Создание наследника через свойство __proto__
const properties = {
    name: "Иван",
    age: 20,
    height: 180.5,
    is_male: true,
    __proto__: utilityObject
}

// Создание наследника через Object.create и его второй аргумент properties
properties2 = Object.create(utilityObject, {
    name: {value: "Маша", enumerable: true},
    age: {value: 18, enumerable: true,},
    height: {value: 165, enumerable: true,},
    is_male: {value: false, enumerable: true,},
})

console.assert(utilityObject.isPrototypeOf(properties), "Объект properties не является наследником класса UtilityObject");
console.assert(utilityObject.isPrototypeOf(properties2), "Объект properties2 не является наследником класса UtilityObject");

let new_object = properties.map((key, value) => {
    return [key.toUpperCase(), value.toString()]
})

let new_object2 = properties2.map((key, value) => {
    return [key.toUpperCase(), value.toString()]
})

console.log(utilityObject)

console.log(properties)
console.log(properties2)

console.log(new_object)
console.log(new_object2)
