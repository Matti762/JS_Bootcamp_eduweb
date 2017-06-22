var ZakProd = prompt("Podaj liczbę zakupionych produktów:")

var znizka 
var cena = 20
var cenaObnizona

if(ZakProd <5){
znizka = 1.00;
} else if((ZakProd >=5) && (ZakProd <= 20)){
znizka = 0.95; 
} else if((ZakProd >=21) && (ZakProd <= 50)){
znizka = 0.90; 
} else if((ZakProd >=51) && (ZakProd <= 100)){
znizka = 0.85; 
} else if((ZakProd >100)){
znizka = 0.80; 
}
cenaObnizona = cena * znizka;
console.log('Podstawowa cena produktu to '+ cena +'zł, po obniżce to '+ cenaObnizona+'zł');