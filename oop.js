/*
* What is a class/object?
* in JS a class is a constructor that can be used to create an object EX: new Example("hi");
* the difference between this and an object is that you can have more than one instance of it from the constructor.
*/
function Example(data){
  //use this.varName to store data inside the object
  this.myData = data;
  
  //to define a function inside of an object use prototype, DO NOT do what i did here.
  this.whatAmI = function(){
    console.log(typeof this.myData);
  }
}

function Example2(data){
  this.myData = data;
}

//using a prototype instead of this. notation allows you to create data that is shared between all instances of an object but using this. notation makes a uniqe copy of it for each instance
//because of this things you down want to be global such as functoins go in the prototype.
//the downside to prototype is you have to write it out for all functions in an object and makes for messy code if you have a lot of functions for an object.
Example2.prototype.whatAmI = function(){
  console.log(typeof this.myData);
}
//Example and Example2 act the same

function Example3(data){
  this.myData = data;
}

//How to use Object.assign instead of prototype
Example3.prototype=Object.assign(Example3.prototype,{
  //everything here is considered to be part of Example3's prototype
  //note: inside of this a function is defined as NAME(){}
  //note: you can still use this. inside of any functions here as the scope is still inside the class.
  whatAmI(){
    console.log(typeof this.myData);
  },
  getData(){
    //easy to add another function without having to type Example3.prototype. more than necessary.
    return this.myData;
  }
});
