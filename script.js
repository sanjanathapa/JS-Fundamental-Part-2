//to write a secure javascript code we use a 'strict mode'. it is a special mode that we can activate in JS.
// so to activatae it , just write 'use strict' by doing this we will activate the strict mode for the  entire script.
//basically it helps us introduce the bugs into our code. becz of 2 reasons .1. strict modes forbids us to do certain things and 2, it will actually create visible error for us.

'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) 
console.log("Sanjana");

//another thing that strict mode does, is to introduce a short list of variables names that are reserved for 
//the feature that might be added to the language a bit later in the future.
//let private = 7896;
//strict mode reserves these words so we cannot use them for variables
//let interface = "audio";





//***********************Functions******************** */
 // function is simply a piece of code that we can reuse over and over again in our code. its littlr bit like a variable, 
 //but for whole chunks of code.
 //a variable holds a value but a function can hold one or more complete lines of code.
 //function declaration with function keyword

 function logger() {
    console.log("my name is sanjana")

 }
//we can use this functin as many times as we want. so to use this func. we simply
//write the function name followed by a paranthesis().

//calling / running / invoking the function
logger();
logger();
logger();
//so usually when we write a function, we also passs data into a function
//and additionally, a function can also return data as well,
//not only reuse of code, but it can also receive data and return data back

function fruitProcessor(apples, oranges){
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
   return juice
}

//basically once this func. has been executed, this following code here is then replaced by the result of the function. 
//and in this case its gonna be the juice string that we produced.

fruitProcessor(5, 0);
console.log("--------------------", fruitProcessor(5,0));

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

//we can reuse the func, with different input values
//and then get a different output. so

const appleOrangeJice = fruitProcessor(2,4);
console.log("------------", appleOrangeJice);

//not all func. need to return something and not all func. need to accept parameters

//******************************Functions Declarations vs Expressions******* */
//1.) -----------Function declaration--------------------


const age1 = calcAge(1999);

function calcAge(birthYear){
   // const age = 2022-birthYear;
   // return age; or
   return 2022 - birthYear;
}
//const age1 = calcAge(1999);
console.log("----asas",age1);

//2.) ----------Function Expressions---------------------------

//const age2 = calcAge2(1999)  //will throw an error as cant call a function before they are defined.//
const calcAge2 = function (birthYear) {
   return 2022-birthYear;
}
const age2 = calcAge2(1999)
console.log("-------------------------", age2)

//The big difference btwn these two function is that we can actually call function declarations before they are 
//defined in the code( in the function declaration). But if we attempt to the func. expression and will throw a
//error. beause of a process called Hoisting.


//-------------------------------ARROW FUNCTION---------------------------------
//arrow functin is simply a spaecicl form of function expression that is shorter and therfore faster to write.
//  this fat arrow (=>) indicates 'what we want to return in arrow functoin.
//the another fundamental difference btwn the arrow func and the more traditional functions.
//so its the fact that that arrow function do not get a so called "this" keyword

const calcAge3 = birthYear => 2022- birthYear;
const age3 = calcAge3(1999);
console.log("-----------------------", age3)
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2022 - birthYear;
   const retirement = 60 - age;
   //return retirement;
   console.log(`${firstName} retires in ${retirement} year`)
}

yearsUntilRetirement(1999, "sanjana")



//--------------Functions calling Other Functions-------------------
function fruitProcessor(apples, oranges){
   const juice = `juice with ${apples} apples and ${oranges}`
    return juice
   //console.log("samkakamkamkma", juice)
}
console.log("----------------",fruitProcessor(2,3));


const calcAgee
 = function(year){
   return 2037 - year;
   //console.log( "+++++++++++++++",2022-year)
}


const yearsUntilRetirements = function(birthYear, Name) {
   const age=  calcAgee
   (birthYear);
   const retirement = 65- age;
   return retirement;  
   //console.log("----------", retirement) // here console will get ignored, as after return statement it will axit immediately from the function.
   //to execute this console we need to write it before the return keyword.
}

const ans = yearsUntilRetirements(1999, "sanjanaThapa")
console.log("=======================", ans)
const anss = yearsUntilRetirements(1970, "JonasThapa")
console.log("=======================", anss)
//--NOTE ---the return keyword will actually immediately exit from the finction. so it will first return the value
//that we tell it to return


