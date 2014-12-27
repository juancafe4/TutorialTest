var Sample = function(first, last) {   
   this.print = function() {
      print(last + ", " + first);
   }

   Sample.mostRecent = this;
};

var main = function() {
   var sample = new Sample("John", "Doe");
   sample.print();
   
   if (Sample.mostRecent === sample) {
      Sample.mostRecent.print();
   }

   sample = new Sample("Jane", "Smith");
   sample.print();
   if (Sample.mostRecent === sample) {
      Sample.mostRecent.print();
   }
};

main();
