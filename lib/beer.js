"use strict";

/**
 * To beer or not to beer
 */
module.exports = function(){
  let num = Math.floor((Math.random() * 10) + 1);
  if(num > 5){
    return true;
  } else {
    return false;
  }
}


