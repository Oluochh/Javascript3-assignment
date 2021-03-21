function setLocation (city){
    var country="kenya";
    function printLocation(){
        console.log("i am in "+city);
    }
    return printLocation;
}
var currentLocation=("Mombasa")
currentLocation();