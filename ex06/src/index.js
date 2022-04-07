// Only change code below this line
myNestedArray = [["Toblerone", 5]];
function myNestedFunction(arr) {
    arr.push(["Milka", 3]);
    return myNestedArray;
};

// Only change code above this line
console.log(myNestedFunction(myNestedArray));
module.exportS = myNestedFunction;