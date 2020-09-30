let text = 'his text contains letters, numbers, punctuation, whitespace, and even newline characters. 99988222.Everything in it should match the /./ pattern.';
let hello = text.match(/.../g);
console.log(hello);