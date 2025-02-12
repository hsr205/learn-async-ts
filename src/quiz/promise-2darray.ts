/*
(1) Is there a difference in the flow of execution from when the code was in the setTimeout function?

- Yes, without the `setTimeout()` function no sum is calculated in the `sum2DArray()` function. This results in
`sum2DArray()` function exclusively containing print statements a opposed to the arithmetic operations
conducted in the `setTimeout()` function.

(2) Is the flow of execution in both these examples different from the flow of execution with the examples
using the fetch() API, which also returns a promise?

(3) If yes, explain the code execution difference. Add your explanation to src/quiz/promise-2darray.txt.

- Yes. A function that leverages a Promise is not always an asynchronous operation. When leveraging the key-words
`async` / `await` and the `fetch()` method as displayed in the fetch-products-async-await.ts module the method
encapsulating these elements will always be an asynchronous operation.
 */

function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if (arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D).then((value: number) => {
    console.log('sumPromise1:', value);
}).catch((err) => {
    console.log('sumPromise1:', err);
});

const sumPromise2 = sum2DArray([]).then((value: number) => {
    console.log('sumPromise2:', value);
}).catch((err) => {
    console.log('sumPromise2:', err);
});
