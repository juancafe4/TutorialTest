var num = new Number(parseInt(readline().trim()));

num.addTotal = function() {
   var temp = new Number(num);

   for (i in arguments) {
      temp += parseInt(arguments[i]);
   }

   return temp;
}
print(num.addTotal());
print(num.addTotal(1));
print(num.addTotal(5, 4, 3, 2, 1));
