function removeNegativeNums(arr) {
    return arr.filter(function(num) {
    return num >= 0;
    });
   }
   
   
   console.log(removeNegativeNums([3,-4,5,6,78,-10]))