// .js => por defecto utiliza CommonJS
// .mjs => por defecto utiliza ESM es modules
// .cjs => por defecto utiliza CommonJS

import { sum,rest,mult,div } from './sum.mjs';

console.log(sum(1, 2))
console.log(rest(5, 3))
console.log(mult(4, 6))
console.log(div(8, 2))
