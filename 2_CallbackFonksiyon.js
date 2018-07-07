/*
Calback fonksiyonları
yazmıs oldugumuz 1. fonsiyonumuzu 
2.fonksiyonumuza parametre olarak 
verme işlemi denir.
Nodejs alışılmıs javaScript yapısından farklı olarak 
proje calısma mantıgı:bir fonsiyon calısıp bitmden diğer 
fonksiyonu calıstırabilir.
Yani ASENKRON bir yapıya sahiptir
*/
console.log("--------Fonksiyon-----------")
function birinci(text)
{
console.log(text)
}

function ikinci(text)
{
    console.log(text)
}
birinci("ilk fonsiyon")
ikinci("ikinci fonksiyon")
/**-------------------------
 *yukarıda normal yazım kuralına göre işlem yapılırken 
 * burada Callback fonsiyon örneği yer almaktadır
 */
console.log("--------Callback-----------")
function birinci1(text,Callback)
{
console.log(text)
Callback()
}
function ikinci1()
{
    console.log("ikinci fonksiyon")
}
birinci1("ilk fonsiyon",ikinci1)

