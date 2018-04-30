//function takes the array as parameter
function nextFibonacci(array){
    var res = [];
    //for loop for each element in the array
      for (var i=0; i<array.length; i++){
    //Do the calculation of the fibonacci number
        var a=0, b=1, c=0;
        if (typeof array[i] != "number"){
          continue;
        }
        do{
          c=a+b;
          a=b;
          b=c;
        }
    //While the fibonacci number smaller or equal than the element
        while (c <= array[i]);
    //Return the number
        res[i] = c;
      }
    return res;
}
    //test cases
    nextFibonacci([1,9,15]);
    