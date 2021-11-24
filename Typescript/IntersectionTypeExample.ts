function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      }
  }
  return result;
}

class Warrior {
  constructor(public name: string) { }
}

interface Magic {
  castSpell(): void;
}

class Wizard implements Magic {
  castSpell() {
    console.log('wizard throws a Fireball')
  }
}

var warrior = extend(new Warrior('Aragorn'), new Wizard());
var warriorName = warrior.name;
warrior.castSpell();