//-************************Coding challenges----
//1. gonna start with calAverage function, that should be an arrow function which recieves any 3 values as an input,
// so that it can calculate the average value
const calAverage = (a,b,c) => (a+b+c)/3;
//console.log(calAverage(3,5,7));    

//now use this function  to calculate the average for both teams
//Test 1
let scoreKoalas= calAverage(65, 54, 49)
let scoreDolphins= calAverage(44,23,71)
console.log("----------------",scoreDolphins,"--------------",scoreKoalas)

const checkWinner = function(avgDolphins, avgKoalas){
   if(avgDolphins >= 2*avgKoalas){
      console.log(` Dolphins win (${avgDolphins} vs ${avgKoalas}) `)
   }
   else if( avgKoalas >= 2*avgDolphins){
      console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
   }
   else{
      console.log("no team wins...")
   }
}
checkWinner(scoreDolphins, scoreKoalas)
//here checkWinner function is completely independent of these score values that we calculated earlier. so thats why
// we can simply call this function with completely different values. means function doesnt care from where these values come from.
// Its a standalone function. we can just plugin random numbers here and then call it. for example
checkWinner(576, 111)

scoreKoalas = calAverage(85, 54, 41),
scoreDolphins =  calAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas)

//---------------------------------------------Introduction to Arrays----------------------------------------------
//***************************************************************************************************************** */
//the two most important data structures atleast in javascript are, Arrays and Objects.

const friends = ["sanjana", "Ujjwal", "Sharma", "Thapa"]
console.log(friends)
const years = new Array(1997, 1999, 1995, 1998)
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length -1])

friends[2] = "Bharti";
console.log("-------Array-------", friends)

//now what we cannot do is to actually replace the entire array . exapmle
//friends = ["Deepika", "padukon"]

//an array can actually hold values with different types

const lastName = "Gourav"
const kavi = [lastName, 2022-1999, friends]
console.log("---------------double Array---", kavi)

//Any position of the array simply needs to be an expression . something that produces a vlue

const calculateAge = function (birthYear){
   return 2022- birthYear
}

const yearss = [1990,1967,2002,2010, 2018];
//we cannot do operations with arrays. yearss + 10 will give aur return a string to us.we cant do 2022 - yearss. 

console.log("-------------------", yearss)
//but we can still use the calculateAge func on the individual element of the array

const age9 = calculateAge(yearss[0]);
const age8 = calculateAge(yearss[1]);
const age = calculateAge(yearss[yearss.length - 1]);
//console.log(age9, age8, age)

const sanju = [calculateAge(yearss[0]), calculateAge(yearss[1]),calculateAge(yearss[yearss.length - 1]) ]
console.log("============================", sanju)

///Basic Array Operations
//js has some built in functions(like push, pop, unshift etc.)that we can basiclly apply directly on the arrays. 
//these are called methods. and we can think of methods as array  operations basically.

//1. Push method add elements to the end of an array.
const arr1 = ["abc", "def", "ghi","wer"];
const sss = arr1.push("jkl"); //as push is a func. and a func. returns something. so in this case push returns the length of the new array
console.log(arr1)
console.log("************", sss)

//unshift method to add elements to the beginning of the array
arr1.unshift("xyz");
console.log("-------------------------", arr1)

//2.Pop methods to remove last elements from arrays. we normally did not pass any argue in this method. 
//but it does return the removed element unlike push method.
 arr1.pop();
 console.log(arr1, "----------")
 const kk = arr1.pop();
 console.log("----------------------------------------------------------------", kk)

 //shift method to remove elements from the beginning of the arrays
arr1.shift()
console.log("@@@@@@@@@@@@@@@", arr1)

//now there is a very useful method which tells us in which position certain element is in the array

console.log(arr1.indexOf("def"))

//There is a similar method of the indexOf but which is bit more modern, so this one is an ES6 method and its called includes.
//so includes instead of returning the index of the element it simply returns the true and false.

