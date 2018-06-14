"use strict";
function getArrayOfAValue(a) {
    return [a, a, a];
}
const arrStr = getArrayOfAValue('xyz').filter(x => x.length);
let l;
