



      /****** F U N C T I O N S *******
      * * *  CARTA SASSO FORBICE * * *
        IL GIOCO INTERO FUNZIONANTE :)
      ================================*/

var score = {/*se una variabile contiene piu di un valore è un OGGETTO*/
  userScore: 0,
  cpuScore: 0
}

var userPick;
var cpuPick;

var allOptions = [
  {
    name: "stone",
    image: "assets/sasso.png"
  },
  {
    name: "paper",
    image: "assets/carta.png"
  },
  {
    name: "scissors",
    image: "assets/forbice.png"
  }

]

var posibleUserPick = document.getElementsByClassName("user-choice");/*Il *getElementsByClassName(" qui scriviamo il nome della classe che ci interessa")* ci permette di selezionare un oggetto del HTML a noi necessario e ci lo restituisce sotto forma di un ARREY list. in questo caso di selezionare elemento necessario dalla nostra lista dei elementi html qui sopra*/

for (var i = 0; i < posibleUserPick.length; i++) {/*ciclo FOR (1: dichiariamo una variabile, 2: la condizione del ciclo, 3: aumentiamo la var i di uno con operatore ++) */
    posibleUserPick[i].addEventListener("click", onUserPick)/*addEventListener è praticamente un programma che controlla e registra nel JS ogni ezzione effettuata dal utente e su quale elemento, lo registra al suo interno(vedi lezione 11(selezionare elementi HTML) di corso di introduzzione JS ) e con getElementsByClassName("nome della classe") lo trasmette al HTML. EventListener("due eventi possibili") prende in input 2 eventi, il primo è un CLICK o un SCROLL o comunque azione del utente, e secondo una funzione, cioè un'azione che deve esseguire*/
}

function onUserPick() {/*con questa funzione registriamo la scelta del utente, con la funzione generateCpuPick(); facciamo scegliere al pc, con la funzione whoWon facciamo il confronto tra due scelte e verifichiamo chi ha vinto*/
  userPick = this.dataset.name;/* in pratica il ** THIS ** aquesisce il valore del evento che fa l'utente (come per esempio cliccare su un oggetto)(vedi lezione n12 di interazione tra js e html, corso base js )  */
  generateCpuPick();
  var cpuPickImage = "<img src='" + cpuPick.image + "' />";
  var cpuPickText = "<h3> I have chosen: " + cpuPick.name + "</h3>";
  /*come aggiungere un azzione dal JS verso HTML*/
  document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText; /*in questo modo andiamo a richiamare id del html chiamato "result" (lezione 16 corso base JS)*/
  document.getElementById("result").innerHTML = whoWon();/*grazie a questo getElementById andiamo peticamente a collegare il click del utente alla funzione whoWon */
  document.getElementById("player-score").innerHTML = score.userScore; score.userScore
  document.getElementById("cpu-score").innerHTML = score.cpuScore;

}

function generateCpuPick(){
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];/*in questa funzione facciamo in modo che il **cpuPick**(il pc) sceglie un'opzione autonomamente. Math.floor per arotondare il num per diffetto, Math.random per scegliere un numero a caso tra quelli presenti nel arrey. la proprietà **LENGTH** ci restituisce la lunghezza del array, in questo modo la funzione va a scegliere una delle opzioni possibili e presenti nel arrey list. */
}

function whoWon(){/*con questa funzione facciamo capire al pc qundo vince utente e quando vince user*/
      if (userPick==cpuPick.name) {
        return "you have balanced";
          }else {
            if (userPick=="stone") {
            if (cpuPick.name=="scissors") {
              score.userScore++;/*richiamiamo il nostro oggetto dichiarato prima*/
              return "you won!";/*return ferma il proseguimento del codice se la condizione si è verifficata*/
            }else {
              score.cpuScore++;
              return "you lost";
            }
          }
            if (userPick=="paper") {
            if (cpuPick.name=="stone") {
              score.userScore++;
              return "you won!";
            }else {
              score.cpuScore++;
              return "you lost";
            }
          }
            if (userPick=="scissors") {
            if (cpuPick.name=="paper") {
              score.userScore++;
              return "you won!";
            }else {
              score.cpuScore++;
              return "you lost";
            }
          }
        }
      }
