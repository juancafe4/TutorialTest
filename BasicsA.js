function Quadratic(a, b, c) {
   var neg  = b * -1;
   var getMult = 4 * a * c;
   var getPow = Math.pow(b, 2);
   var subs = getPow - 4 * a * c;
   
   if (subs < 0) 
      print("No Solution");
   else {
      var getSqrt = Math.sqrt(subs);

      var A = (neg + getSqrt) / (2 * a);
      var B = (neg - getSqrt) / (2 * a);

      if (A == B) 
         print("Solution:", A);
      else 
         print("Solutions:", A, B);
   }
}

var input;

input = readline().split(" ")

Quadratic(input[0], input[1], input[2])
