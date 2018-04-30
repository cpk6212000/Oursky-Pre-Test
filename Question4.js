function createArrayOfFunctions(y){
	var arr = [];
	for(var i = 0; i<y; i++){
		arr[i] = (function(i) {
        	return function(x) {
            	return x + i;
            };
    	})(i);
    }
	return arr;
}

//test cases
var arr = createArrayOfFunctions(10);
arr[0](1); // output: 1
arr[1](1); // output: 2
arr[9](1); // output: 10