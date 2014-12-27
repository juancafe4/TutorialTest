
Math.random = function() {
   if(arguments.length) {
      this.seed = arguments[0];
   }
   
   else {
      this.seed  = (this.seed * 131071 + 524287) %  8191;
      
      return this.seed / 8192;
   }
};

(function() {
   var rnd;

   for (var i = 0; i < 2; i++) {
      Math.random(1); // Set seed to 1
      do {
         print(rnd = Math.random());
      } while (rnd < .90);
   }
   
} )();
