//Task 1 - click hadisesinde inputlarda olan ededlerin musbet,menfi ve ya birinin menfi olmaqinin yoxlanilmasi



// var myButton = document.querySelector(".my-button");

// myButton.addEventListener("click",function(){


//     var firstNumber = Number(document.getElementById("number-first").value);
//     var secondNumber = Number(document.getElementById("number-second").value);

//     if(firstNumber>0 && secondNumber>0){
//         console.log("Her iki reqem musbetdir");        
//     }
//     else if(firstNumber<0 && secondNumber<0){
//         console.log("Her iki reqem menfidir");
//     }
//     else{
//          console.log("Bir reqem menfidir");

//     }
//     // else if(firstNumber<0 || secondNumber<0){
//     //     console.log("Bir reqem menfidir");
//     // }
// });


//Task-2

// function numberOddEven(){
//     for(var number = 1;number<=30;number++){
//         if(number%2==0){
//             console.log(`${number} - Cut`);
//             //console.log(number + " - Cut");
//         }
//         else{
//             console.log(`${number} - Tek`);
//            // console.log(number + " - Tek");
//         }
//     }
// }

// numberOddEven();




//Task-3 ededin sade olub olmadiqini yoxlamaq
// var myButton = document.querySelector(".my-button");

// myButton.addEventListener("click",function(){

//     var number = Number(document.getElementById("number-first").value);
//     var isSimple = false;

//     for(var i = 2;i<number;i++){
//         if(number%i==0){
//            isSimple=true;
//         }
//     }

//  if(isSimple==false){
//         console.log("Sade ededdir");
//     }
//     else{
//         console.log("Sade eded deyil");
//     }


// });

//Task-4
//1-100 araliqinda 3e ve 5e bolunen ededlerin cemi

// function SumNumbers(){
//     var total = 0;
//     for(var i = 0;i<=100;i++){
//         if(i%3==0 && i%5==0){
//             total+=i;
//         }      
//     }
//     return total;
// }
// console.log(SumNumbers());


//Task -5 
//Verilen metnin tersine cevrilmesi

// function ReverseString(text){
//    var reverseText = "";
//     for(var i = text.length-1;i>=0;i--){
//         reverseText+=text[i];
//     }
//     return reverseText;
// }
// console.log(ReverseString("Salam dskjdsfdsa,f LDKPOASJDASKJD"));

var array = [44.5,"Salam","Alma","Book",85,56,34,"Heyva"];


//Task - 6
//Gonderilen arrayin string olan itemlarinin tersine cevrilmesi
// function ReverseArrayItem(arr){
//     for(var item of arr){
//         if(typeof(item)=="string"){
//             console.log(ReverseString(item));
//         }
//     }
// }

//ReverseArrayItem(array);




//Task - 7
//Arrayin reqemlerinin toplanmasi
// function SumArrayItems(arr){
//     var total = 0;
//     for(var item of arr){
//         if(typeof(item)=="number"){
//             total+=item;
//         }
//     }
//     return total;
// }
// console.log(SumArrayItems(array));

//Task- 8
//Arrayin reqemlerine uygun ededi ortanin hesablanmasi

function SumArrayItems(arr){
    var total = 0;
    var count = 0;
    for(var item of arr){
        if(typeof(item)=="number"){
            total+=item;
            count++;
        }
    }
    return total/ count;
}
console.log(SumArrayItems(array));

