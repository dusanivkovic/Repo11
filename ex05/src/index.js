// Create monitorListArray here
var monitorListArray = ["Apple", "Peach", "Berry"];
// end of monitorListArray
// Create s function below this line
function myMonitorsFunction() {
    var monitorsList = [];
    for (var i = 1; i < monitorListArray.length; i++) {
        monitorsList = monitorListArray.map((x, i) => [x, (i + 1)]);
    };
    return monitorsList;
}
// End of creating a function
myMonitorsFunction();
module.exportS = myMonitorsFunction;