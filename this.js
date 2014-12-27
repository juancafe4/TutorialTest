var x, g1 = this;

x = { f : function F() {
   var g2 = this;
   return function G() {
      if ((g1) === this) {
         print("true" );
      }
   }
}
}

x.f()();

