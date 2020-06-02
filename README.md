# rua
Random user-agent generator module for Deno.

## Usage
```js
import rua from './mod.js' // import the rua module

console.log(rua()) // will return a random user-agent
console.log(rua('desktop')) // will return a random destop user-agent
console.log(rua('mobile')) // will return a random mobile user-agent
console.log(rua('crawler')) // will return a random crawler user-agent
```
