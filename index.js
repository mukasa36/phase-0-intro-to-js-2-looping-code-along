// Code your solutions in this file!
function writeCards(names, happy = "happy") {
    let card = [];
  
    for (let y = 0; y < names.length; y++) {
      card.push(`Thank you, ${names[y]}, for the wonderful ${happy} gift!`);
    }
    console.log(card);
    return card;
  }
  
  
  function countDown(number){
      let e=0
      while (number >= e) {
          console.log(number);
          number--;
  
      }
  
  }
  
  countDown(10);
  
  

