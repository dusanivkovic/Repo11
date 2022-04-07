// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [29, 52, 21, 64],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
]
// End of temps array

//Create function below this line
function myArrayfunction() {
    var averageDayTemp = [];
    for (var i = 0; i < (temps.length); i++) {
        var temp = 0;
        for (var j = 0; j < (temps[i].length); j++) {
            temp += temps[i][j];
        }
        temp = temp/temps[i].length;
        averageDayTemp.push(temp);
    }
    return averageDayTemp;
};
// end of creating function
// myArrayfunction();
console.log(myArrayfunction());
module.exportS = myArrayfunction;