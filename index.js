// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name) {
  for (let i = 0; i < name.length; i++) {
    console.log("Thank you, ${name[i]}, for the wonderful suprise gift!");
    debugger;
  }

  return name;
}

writeCards(name);

function countdown() {
    let countdown = 11;
    while (countdown < 0) {
        console.log(countdown--);
      }
      return countdown;
}




