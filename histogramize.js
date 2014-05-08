/** 
* Name: Histogramize 
* Author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
* @module histogramize
*/

/**
 * Things gonna change. Be patience
*/

'use strict'

/**
 * Makes all counts to generate probability.
 * @returns  {Array} array with final data
*/

// Item object
var histogramize = {};
    
    // Array with itens.
    histogramize.itens = [18,20,20,21,22,24,25,25,26,27,29,29,30,30,31,31,32,33,34,35,36,36,37,37,37,37,38,38,40,41,43,44,44,44,45,45,45,46,47,48,49,50,51,53,54,54,56,58,62,65];
    
    /**
     * Array size.
     * @returns  {Number} array size.
    */
    histogramize.n = function () {
        return this.itens.length;
    };

    /**
     * ROL - Sorts in ascending order array items.
     * @returns  {Array} with the items sorted in ascending order. 
    */
    histogramize.rol = function () {
        return this.itens.sort();
    };

    /**
     * Amplitude - Amplithe of items.
     * @returns  {Number} amplitude of class. 
    */
    histogramize.h = function () {
        return (Math.max.apply(Math, this.rol()) - Math.min.apply(Math, this.rol()));
    };

    /**
     * Log calc - Any calculation of log with different bases.
	 * @param {Number} x Number of calculation.
	 * @param {Number} y Log base.
     * @returns  {Number} Log result. 
    */
    histogramize.getBaseLog = function (x,y) {
        return Math.log(y) / Math.log(x);
    };

    /**
     * Classes number - Number of classes for the calculation.
     * @returns  {Number} Classes number. 
    */
    histogramize.numeroClasse = function () {
        return Math.ceil(1 + this.getBaseLog(2,this.n()));
    };

    /**
     * Interbal between classes.
     * @returns  {Number} Distance classes value. 
    */
    histogramize.tamanhoIntervalo = function () {
        return Math.ceil(this.h() / this.numeroClasse());
    };

    /**
     * Calculate classes number.
     * @returns  {Array} with classes number. 
    */
    histogramize.intervalos = function () {
        var intervaloClasse = [min],
            min = Math.min.apply(Math, this.rol()),
            rs = min;
        for (var i = this.numeroClasse() - 1; i >= 0; i--) {
            intervaloClasse[i]  = rs;
            rs = rs + this.tamanhoIntervalo() - 1;
    	};
    	
    	return intervaloClasse.reverse();
	};

	/**
     * Calculate frequency of items in ROL.
     * @returns  {Array} with frequency. 
    */
	histogramize.frequencia = function () {
		var count,
			frequency = [];

		for (var i = this.rol().length - 1; i >= 0; i--) {
			
			if ( this.rol()[i] !== count) {
				frequency.push(1)
			} else{
				frequency[frequency.length-1]++;
			};

			count = this.rol()[i];
		};

		return frequency.reverse();
	};
