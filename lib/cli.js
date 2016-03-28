"use strict";

let beer = require("./beer.js")();

if (beer){
  console.log("Go get the damn beer!");
} else {
  console.log("You have obligations!");
}
