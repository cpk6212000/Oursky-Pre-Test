//function that takes set and subset as parameter
function isSubset(set, subset){
    //for loop the subset item
    for (var i=0; i<subset.length; i++){
        //check if the subset item is in the set
        if (set.indexOf(subset[i]) == -1) {
            //if not, return false
            return false
        }
    //close the for loop
    }
    //return true
    return true
//close the function
}

//test cases
isSubset(['A','B','C','D','E'],['A','D','E']);
isSubset(['A','B','C','D','E'],['A','D','Z']);
isSubset(['A','D','E'],['A','A','D','E']);