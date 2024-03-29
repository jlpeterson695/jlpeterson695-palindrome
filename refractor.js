



function Phrase(content) {
  this.content = content;




  this.letters1 = function letters1() {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      if (this.content.charAt(i).match(/[a-zA-Z]/)) {
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }




  this.letters2 = function letters2() {
    let theLetters = [];
    const letterRegex = /[a-z]/i;
    for (let i = 0; i < this.content.length; i++) {
      let character = this.content.charAt(i);
      if (character.match(letterRegex)) {
        theLetters.push(character);
      }
      }
      return theLetters.join("");
    }



  this.letters3 = function letters3() {
      let theLetters = [];
      const letterRegex = /[a-z]/i;
      Array.from(this.content).forEach(function(character) {
        if (character.match(letterRegex)) {
          theLetters.push(character);
        }
      });
      return theLetters.join("");
    }





  this.letters4 = function letters4() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }



}


phrase2 = new Phrase("jodh, JJJ,!!!");
console.log(phrase2.letters3());
console.log(phrase2.letters1());
console.log(phrase2.letters2());
console.log(phrase2.letters4());
console.log(phrase2);
