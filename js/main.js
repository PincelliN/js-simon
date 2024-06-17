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
//Stampo in pagina l'array dei numeri
NumbersPlay.append(Num);

//evento a click scompare il bottone ed appare il gioco
StartBotton.addEventListener("click", function () {
  //aggiungo e tolgo diplay non alle parti che mi interessano
  PlayTable.classList.remove("hide");
  StartBotton.classList.add("hide");

  // setto un intervallo di tempo dopo il quale verra aggiunta la classe hide
  // 30 secondi dovrebbero corrispondere a 30 *1000
  setInterval(function () {
    NumbersPlay.classList.add("hide");
  }, 10000);
});
const Answer = [];

let punteggio = 0;

Send.addEventListener("click", function () {
  let NumberUser = parseInt(document.querySelector("input").value);
  if (!Answer.includes(NumberUser)) {
    Answer.push(NumberUser);
    if (Num.includes(NumberUser)) {
      punteggio++;
    }
    NumberAnswer.value = "";
  }
  console.log(Answer);
  console.log(punteggio);
  if (Answer.length === 5) {
    Send.classList.add("hide");
    NumberAnswer.classList.add("hide");
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
