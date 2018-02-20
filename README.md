## Problem
When using common chunks module in webpack 3, modules are initialized once, the first time they are imported.
When using splitChunks in webpack@4.0.0-beta2, modules are initialized each time they are imported.

This becomes problematic any time you have a module containing global state that is consumed by multiple other modules.  A more specific example would be [Redux with code splitting](https://gist.github.com/gaearon/0a2213881b5d53973514).  There are workarounds such as using the window object to store and reference information, but this change with Webpack4 may catch many by surprise.

## Running the Demo
To view the output, from either child directory run:
npm install
npm run start