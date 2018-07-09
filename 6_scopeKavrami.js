/*
fonksiyon calıstırıldıgında 
fonksiyon içerisinde yeralan değişken çalışacaktır 
sebebi ise scope yani fonksiyonun kapsama alanı içinde çalışacaktır.

*/
var x="global değişken"
function scopeFonksiyon()
{
    var x="yerel değişken";
    console.log(x);
}
scopeFonksiyon();