function memoize(fn) {
  const cache = new Map();
  let calls = 0;

  const memoized = function (...args) {
    let current = cache;

    // Navigate or create nested Maps for each argument
    for (let arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }

    // The final map level stores the actual result
    if (!current.has('result')) {
      const result = fn(...args);
      current.set('result', result);
      calls++;
    }

    return current.get('result');
  };

  // For testing purpose, we expose a way to track the number of calls
  memoized.getCallCount = () => calls;
  return memoized;
}
