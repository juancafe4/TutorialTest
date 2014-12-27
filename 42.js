var x = 10;
(function() {
   var x = 10;
   this.x  = 42;
})();

print(x);
