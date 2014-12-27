var readRecords = function() {
   var ln, nm, records = [];
   var i = 0, names, cl;
   while (ln = readline()) {
      ln = ln.split("|");
      names = ln[1].split(", ");
      cl = ln[2].split(", ");

      records[i] = {id : parseInt(ln[0]),
      name : {first:names[1].trim(), middle:names[2], last:names[0]},
      classes: cl};
      i++;
   }
   return records;
};

var printRecords = function(records) {
   var rec;
         
   for (var i = 0; i < records.length; i++) {
      rec = records[i];
      print(rec.id + " Name: " + rec.name.first + " " + (rec.name.middle ? rec.name.middle + " " : "") + rec.name.last + ":");
      for (var j = 0; j < rec.classes.length; j++)
         print(rec.classes[j].trim());
      print();
                                                      }
};

printRecords(readRecords());
