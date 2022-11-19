const person = {
  isHuman: false,
  name: 'bruno',

  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
const outra = Object.create(person);

me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"

console.log(person.name)




