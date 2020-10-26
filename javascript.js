// Campo Minato

// SETUP E GEN BOMB

var numeroMax = 100;
var possibilità = 84; // 100 - 16 bombe
var listaBombe = []; // numeri vietati (bombe)
var numeriConsentiti = []; // numeri consentiti inseriti dall'utente
var utente = 0; // scelta numero utente


// Bombe: 16 numeri random univoci

while(listaBombe.length < 16) {
  // ottenere numero random
var numeroBomba = numeroRandom(numeroMax);
  // push solo se non già presente
if(listaBombe.includes(numeroBomba) === false ) {
  listaBombe.push(numeroBomba);
  }

}

// main Loop
// loop principale del gioco

while( (numeriConsentiti.length < possibilità) && (listaBombe.includes(utente) !== true ) ) {
// scelta utente
utente = parseInt( prompt('Inserisci un numero da 1 a ' +  numeroMax).trim() );
while(utente < 1 || utente > numeroMax || isNaN(utente) ) {
  utente = parseInt ( prompt('Valore non valido. Inserisci un numero da 1 a ' + numeroMax.trim() ) );
  }

console.log('Scelta Utente', utente);

// Controllo numero immesso
controlloNumero(utente);

// raffronto possibilità
if ( numeriConsentiti.length === possibilità ) {
  alert('Hai vinto');
  }
}

console.log('GAME OVER');
console.log('Lista numero validi inseriti:', numeriConsentiti);
console.log('Tentativi riusciti', numeriConsentiti.length);

// FUNCTIONS

// generazione numeri random
function numeroRandom(max) {
  return Math.floor( Math.random() * max ) + 1;
}

// Controllo numero utente
function controlloNumero(numero){
  // se non è presente nella lista Bombe
  if(listaBombe.includes(numero) === true) {
    alert('Hai perso :( Hai provato con successo ' + numeriConsentiti.length + ' volte prima di trovare la bomba' );
  }
  // Se non è già stato inserito in precedenza
  else if (numeriConsentiti.includes(numero) === true){
    alert('Numero già inserito, inserirne un altro');
  }
  // Se non è stato inserito
  else if (numeriConsentiti.includes(numero) === false){
    numeriConsentiti.push(numero);
  }


}
