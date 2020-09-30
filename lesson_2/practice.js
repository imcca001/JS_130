function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);

let baz = foo.bar;
let qux = foo.qux;
let bar = foo.bar;
