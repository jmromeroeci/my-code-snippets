// Decorator definition
function colored(value: string) {
  return function (target: any) {
      target.color = value;
  }
}

// Decorated class
@colored('yellow')
class Cube {
  side = 3
}

const cube = new Cube();