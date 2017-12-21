let a = {
  bir: 1,
  iki: 2,
  foo: function() {
    console.log('BAR');
  }
};

console.log(a["bir"]);
console.log(a.bir);

a.foo();

console.log(a);
