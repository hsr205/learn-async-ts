function promiseSum2DArray(arr: number[][], rowIndex: number): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');

        const arrLength: number = arr.length;

        if (arrLength === 0) {
            reject('Cannot sum an empty array');
        }

        if (rowIndex > arrLength - 1 || rowIndex < 0) {
            reject(`Index passed ${rowIndex} is invalid`);
        }

        setTimeout(() => {
            let sum: number = 0;
            sum = arr[rowIndex].reduce((sum, item) => sum + item, 0);
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });

}


const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


async function sumPromise2DArray(): Promise<number> {

    let values = await Promise.all([promiseSum2DArray(array2D_1, 0), promiseSum2DArray(array2D_1, 1), promiseSum2DArray(array2D_1, 2)])

    return values.reduce((sum, item) => sum + item, 0);

}

sumPromise2DArray().then((value: number) => {
    console.log(`Sum of 2D Array = ${value}`)
}).catch((error) => {
    console.error(error);
});