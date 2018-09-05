let convert = {};

//is a function for converting Celsius temperatures to Fahrenheit
convert.cToF = function(celsius) {
    if(!Number.isInteger(celsius)) return undefined;
    return celsius * 9 / 5 + 32;
}
//is the reverse function. It converts Fahrenheit to Celsius
convert.fToC = function(fahrenheit) {
    if(!Number.isInteger(fahrenheit)) return undefined;
    return (fahrenheit - 32) * 5 / 9;
}

module.exports = convert;
