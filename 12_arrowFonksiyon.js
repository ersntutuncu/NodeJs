/**
 * direkt return fonksiyonu içeren yapılarda
 * kullanlan yapıdır.
 * süslü parantez ve return yapısı sistemden cıkarılmıstır.
 */
var arrow=(sayi1,sayi2)=>
 sayi1+sayi2;

console.log(arrow(12,15));
console.log("-----------------");
/**
 * tek parametreli yapılarda ise fonsiyonda 
 * parametre fonksiyonuda kullanılmaz 
 * direk değişken ismi  yazılabılır
 */
var arrow1 = sayi3 =>
sayi3+5;
console.log(arrow1(12))
