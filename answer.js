//Hello World!
var main = function() {
   var y, obj = {}; 
   y = {}; 
   y.answer = 42;
   obj.x = y;
   print( JSON.stringify(obj));
   obj.x.answer = 43; 
   obj.x.oneMore = 44; 
                                               
   print(JSON.stringify(obj));
}

main();
