function rot13(str) { // WF VF SHA!
    var spl = () => str.toUpperCase().split(""); //Splitting into array and passes chars function

    var chars = () => spl().map(x => x.charCodeAt(0)); // checks every chars Decimal value and passes rot13 function.

    var rot13 = () => chars().map(x => (x < 65 || x > 90) ? x : x-13 < 65 ? x + 13 : x -13)
    /* rot13 function checks for some spesific chars and for this chars does nothing.For other decimal numbers it substracs 13
    (because it is rot13 chipper) if returned value lower than 65 (because on decimal numbers
    we do not need to convert rest of 65) it adds 13 to get correct value else substracts 13 to get the value and pass the final value
    to rot13toascii function*/
    var rot13toascii = () => rot13().map(x => String.fromCharCode(x));  //Takes Decimal value and converts to ascii and pass the function conver

    var convert = () => rot13toascii().join('') //Takes all values in array and joins.

    return convert(); //Returns the final value

}


// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");