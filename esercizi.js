// const list=["ksdanf@gmail.com","michelecaruso@gmail.com","paoloserace@gmail.com"]

// let mailUtente=prompt("inserisci la tua mail:")

// isIn = false
// for(let i = 0; i <= list.length; i++){
//     if(list[i] === mailUtente){
//         isIn=true
//     }
// }

// if(!isIn){
//     console.log("non sei nella lista")
// }else{
//     console.log("sei nella lista")
// }
// 


// secondo esercizio

// function tiro(min,max){
//     risultato=(Math.floor(Math.random()* (max-min))+min);
//     return risultato;
// }

// let tiroUtente= tiro(1,100)

// let tiroComputer= tiro(1,100)

// if (tiroUtente > tiroComputer){
//     console.log(tiroComputer + " " + "il tiro dell'avversario")
//     console.log(tiroUtente+ " " + "il tuo tiro")
//     console.log("Complimenti,hai vinto")
// }else if (tiroUtente < tiroComputer){
//     console.log(tiroComputer + " "+"il tiro dell'avversario")
//     console.log(tiroUtente+ " "+"il tuo tiro")
//     console.log("Hai perso")
// }else{
//     console.log(tiroComputer +" "+ "il tiro dell'avversario")
//     console.log(tiroUtente+ " "+"il tuo tiro")
//     console.log("E' un pareggio")
// }


// esercizio snack 5 (bonus)

// const lista=[]

// let x= parseInt(prompt("quanti numeri vuoi inserire?"))

// function daInserire(lunghezza){
//     for(let i=0; i<lunghezza;i++){
//         let numero=parseInt(prompt("insrisci un numero"));
        
//         if (!isNaN(numero) && numero % 2 != 0){
//                 lista.push(numero);
//         }
//     }
// }

// daInserire(x)
// console.log(lista)

// esercizio snack 6 (bonus)

function elevazioneCubica (min,max){
    for(let i=min; i <= max; i++){
        let numero = (i * i * i);
        console.log(numero);
    }
}

let x= parseInt(prompt("Primo numero da elevare:"))
let y= parseInt(prompt("Ultimo numero da elevare(non puà essere più piccolo del primo):"))

while (x>y) {
    y = parseInt(prompt("Ultimo numero da elevare(non puà essere più piccolo del primo):"))
}

elevazioneCubica(x,y)