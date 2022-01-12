function receivesAFunction(cb) {
    return cb()
}


receivesAFunction(function () { return 4 + 5; });



function returnsANamedFunction() {
   return liftWeights;
  }


function liftWeights() {
    console.log("Pump iron");
  }



  function returnsAnAnonymousFunction() {return function(){"hi there"}}
  returnsAnAnonymousFunction;



