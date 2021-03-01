var eta = parseInt(prompt("Quanti anni ha?"));

var km = parseFloat(prompt("Quanti chilometri dista la sua meta?"));

var intero = (km * 0.21);

var scontatoYoung = (intero - (intero * 0.2));

var scontatoOld = (intero - (intero * 0.4));

console.log(intero);

console.log(scontatoYoung);

console.log(scontatoOld);

if (eta < 18){
  document.getElementById("prezzo").innerHTML = "€ " + (Math.round(scontatoYoung * 100) / 100);
} else if (eta > 65) {
  document.getElementById("prezzo").innerHTML = "€ " + (Math.round(scontatoOldg * 100) / 100);
} else {
  document.getElementById("prezzo").innerHTML = "€ " + (Math.round(intero * 100) / 100);
}
