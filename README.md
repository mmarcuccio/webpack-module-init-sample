## Problem
In webpack 3, modules are initialized exactly once.
In webpack@4.0.0-beta2, modules from another chunk are initialized each time they are imported.

This becomes problematic any time you have a module containing global state that is consumed by multiple other modules.  A more specific example would be [Redux with code splitting](https://gist.github.com/gaearon/0a2213881b5d53973514).  There are workarounds such as using the window object to store and reference information, but this change with Webpack4 may catch many by surprise.

## Running the Demo
There is a directory for both Webpack3 and Webpack4 which show the old and new (broken) behavior.

To view the output, from either directory run:
```
npm install

npm run start
```

## Current Output
Currently, the output is as follows:
### Webpack 3 sample

Expected output: 1 2

Actual Output: 1 2

### Webpack 4 sample

Expected output: 1 2

Actual Output: 1 1