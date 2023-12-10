
const infoaboutme = {
    Name: 'Benjamin Follett',
    birthyear: '2000',
    birthmonth: 'July',
    birthday: '16th',
    gender: 'male',
    favvideogame: 'left 4 dead',
    favfoods: {
        pizza: 'meat Lovers',
        fruits: 'blue berries',
        vegatables: 'brocclie',
    }
}
console.log(infoaboutme)
console.log(`(ITERATING AN ARRAY.)`)

const people = [
{name: `Benjamin`, age: 23, gender: `male`},
{name: `Nick`, age: 29, gender: `male`},
{name: `Bree`, age: 23, gender: `female`},
{name: `Brooklyn`, age : 21, gender: `female`},
];

people.forEach( person => {
    console.log(`Hey there ${person.name} you are ${person.age} years old and are a ${person.gender}.`)
})
 
console.log("(FUNCTIONS.)")

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greet('Bree', function() {
    console.log('Hope your day is amazing')
})



console.log(`(ITERATING THE RECORDS FROM JSON FILE.)`)

fetch('./Cars.json')
  .then(response => response.json())
  .then(brand => {
    brand.forEach(carortruck => {
       trucksorcars(carortruck);
       
    })
  })
  .catch(error => {
    console.error(error);
  });

  function trucksorcars(carortruck) {
    switch(carortruck.type){
        case "Car":
          console.log(`${carortruck.carbrand} ${carortruck.model} is a ${carortruck.type} and its a ${carortruck.year}.`);
          break;
        case "Truck":
            console.log(`${carortruck.carbrand} ${carortruck.model} is a 4 wheel drive all-terrain ${carortruck.type} and its a ${carortruck.year}.`);
    }
  }
const carbrand1 = function() {
    return "Chevrolet";
}
const car1 = function() {
    return "Cruize";
}
const year1 = function() {
    return "2013";
}


console.log(`(FUNCTIONS USED TO DESCRIBE JSON FILE BY RETURNING STRINGS OF DATA.)`)

console.log(carbrand1())
console.log(car1())
console.log(year1())