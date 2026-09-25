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
//zad5
let g = parseFloat(prompt("podaj 1 liczbe"));
let polekwadratu = g*g;
document.writeln(`<p>pole kwadratu : ${polekwadratu}</p>`);
//zad6
let h = parseFloat(prompt("podaj 1 liczbe"));
let i = parseFloat(prompt("podaj 2 liczbe"));
let j = parseFloat(prompt("podaj 3 liczbe"));
let poleprostopadloscianu = 2*(h*i+i*j+h*j);
document.writeln(`<p>pole prostopadłościanu : ${poleprostopadloscianu}</p>`);
//zad7
let k = parseFloat(prompt("podaj 1 liczbe"));
let polekola = Math.PI* Math.pow(k *2);
let obwodkola = 2*Math.PI*k;
document.writeln(`<p> pole koła : ${polekola}</p>`);
document.writeln(`<p>:obwód koła ${obwodkola}</p>`);
//zad8
const cenabenzyny =7.81;
let km = 360;
let ilelitrow =  8.0 / 100.0;
let price = cenabenzyny * ilelitrow*360.0;
document.writeln(`<p>:koszt to ${price}</p>`);
//zad9
let trasa = parseFloat(prompt("podaj długość"));
let spala = parseFloat(prompt("podaj ile spala"));
let cena = parseFloat(prompt("podaj cenę paliwa"));
let kosztprzejazdu = cena * spala * trasa;
document.writeln(`<p>:koszt przejazdu to ${kosztprzejazdu}</p>`);
