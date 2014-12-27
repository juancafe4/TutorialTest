function printValid(s) {

   var vals = s.split(" ");
   var count = [];
   for (var i = 0; i < vals.length; i++) {
      count[vals[i]] = i;
   }   
   for (var i = 0; i < count.length; i++) {
      if(i in count) {print(i);}
   }   
}

printValid(readline())
