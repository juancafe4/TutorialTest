var countNames = function() {
   var x = [], i = 0, name, count = 0, n;

   while(name = readline()) {
      x[i++] = name.toUpperCase();
   }

   while (name = readline()) {
      n = name.toUpperCase();
      for (j in x) {
         if (n == x[j]) {
            count++;
         }
      }
      print(name, "appears", count, "times.");
      count = 0;
   }
}
countNames();
