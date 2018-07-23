//////////////////////////////
//  3
//  Crea un array en la variable llamada arr
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código

var arr = [{
    name: 'pepito',
    age: 25,
  },
  {
    name: 'pepito',
    age: 10
  },

  {
    name: ['J','string'],
    age: 5,
  }
];
// Hasta aquí

// TEST 1
if (typeof arr === 'object' && arr.length >= 0) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 2
if (typeof arr[0] === 'object') {
  console.log('2- apruebas');
} else {
  console.log('2- suspendes');
}
// TEST 3
if (typeof arr[1] === 'object') {
  console.log('3- apruebas');
} else {
  console.log('3- suspendes');
}
// TEST 4
if (typeof arr[2] === 'object') {
  console.log('4- apruebas');
} else {
  console.log('4- suspendes');
}
// TEST 5
if (arr.length === 3) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log('6- apruebas');
} else {
  console.log('6- suspendes');
}

// TEST 6
if (arr[1].name === 'pepito') {
  console.log('7- apruebas');
} else {
  console.log('7- suspendes');
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 8
if (arr[0].age === 25) {
  console.log('9- apruebas');
} else {
  console.log('9- suspendes');
}
// TEST 9
if (typeof arr[2].name === 'string') {
  console.log('10- apruebas');
} else {
  console.log('10- suspendes');
}

// TEST 10
if (arr[2].name[0] === 'J') {
  console.log('11- apruebas');
} else {
  console.log('11- suspendes');
}
