// Immediately Invoke Function Expression
// Named IIFE and UnNamed(Simple) IFFE
(function(){
    console.log("IIFA Function")
})();

(() => {
    console.log("Arrow Function")
})();

// With parameters:
(function(a, b) {
    console.log(a + b);
  })(5, 10);