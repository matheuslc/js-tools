/**
* Name: Scroll Vertical
* Author: Matheus Lucca do Carmo (matheuslc)
* @version: 0.1
*/


/**
  * Show where scroll are going. (Up or Down).
  * @returns  {Number} array size.
*/


(function (window, undefined) {
  'use strict';

  var scrollDirection = function() {
     var lastScroll = new Number(),
         nowScroll  = window.scrollY;

    if(lastScroll > nowScroll) {
      return true;
    } else {
      return false;
    }

  }

}(window, undefined));

window.addEventListener("scroll", function(e) {

    console.log(scrollDirection());

  });
