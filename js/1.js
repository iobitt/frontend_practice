class UtilityObject
{
    // Возвращает новый объект из модифицированных полей текущего объекта
    // Принимает на вход callback функцию с параметрами (key, value) и возвращающую массив [key, value]
    map(callback)
    {
        let new_object = {};
        for (let key in this)
        {
            let res = callback(key, this[key])
            new_object[res[0]] = res[1]
        }
        return new_object
    }
}

class Properties extends UtilityObject
{
    constructor()
    {
        super();

        this.name = "Ivan"
        this.age = 30
        this.height = 180.5
        this.male = true
    }
}

let properties = new Properties();

console.assert(properties instanceof UtilityObject, "Объект не является наследником класса UtilityObject");

let new_object = properties.map((key, value) => {
    return [key.toUpperCase(), value.toString()]
})

console.log(new_object)
