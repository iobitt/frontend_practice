const UtilityObject = {

    constructor: function ()
    {
        return this;
    },

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

const Properties = Object.create(UtilityObject);
Properties.constructor = function(name, age, height, is_male)
{
    UtilityObject.constructor.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.height = height;
    this.is_male = is_male;
    return this;
}

const properties = Object.create(Properties).constructor("Иван", 20, 180.5, true);

console.assert(UtilityObject.isPrototypeOf(properties), "Объект не является наследником класса UtilityObject");

let new_object = properties.map((key, value) => {
    return [key.toUpperCase(), value.toString()]
})

console.log(properties)
console.log(new_object)
