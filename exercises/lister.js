var foo = 10;

function bar() {
  if (foo > 20) {
    foo = 50;
  }

  console.log(foo);
  foo += 10;
}

bar();
bar();
bar();