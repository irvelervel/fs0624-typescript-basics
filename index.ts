// il nostro primo file TS!
console.log('HELLO TYPESCRIPT!')
let x = 10
console.log('UN ALTRO CONSOLELOG')

// TS è JS + tipizzazione
// TIPI DI DATO PRIMITIVI IN TS
// string
// number
// boolean
// undefined, null
// any

// i : permettono di assegnare IL TIPO ad una variabile
let student: string = 'Mario'
student = 'Stefano'
student = 'Valerio'

let myNum = 100
// myNum = 'Stefano' // <-- myNum è nato come number e morirà come number
// provare ad assegnargli un valore di stringa rompe la compilazione

// quest capacità di TS di AUTO-DETERMINARE il tipo di una variabile grazie
// al suo valore iniziale si chiama "TYPE INFERENCE"

let canDrive = true

// canDrive = 100
// student = true

let qualsiasi = true

// il tipo di any SPEGNE il controllo della tipizzazione di TS
// ... a quel punto, tanto vale scrivere JS :)
// dando a qualsiasi il tipo di any, la riga dopo raggiungerebbe il browser!
// -> esplosioni
// qualsiasi.map((el) => console.log(el))

// a cosa serve avere un editor perfettamente consapevole del tipo di ogni dato? :)

// TS è un altro paio di occhi che ad ogni step verifica il tipo del dato
// e vi restituisce quando mettete il "." tutti i metodi e le proprietà valide
// per quel tipo di dato
const arr = ['uno', 'due', 'tre']
const rMaiuscolo = arr.slice(1, 3)[1].split('')[1].toUpperCase()
console.log(rMaiuscolo)

const giveMeANumber = () => {
  return Math.floor(Math.random() * 11)
}
// TS ha capito che giveMeANumber torna SEMPRE un numero => number
console.log(giveMeANumber()) // numero tra 0 e 10

// const additionInJS = (num1, num2) => {
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     return num1 + num2
//   } else {
//     return 'Non sono stati forniti 2 numeri'
//   }
// }

// console.log(additionInJS(5, 6))

const additionInTS = (num1: number, num2: number) => {
  return num1 + num2
}

// console.log(additionInTS('5', '6')) // <-- non compila! :)
console.log(additionInTS(7, 8))
// console.log(additionInTS(10))

const addition = (num1: number, num2?: number) => {
  if (!num2) {
    return 0
  } else {
    return num1 + num2
  }
}

console.log(addition(3, 4))
console.log(addition(4))

console.log(addition(4))
