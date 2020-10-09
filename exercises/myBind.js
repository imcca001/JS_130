function bind(callback, context) {
  let partialArgs = [].slice.apply(arguments, [2]);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return callback.apply(context, fullArgs);
  }
}