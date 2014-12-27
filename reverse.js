var reverseWords = function() {
      var line;
         
   while (line = readline()) {
     print(line.split(' ').reverse().join(' ')); 
   }
};

reverseWords();
