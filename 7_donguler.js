
console.log("------------For---------------")
/*belirlenen kosula kadar donen sonlu dongudur */
for(var i=0;i<10;i++)
{
    console.log(i);
}

console.log("------------ While---------------")
/*belirlenen kosul boyunca bazen sonlu bazen sonsuza kadar donebilir
başlangıcta sart kontrol edilir eğer sağlanırsa çalışır.yoksa hiç dongu başlamaz
*/
var j=0;
while( j<10)
{
    
    console.log(j);
    j++;
}
/*while dongusunden farklı olarak  once dongu çalısır 
sonra sart kontrol edilir while gibi oda sonsuza kadar donebilir*/
console.log("------------do While---------------")
var k=0;
do
{
    console.log(k);
    k++;

}while(k<10)