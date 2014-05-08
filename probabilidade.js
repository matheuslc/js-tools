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
* @param    {Number}    firstvalue	First value of range.
* @param    {Number}    secondvalue	Second value of range.
* @returns  {Number}    A random number beetween first and second range.
*/

// Items


var prob = {};
    
    prob.itens = [18,20,20,21,22,24,25,25,26,27,29,29,30,30,31,31,32,33,34,35,36,36,37,37,37,37,38,38,40,41,43,44,44,44,45,45,45,46,47,48,49,50,51,53,54,54,56,58,62,65];
    
    prob.n = function () {
        return this.itens.length;
    };

    prob.rol = function () {
        return this.itens.sort();
    };

    prob.h = function () {
        return (Math.max.apply(Math, this.rol()) - Math.min.apply(Math, this.rol()));
    };

    prob.getBaseLog = function (x,y) {
        return Math.log(y) / Math.log(x);
    };

    prob.numeroClasse = function () {
        return Math.ceil(1 + this.getBaseLog(2,this.n()));
    };

    prob.tamanhoIntervalo = function () {
        return Math.ceil(this.h() / this.numeroClasse());
    };

    prob.intervalos = function () {
        var intervaloClasse = [],
            min = Math.min.apply(Math, this.rol()),
            rs = 0;
        for (var i = this.numeroClasse() - 1; i >= 0; i--) {
            rs = min + 6 - 1;
            console.log(rs);
            intervaloClasse[i];
    };
};


// Quantidade de itens
// var n = items.length;

// // Ordenando em ordem crescente
// var rol = items.sort();

// // Amplitude
// var h = (Math.max.apply(Math, rol) - Math.min.apply(Math, rol));


// // Número de classes
// function getBaseLog(x, y) {
//     return Math.log(y) / Math.log(x);
// }
// var k = Math.ceil(1 + getBaseLog(2,n));

// // Intervalo de classes
// var r = Math.floor(n / k);

