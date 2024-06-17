/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//variabile bottone x iniziare a giocare
const StartBotton= document.getElementById("wanna-play");


// variabile da cui andremo a togliere una classe
let PlayTable=document.getElementById("playtable");

//variabile per inserire i numeri generati
let NumbersPlay=document.getElementById("table-game");
 let Num = Random (100,1,5);
 NumbersPlay.append(Num)
 console.log(Num);
//evento a click scompare il bottone ed appare il gioco
StartBotton.addEventListener("click",function () {
    PlayTable.classList.remove("hide");
    StartBotton.classList.add("hide");
    setInterval(function(){NumbersPlay.classList.add("hide")} ,30000);
})






// Funzione genera numeri casuali
function Random(max,min,Numberelement) {
let RandomNum=[];
let i=0;
while (i < Numberelement) {
     let Numbers= Math.floor((Math.random()* (max-min))+min);
    if (!RandomNum.includes(Numbers)) {
         RandomNum.push(Numbers); 
         i++;
    }
    
} 
    return RandomNum;
}


// funzione stampa in
function Stampa() {
    
}








