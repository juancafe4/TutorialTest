function findFirstFalsey(a, b, c, d, e) {
   return (a && b && c && d && e && "None");
}

print(findFirstFalsey(1, false, 3, true, 5)) 
print(findFirstFalsey("Hello", 2, 3, true, 5)) 
print(findFirstFalsey(null, 2, false, 4.2, 5)) 
print(findFirstFalsey(1, 2, "", 4, 5)) 
print(findFirstFalsey("false", "undefined", 3, 4, undefined))
print(findFirstFalsey(1, 2, "0", 4, 5)) 
print(findFirstFalsey(1, NaN, 3, "null", 5)) 
