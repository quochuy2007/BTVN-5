var array=[10,20,15,25,30]
var a=0
var tong=0
while(a<array.length){
    tong=array[a]+tong;
    a++;
}
console.log(tong)
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
    console.log(array[i])
    }
}

var productsListElement=document.getElementsByClassName("products-list")
console.log(productsListElement)
var firstProductElement=document.getElementsByClassName("product")
console.log(firstProductElement)
var buttonElements=document.getElementsByClassName("btn")
console.log(buttonElements)
