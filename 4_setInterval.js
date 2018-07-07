/*
setInterval fonksiyonu ise 
setTimeout fonsiyonundan faklı olarak
belirtilen surede surekli çalıma göstermektedir
yani setTimeout bir kere çalışıp dururken 
setİnterval fonksiyonu sureklı çalışma 
göstemketedir.
programı durdurmak için ise clear interval kullanılır.

*/
var sayi=0;
setInterval(() =>
{
    sayi++;
    console.log("setInterval Fonksiyonu",sayi)

},1000)
var sayi=0;
var IntervalDurdurma=setInterval(()=>
{
    sayi++;
    if(sayi==5)
        {
            clearInterval(IntervalDurdurma)
        }
        console.log("setInterval Fonksiyonu Durdurma",sayi)
},1000)