/**
 * standart JavaScrip fonksiyon yapısı
 */

function ekle ()
{
    console.log ("deneme")
}
ekle();
// parametresiz return edilmeyen fonksıyon
function ekleme ()
{
    return "deneme return"
}
console.log("-------------")
console.log(ekleme())

function toplama (sayi ,ad )
{
    return sayi+2+"/"+ad
}
console.log("-----------------")
console.log(toplama(3,"ersin"))//parametreli fonksıyon yapısı
var fonksıyon=function()
{
    return "değişken tiplii fonskiyon";
}
console.log("----------------")
console.log(fonksıyon())