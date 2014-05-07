/** 
* Name: Randomize 
* Author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
* @module randomize
*/


'use strict'

/**
* Select a random item in a range.
*
* @param	{Number}	firstvalue	First value of range.
* @param	{Number}	secondvalue	Second value of range.
* @returns	{Number}		A random number beetween first and second range.
*/


var randomize = function (firstvalue, secondvalue) {
                var min = 0,
                    max = 0;

                if (firstvalue > secondvalue) {
                    max = firstvalue;
                    min = secondvalue;
                } else {
                    max = secondvalue;
                    min = firstvalue;
                }

                return Math.random()*(max-min+1)+min;
};

console.log(randomize(10.3,10.5));