//*******************and this method actually uses strict equality for this check. it doesn't do type coercion
arr1.push(23)
console.log(arr1.includes("abc"))
console.log(arr1.includes("23"))

if (arr1.includes("abc")){
   console.log("hii sanjana")
}


//--------------------------------------------CODING CHALLENGE------------------------------------------------------//
const calcTip = function(bill){
   return bill >= 50 && bill <= 300? bill*0.15: bill*0.2
}
//arrow function--------------just for knowledge
//const calcTip = bill => bill>= 50 && bill <= 300? bill*0.15: bill*0.2;
const bills =[125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("----tips", tips, "====bilss", bills)

//lets also complete the bonus question , in which we have to create an array which will have the sum of the bills and the tips
//const totals = bills + tips ; //we cant do any operation like this on array, it doesnt work like that, here this "+ operator" 
//will concatenate them.
//so thats is completeley useless. each of array will transformed into string 
//console.log("----tips", tips, "====bilss", bills, "---------totals", totals)
//so only thing we could do is to say that we want bills at position 0 + the tips at position 0, and so on

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("----tips", tips, "====bilss", bills, "---------totals", totals)


//************************************************************************************************* */
//**************************************Introduction to Objects************************************ */
//************************************************************************************************* */
//another data structure of JS is Objects.
//here these curly braces here are to define a new object. then we will fill up this object with key value pairs
const jonas = {
   firstName : "Sanjana",
   lastName : "Thapa",
   job : "developer",
   age : 2022-1999,
   friends : ["Sunita", "Karishma", "Rohit"]
};
console.log("-------objects--------", jonas)
//each of theses keys is also called a property. So this object called "jonas" has five properties. like property "firstName" has value "Sanjana" etc.
//there are many ways of creating objects. And this is the simplest way of writing object jonas. Using the curly braces like this
//is the easiest one and it is called the "object literal Syntax".
//we use array for more order data. and we use object for more unstructered data.


//--------------------------------------------------dot vs bracket notation---------------------------------------
//So how do we get data from an object?
//first way of getting a property from an object is using dot notation. and this dot actually an "Operator" which will 
//go to this "jonas" object and then retrieve to property with the name that we specified here.
console.log(jonas.lastName);
console.log(jonas["lastName"]);  //we can put expressions inside the bracket.

const repeatingPart = "Name";
console.log(jonas['first' + repeatingPart])
console.log(jonas['last' + repeatingPart])

const interestedIn = prompt('what do you know want to about jonas? choose between firstname, lastname, age, job , friends');
//console.log(interestedIn)
//now to retrieve or display the job i.e "teacher" has to be display or whatever the user choose.
//so,
//we cant do this like 
//console.log(jonas.interestedIn);
//Now instead of dot notation we can use bracket notation because then we can put any expression here,which in this case will be interestedIn.
console.log(jonas[interestedIn]);
//so this will give the correct answer becz of that expression inside the sqr bracket which gets evaluated.

//when we get undefined that means we know that undefined is a false value. so we can handle  this thing
if(jonas[interestedIn]){
   console.log(jonas[interestedIn])
}
else{
   console.log("wrong request! choose between firstname, lastname, age, job, friends")
};

//--------------------Now see how to add new properties to the object using dot and bracket notation.--------------
jonas.location = "India";
jonas["twitter"] = "@sanjana123";
console.log("---------final console----------", jonas)

//challenge
//"Sanjana has 3 friends, and his best friend is called Sunita".
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);


//-------------------------------------------------Objects Method--------------------------------------------------
//***************************************************************************************************************** */
//Func. is just another type of value. that means we can create a key value pair in which the value is a funtion. 
//and that then means that we can infact add functions to objects.  

const sharma = {
   firstName : "Sanjana",
   lastName : "Thapa",
   job : "developer",
   birthYearrr : 1991,
   friends : ["Sunita", "Karishma", "Rohit"],
   hasDriversLicenseee : true,

   // calcAge : function(birthYearrr){
   //    return 2037- birthYearrr
   //}

   // calcAgeee : function(){
   //    console.log("-------------", this)
   //    return 2037- this.birthYearrr; //inside this method the "this" method or keyword will point to "sharma" 
   // } 

   calcAgeee: function() {
      this.agee = 2037 - this.birthYearrr;
      return this.agee;
   }, 
   
   getSummary : function(){
      return `${this.firstName} is a ${this.calcAgeee()} year old ${sharma.job}, and he has 
      ${this.hasDriversLicenseee ? "a": "no"} driver's license `
   }


};
//any function that is attached to an object is called a method
//here calcAgeee is now not a regular variable but its a property of a sharma object.
//so here we need to function expression to create this method. so any function that is attached to an object is called a method.

