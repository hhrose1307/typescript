function getArrayOfAValue<T>(a: T): T[] {
    return [a, a, a];
}

const arrStr = getArrayOfAValue('abc').filter(x => x);
