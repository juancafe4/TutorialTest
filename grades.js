var averageGrade = function() {
   var ln, grade, total;
   while(ln = readline()) {
      ln  = ln.split(",");
      total = grade = 0;
      if (ln != "  ") {    
      for(i in ln) {
         if(grade = parseFloat(ln[i])) {
            total += grade;
         }
      }
         total /= ln.length
         print("Average GPA:", total.toFixed(2));
     }
  }

   
};

averageGrade();