//console.log(sharma.calcAge(1991));
//console.log(sharma["calcAge"](1991));

console.log(sharma.calcAgeee());

//we can acces the any property directly from the object"sharma. because in evry method, javascript give us access to a special variable called "this"
//"this" keyword or "this" variable is basically equall to the object on which the method is called, or it is equal to the object calling the method.
//so in this the object that is calling the method is sharma.

 console.log(sharma.agee);
 console.log(sharma.agee);
 console.log(sharma.agee);
//-----so instead of doing this multiple times, what we can do is to just calculate the age once, then store it in the object,and then whenever needed we can just retrieve the age as a property from the object(line no. 361).
//but we only needed to calculate the age once(line no. 375). and then aftfer that we can simply retrieve the property that we had already calculated before.


//---------small challenge-----------
//write a method called getSummary and this method should return a string which should kind of summarize the data about sharma, or any other person data.

//line no.366
// first we call the method of getSummary
console.log(sharma.getSummary());

//----------Coding Challenge #3---
const mark = {
   fullName : "Mark Miller",
   mass : 78,
   height : 1.69,
   calcBMI : function(){
      this.bmi = this.mass / this.height ** 2;
      return this.bmi
      }
};

const johan = {
   fullName :"John Smith",
   mass : 92,
   height : 1.95,
   calcBMI : function(){
      this.bmi = this.mass / this.height ** 2;
      return this.bmi
      }
};

console.log("*********************",mark.calcBMI());
console.log(mark.bmi)
johan.calcBMI();
console.log(johan.bmi)

