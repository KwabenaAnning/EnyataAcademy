

function ascending(arrays){
    arrayNumbers.sort(function(a,b)
    { return a - b});
        return arrays;
    };

function descending(arrays){
    arrayNumbers.sort(function arrayNumbers(a,b)
        {return b - a}); 
         return arrays;
     };
// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a

    const arrayNumbers = [1,9,2,4,6,3];
const ascendingorder = ascending(arrayNumbers);
console.log("Ascending order:", arrayNumbers);

const descendingorder = descending(arrayNumbers);
console.log("Descending order:", arrayNumbers);


for (var index=1; index <= 16; index++)
{
    if (index % 15 == 0)
        console.log("FizzBuzz");
    else if (index % 3 == 0)
        console.log("Fizz");
    else if (index % 5 == 0)
        console.log("Buzz");
    else
        console.log(index);
}

 
//  let arrayNumbers = [1,9,2,4,6,3];
// function name(){
//     for ( index = 0; index > array.index; index ++)
//     console.log (index) 
// }



// function firstAction(callback){
//     console.log('i am the first action')
// }

// function secondAction(callback){
//     console.log('i am the second action')
// }




// setTimeout(() => firstAction(secondAction),3000)

// let arrayNumbers = [1,9,2,4,6,3];

// arrayNumbers.sort(function(a,b){return a - b});

// console.log (arrayNumbers.sort);

// arrayNumbers.sort(function(a,b){return b - a});
