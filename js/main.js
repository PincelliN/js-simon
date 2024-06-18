/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//variabile bottone x iniziare a giocare
const StartBotton = document.getElementById("wanna-play");

// variabile da cui andremo a togliere una classe
let PlayTable = document.getElementById("playtable");

//variabile per inserire i numeri generati
let NumbersPlay = document.getElementById("table-game");

//variabile send
let Send = document.getElementById("send-result");
//variabile input
let NumberAnswer = document.querySelector("input");
// genero una array con i numeri randomici
let Num = Random(100, 1, 5);
console.log(Num);


//Variabile intervallo
let Time;
//Stampo in pagina l'array dei numeri
NumbersPlay.append(Num);

//evento a click scompare il bottone ed appare il gioco
StartBotton.addEventListener("click", function () {
  //aggiungo e tolgo diplay non alle parti che mi interessano
  PlayTable.classList.remove("hide");
  StartBotton.classList.add("hide");

  // setto un intervallo di tempo dopo il quale verra aggiunta e rimossa la classe hide
  // 30 secondi dovrebbero corrispondere a 30 *1000
  
  Time= setInterval(function () {
    NumbersPlay.classList.add("hide");
    Send.classList.remove("hide");
    NumberAnswer.classList.remove("hide");
  }, 20000);

});


// variabili che andra a contenere  i numeri inseriti dal utente
const Answer = [];
console.log(Answer);
// Varibile  utilizata per il punteggio
let punteggio = 0;


//ad ogni click vado a leggere il value del input 
Send.addEventListener("click", function () {

  

  let NumberUser = parseInt(document.querySelector("input").value);
  //aggiungo solo se il numero del utente non è stato inserito già dal utente
  if (!Answer.includes(NumberUser) && !isNaN(NumberUser) ) {
    Answer.push(NumberUser);
    //se il numero inserito dal utente corrisponde ad uno di quelli cusuali allora aumento il punteggio di 1
    if (Num.includes(NumberUser) ) {
      punteggio++;
    }
    //azzero il value del input
    NumberAnswer.value = "";
  }
  console.log(Answer);
  console.log(punteggio);
  //se la lunghezza del array delle risposte inserite è uguale a 5 allora faccio sparire l'input e il bottone e stanpo il punteggio finale
  if (Answer.length === 5) {
    Send.classList.add("hide");
    NumberAnswer.classList.add("hide");
    clearInterval(Time);
    document.getElementById("result").innerHTML =
  " Hai totalizato un punteggio di" + " " + punteggio ;

  }
});












function UserNumber(Numberelement) {
  console.log(UserNumbers);
  const UserNumbers = [];
}

// Funzione genera numeri casuali
function Random(max, min, Numberelement) {
  let RandomNum = [];
  let i = 0;
  while (i < Numberelement) {
    let Numbers = Math.floor(Math.random() * (max - min) + min);
    if (!RandomNum.includes(Numbers)) {
      RandomNum.push(Numbers);
      i++;
    }
  }
  return RandomNum;
}

// funzione stampa in
function Stampa() {}
