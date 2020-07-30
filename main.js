//REFERENCE TYPE DATATYPES

//ARRAY 


let arrayValue = [1,2,3,4,5,6];//  array initialization
console.log(arrayValue);

 
let arrayValue1= []; // initializing array
arrayValue1[0]= 10; // assigning values to each position
arrayValue1[1]= 20;
arrayValue1[2]= 30;
arrayValue1[3]= 40;
console.log(arrayValue1);


let arrayValue2= []; // initializing array
arrayValue2[0]= 10; // assigning values to each position
arrayValue2[1]= 20;
arrayValue2[2]= 30;
arrayValue2[3]= 40;
// it create empty space for position 4 as there is no value assign to it
arrayValue2[5]= 50;
console.log(arrayValue2);//  [10, 20, 30, 40, empty, 50]



let arrayValue3 = [1,2,4,6,8,0];
// For loop
for (let counter = 0; counter <= arrayValue3.length-1; counter++) {
    
    console.log(arrayValue3[counter]);
    
}


//ForEach loop
 for(let numValue of arrayValue3){
     console.log(numValue);
 }

 
