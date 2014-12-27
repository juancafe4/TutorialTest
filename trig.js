var math = function() {
   this.sin = function(x) {
      return Math.sin(x);
   }
}

Math.sin  = function() {
   var x = new math();

   if (arguments[1] == "d") {
      arguments[0] = arguments[0] * Math.PI / 180;
   }
   
   return x.sin(arguments[0]);
};

var cos = function() {
   if (arguments[1] == "d") {
      arguments[0] = arguments[0] * Math.PI / 180;
   }
   
   return (Math.cos(arguments[0]));
};

var tan = function() {
   if (arguments[1] == "d") {
      arguments[0] = arguments[0] * Math.PI / 180;
   }
   
   return (Math.tan(arguments[0]));
};


(function() {
   var angle;
         
   while (angle = parseFloat(readline())) {
      print(Math.sin(angle, "d").toPrecision(5));  // degrees
      print(s(angle).toPrecision(5));       // radians
      print(cos(angle, "d").toPrecision(5));
      print(cos(angle).toPrecision(5));
      print(tan(angle, "d").toPrecision(5));
      print(tan(angle).toPrecision(5));
   }
})();
