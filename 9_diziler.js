/**
 * diizlerde işlem yaparken direk diziyi cıktı olarak alabiliriz
 * ama dizi elemanları uzerınde işlem yapmak için genelde dongu 
 * yapıları kullanılmaktadır.
 * foreach kullanımı basıt ve kısa dongu yapısıdır.
 * item nesnesi uzerinden butun verılere ulaşabiliriz
 */

var dizi=["ali",24,"ahmet",25]
console.log(dizi)
console.log("---------------------")
for(var i=0;i<dizi.length;i++)
{
   console.log( dizi[i])
}
console.log("---------------------")
dizi.forEach(function(item)
{
    console.log(item)
})