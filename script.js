// ********************************
// Function Composition
// ********************************

// Function composition is the process of combining two or more functions to produce a new function.
// Composing functions together is like snapping together a series of pipes for our data to flow through.

// to convert user’s full names to URL slugs to give each of your users a profile page.
// step 1: split the name into an array on spaces
// stpe 2: map the name to lowercase
// step 3: join the dashes
// step 4: encode the URI component

const toSlug = input =>
  encodeURIComponent(
    input
      .split(' ')
      .map(str => str.toLowerCase())
      .join('-')
  );

// console.log(toSlug('JS Cheerleader')); // js-cheerleader

//  In order to accomplish this, we’re using composable forms of common utilities like `split()`, `join()` and `map()`.
// Here are the implementations:

const curry = fn => (...args) => fn.bind(null, ...args);
const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));
const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));

// ............incomplete
