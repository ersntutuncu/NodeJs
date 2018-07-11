/**
 * program çalısma anında olabılecek hatalara karsı onlem alma 
 * işlemleridir
 * ornek matematikte sıfıra bolunme hatası gıbı
 * try,catch,throw,finally
 * Not kod blokları ayrı ayrı çalıştırılmalıdır.
 */
console.log("-----------throw-------------")
var isim="ersin";
if(isim!="ersin")
{
         throw Error ("İstenmeyen sonuc");
        
         
}
console.log(isim)
console.log("-----------try-catch-------------")
try{
    var sayi1=1;
     var sayi2=2;
     var sonuc=sayi2/sayi1;
    if(sonuc===2)
    {
        console.log(sonuc)
    }
    else
    {
        throw Error ("sayi sıfıra bolunemez")
    }

}
catch(Error)
{
    console.log(Error);
}
finally{
    console.log("hata olsada olmasada  Finally kod blogu çalısır")
}