if(mark.bmi > johan.bmi){
   console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${johan.fullName}'s BMI ${johan.bmi}`)
}
else if(johan.bmi > mark.bmi){
   console.log(`${johan.fullName}'s BMI ${johan.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
}


//*************************************************************************************************************** */
//******************************************Iteration : The For Loop********************************************* */
//*************************************************************************************************************** */
// console.log("lifting weight repetition 1 ")
// console.log("lifting weight repetition 2 ")
// console.log("lifting weight repetition 3 ")
// console.log("lifting weight repetition 4 ")
// console.log("lifting weight repetition 5 ")
//loop basically allows us to automate repetitive tasks.
//for statement or loop, which has a counter
//so the loop statement has 3 parts. 
//1. initial value of a counter. the counter is the value that will start here at number one and go all the way to number 5. so 
//lets call this counter rep (in for loop), which stands for repition. so create a variable called xyz. then use the ; and go to the next 2nd part.
//2nd part is a logical condition that is evaluated before each iteration of the loop. and if the conditon is true then 
//the next loop iteration will run. but if the condition false, then the condition will stops. 3rd part will be its increment to the counter variable
 
for(let xyz = 1; xyz <= 5; xyz++ ){
   //console.log("lifting weight repetition 1 ");
   console.log(`lifting weight repitition ${xyz}`);
 }


 //---------------------------------------Looping Arrays, Breaking and Contunuing------------------------------------
 const kaviArray = [
   "thapa" ,
   2022-1999, 
   "teacher",
   "Chef",
   ["nikki", "aish", "motu"],
   true
   ];

   //now we can use a for loop to loop through this array. lets we wanted to individually log every element of the array to the console.

   // console.log(kaviArray[0]);
   // console.log(kaviArray[1]);
   // ...
   // console.log(kaviArray[4]);
   //kaviArray[5] doesn't exit

   // for(let i = 0; i<5; i++){
   //    console.log(kaviArray[i])
   // }
//to make this hard coded value 5, we can use it dynamically means that value can get from javascript itself.

const types = [];

for(let i = 0; i < kaviArray.length; i++){
   //reading from kaviArray array
      console.log(kaviArray[i], typeof kaviArray[i]);

      //filling types of array
      //types[i] = typeof kaviArray[i];
      types.push(typeof kaviArray[i]) //another method of adding data
   }
   console.log(types)
  
  //types[0] = "string"
//what we did here is, only to read values from an array.

//create a new array based on the values of one original array. to do that create a new empty array outside of the loop.

//task 2. calculate the ages and store that age in the new array.

// const yearsss = [1991,2001,1969,1999,1995, 2005];
// const agessss = [];
// for(let i = 0; i < yearsss.length; i++){
//    agessss.push(2037-yearsss[i]);
// }
// console.log("--AGES---",agessss)

// 2 important statements for loops
//1. continue and 2. to break statement
//continue is to exit the current iteration of the loop and continue to the next one.
//break is used to completely terminate the whole loop.
//------only strings---
for(let i = 0; i < kaviArray.length; i++){
   if(typeof kaviArray[i] !== "string") continue;
   console.log(kaviArray[i], typeof kaviArray[i]);
}

//------break only with number element---
for(let i = 0; i < kaviArray.length; i++){
   if(typeof kaviArray[i] === "number") break;
   console.log(kaviArray[i], typeof kaviArray[i]);
}

//--------------------------------------Looping Backwards and Loops in Loops--------------------------------------
const gouravArray = [
   "thapa" ,
   2022-1999, 
   "teacher",
   "Chef",
   ["nikki", "aish", "motu"],
   ];
   for(let i = gouravArray.length-1; i>= 0; i--){
      console.log(i, "******************************************")
      const asd = gouravArray[i];
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", asd)
   }

   for( let exercise = 1; exercise <=3; exercise++){
      console.log("Exercise", exercise);
      for (let i=1; i <=3; i++){
         console.log(`Exercise ${exercise} = weight lifting ${i}`)
      };
   };

   //----------------------------------------------The While Loop------------------------------------------
//the while loop is more versatile than the For loop, which means that it can be used in a larger variety of situations
//and that's because it doesn't really need a counter unlike For loop. so you can put the counter here when you need 
//it like in following While Loop example(lone no. 557) for specifice need. but all the While loop really needs is the condition. 
//and that condition can be any condition, it doesn't have to be related to any counter at all.

// for(let rep1 = 1; rep1 < 4; rep1++){
//    console.log("This is repitions", rep1);
// }

let rep2 =1 ;
while(rep2 < 4){
   console.log("While loop repetitions", rep2);
   rep2++;
};
 let dice = Math.trunc(Math.random()*6) +1;
 console.log(dice);
 while(dice !==6){
   console.log(`you rolled a ${dice}`);
   dice = Math.trunc(Math.random()*6) +1;
   if(dice === 6){
      console.log("Loop is about to end")
   }
 };
 //so the conclusion of this-> The While Loop does really not have to depend on any counter variable.
 
 //---Coding Challenge----tip calculator
 //1. create an array called bills.
 //2.create an empty array for both tips and totals.
 //3.use the calctip function that we wrote before.
 //4. use that func. to calculate the tips and the total values for every single bill value thatis in the bill array 
 //we created in number one. to do that use for loop.

 const calcTip1 = bill => bill>= 50 && bill <= 300? bill*0.15: bill*0.2;
 
 const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
 const tips1 = [];
 const totals1 =[];

 for(let i =0; i <bills1.length; i++){
   const tip1 = calcTip1(bills1[i]);
   //console.log("------------TUIP!", tip1)
   tips1.push(tip1);
   totals1.push(tip1 + bills1[i]);
 }
 console.log("bills1", bills1, "tips1", tips1, 'totals', totals1)

 //Bonus question
 //write a function calcAverage, which will take any array as an argument, and this function will calculate the 
 //average of all the  numbers and the array that had received.
//start creating a sum var that start at 0
 const calcAverage = function(arr){
   let sum = 0;
   for(let i =0; i< arr.length; i++){
   sum += arr[i];
 }
 //console.log("SUM", sum);
 return sum/arr.length;
}
 calcAverage([2,3,7])
 console.log(calcAverage(totals));

 //******************ENd Of Section 2******************** */