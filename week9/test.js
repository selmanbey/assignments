
// function foo(){
//   console.log('BAR')
// }

function caller(a) {
  function wrap() {
    console.log('Calling function');
    a()
  }

  return wrap;
}

let foo = function() {
  console.log('BAR');
}


foo();
let decorated_foo = caller(foo);
decorated_foo();