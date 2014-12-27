var x = 10;
var OddType = function() {
   this.datum = 42;
   this.method = function() {
      var x = 20;
      var g = function() { this.x = 42}; g();
      g.x = this.datum;
      print(x);
   }
};

new OddType().method();

print(x);
