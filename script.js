//zad1
let a = parseFloat(prompt("podaj 1 liczbe"));
let b = parseFloat(prompt("podaj 2 liczbe"));
let c = parseFloat(prompt("podaj 3 liczbe"));

let suma = a+b+c;

document.writeln(`<p>suma ${a} +${b}+${c}=${suma}</p>`);

//zad2
let srednia = suma/3;
document.writeln(`<p>średnia: ${srednia}</p>`);
//zad3
let d = parseFloat(prompt("podaj 1 liczbe"));
let e = parseFloat(prompt("podaj 2 liczbe"));
let suma2 = d+e;
let roznica = d-e;
let iloczyn = d*e;
document.writeln(`<p>suma : ${suma2}</p>`);
document.writeln(`<p>różnica : ${roznica}</p>`);
document.writeln(`<p>iloczyn : ${iloczyn}</p>`);

//zad4
let f = parseFloat(prompt("podaj 1 liczbe"));
let pierwiastek = Math.sqrt(f);
document.writeln(`<p>pierwiastek : ${pierwiastek}</p>`);
