const user = {
    name: 'Iskandar',
    surname: 'Xasanov',
    age: 22,
    status: true,
    visa: ['Canada', 'USA', 'South Korea'],
    fullname: function () {
        return this.name + ' ' + this.surname
    }
}

let passport = {
    serries: "AC",
    number: 1231546444,
    date: {
        get: "2015",
        to: "2025"
    }
}

//1
let singleObj = Object.assign(user, passport)

//2 - 3

let keys = Object.keys(singleObj);
let values = Object.values(singleObj);
let all = keys.concat(values)


//4

let types = {
    number: [],
    boolean: [],
    string: [],
    object: [],
}

values.filter(item => {
    let key = typeof item

    if (types[key]) {
        types[key].push(item);
    }
})

console.log(types);





// ТЗ
// Соеденить два объекта в один
// получить все ключи в один массив и все значения тоже в один отдельный массив
// соеденить два массива в один
// отфильтровать массив по типам данных элементов