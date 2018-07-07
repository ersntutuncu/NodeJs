/*
normal sartlar altında 
ilk çalışması gereken sıra11 sıra22 sıra33 iken once 
sıra33 sıra22 ve sıra11 çalışmaktadır
bunun sebebi nodejs asenkron calısma yapısına sahıp oldugu için 
hemen altındaki fonksiyonda ise callback fonksiyonu dahil edildiği için 
calısm asıralı olacaktır
*/

function sıra11()
{
    setTimeout(()=>
{

    console.log("fonksiyon 11")
},3000)
   
}
function sıra22()
{
    setTimeout(()=>
    {
    
        console.log("fonksiyon 22")
    
    },2000)
   

}

function sıra33()
{
    setTimeout(()=>
    {
    
        console.log("fonksiyon 33")
        
    },1000)
   
   
}
sıra11()
sıra22()
sıra33()
function sıra1(callback)
{
    setTimeout(()=>
{

    console.log("fonksiyon 1")
    callback(sıra3)
},3000)
   
}
function sıra2(callback)
{
    setTimeout(()=>
    {
    
        console.log("fonksiyon 2")
        callback()
    },2000)
   

}
function sıra3()
{
    setTimeout(()=>
    {
    
        console.log("fonksiyon 3")
        
    },1000)
   
   
}
sıra1(sıra2)