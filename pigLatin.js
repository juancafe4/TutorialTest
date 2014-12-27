function PigLatin(message) {
   return (message.slice(1, message.lenght) + message.charAt(0) + "ay");
};

print(PigLatin(readline()));
