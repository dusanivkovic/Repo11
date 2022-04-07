// Create an array here
var myArr = [2, 4, 0,8, 10];
// End of creating an array

// Create a function below this line
function myArrayFunction(myItem) {
    myItem[2] = 6;
    return myItem;
};
// End of creating a function
myArrayFunction(myArr);
module.exportS = myArrayFunction;