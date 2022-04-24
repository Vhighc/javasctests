// var links = document.getElementsByTagName("a")

// for (i = 1; i < links.length; i++){

//     console.log("This is link number" + i)
// }
// document.write("all links are now looped")

// function getAverage (a,b) {

//     var average = (a+b) / 2;
//     console.log (average);
//     return average;
// }
// var myResult = getAverage(7,12);


// function logResult () {

//     console.log ("the average is " + myResult + " inside the function");
// }
// logResult ();

// var a = "apple";
// var b = 5;

// if (!isNaN(a)) {

//     console.log ("meaning of life is " + (a * b));
// }

// var myString = 'i\'m a"ninja fun" string';

// console.log (myString.indexOf("string"))

// if (myString.indexOf("string")=== 12){

//     console.log("the word string is in the");
// }

// if (myString.indexOf("ninja") === -1){

//     console.log ("the word ninja is not in the string");
// }else {

//     console.log("the word ninja starts at position " + myString.indexOf("ninja") );
// }

// var myArray  = []
// myArray [0] = 99
// myArray [1] = 10
// myArray [2] = true
// myArray [3] = "true"

// console.log (myArray)

// myArray[3]= "false"
// console.log (myArray.reverse())

// let myCar = new Object();

// myCar.speed = 50;
// myCar.driver = "victor";
// myCar.drive = function() {console.log("now driving");};

// console.log(myCar.drive());
// var myCar2 = {
//     maxSpeed: 90,
//     driver: "vhighc",
//     drive:function(speed, time){
//         console.log(speed * time);
//     },
//     light:function(){
//         console.log("full light");
//     } 
//     };

// console.log(myCar2.driver);
// console.log(myCar2.drive(70, 2));

// let num = [22, 34, 13, 88, 99];
// for( i of num){
    
// }
// if(num % 2 == 1){
//     console.log("This is odd")
// } else {
//     console.log("This is even")
// }


// var removeCartItemLins = document.getElementsByTagName('a')
// console.log(removeCartItemLins)


// for (var i = 0; i < removeCartItemLins.length; i++) {
//   var lin = removeCartItemLins[i]
//   lin.addEventListener ('click', function() {
//   console.log('clicked')
//   })
// }

var removeCartItemLins = document.getElementsByTagName('a')
console.log(removeCartItemLins)


for (var i = 0; i < removeCartItemLins.length; i++) {
  var lin = removeCartItemLins[i]
  lin.addEventListener ('click', function(event) {
  var linClicked = event.target
  linClicked.remove()
  })
}
