// Only change below this line
var myStr = "Paragon is the best!";


// Create a function below this line
function useMethods(str) {
    str = str.split("");
    str = str.reverse();
    myReverse = str.join('');
    return myReverse;
};
// End of creating a function
// Only change below this line
useMethods(myStr);
console.log(useMethods(myStr))
module.exportS = useMethods;