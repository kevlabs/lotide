const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5,6,7]).toString(), [6, 7].toString());
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([]), "Hello");