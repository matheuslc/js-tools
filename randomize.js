/** 
* Name: Randomize 
* Author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
* @module randomize
*/





/**
* Select a random item in a range.
*
* @param    {Number}    firstvalue	First value of range.
* @param    {Number}    secondvalue	Second value of range.
* @returns  {Number}    A random number beetween first and second range.
*/


var randomize = function (firstvalue, secondvalue) {
                var min = 0,
                    max = 0;

                // Check min a max value
                if (firstvalue > secondvalue) {
                    max = firstvalue;
                    min = secondvalue;
                } else {
                    max = secondvalue;
                    min = firstvalue;
                };

                // Check if it's a decimal or integer number
                if ((max % 1 === 0) && (min % 1 === 0)) {
                    return Math.floor(Math.random()*(max-min+1)+min);
                } else {
                    return (Math.random() * (max-min)+min).toFixed(2);
                };
};

