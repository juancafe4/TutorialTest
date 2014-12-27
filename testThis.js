var x = 10;

var test = function() {
   var x = 5;
   this.x = 45;
};

test();

print(x );
