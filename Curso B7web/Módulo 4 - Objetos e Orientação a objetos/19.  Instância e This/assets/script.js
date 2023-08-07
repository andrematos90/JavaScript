function createPerson (name, lastname, age) {
    return{
        name,
        lastname,
        age
    }
}

let person1 = createPerson('André', 'Matos', 33);
let person2 = createPerson('Giovanna', 'Gross', 23);

console.log(`${person1.name} e ${person2.name}`)