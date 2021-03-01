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

document.getElementById("km1").innerHTML = km + " km";

document.getElementById("km2").innerHTML = km + " km";

var tempo = Math.round(km / 1.67);

console.log(tempo);

document.getElementById("tempo").innerHTML = tempo + " minuti";
