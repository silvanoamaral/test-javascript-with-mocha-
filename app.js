//is a function for converting Celsius temperatures to Fahrenheit
cToF = function(celsius) {
    if(!Number.isInteger(celsius)) return undefined;
    return celsius * 9 / 5 + 32;
}
//is the reverse function. It converts Fahrenheit to Celsius
fToC = function(fahrenheit) {
    if(!Number.isInteger(fahrenheit)) return undefined;
    return (fahrenheit - 32) * 5 / 9;
}