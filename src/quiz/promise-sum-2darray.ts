function promiseSum2DArray(arr: number[][], rowIndex: number): Promise<number> {

    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');

        const arrLength: number = arr.length;

        if (arrLength === 0) {
            reject('Cannot sum an empty array');
        }

        if (rowIndex > arrLength - 1) {
            reject(`Index passed ${rowIndex} is invalid`);
        }

        setTimeout(() => {
            let sum = 0;
            let rowCount = 0;
            // for (let i = 0; i < rowIndex; i++) {
            //     console.log(arr[i]);
            // }

            arr.forEach((row) => {
                if (rowCount === rowIndex) {
                    sum = row.reduce((a, b) => a + b, 0);
                }
                rowCount++;
            })
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

const sumPromise2DArray = promiseSum2DArray(array2D_1, 0).then((value1: number): void => {

    promiseSum2DArray(array2D_1, 1).then((value2: number) => {

        promiseSum2DArray(array2D_1, 2).then((value3: number) => {

            const total = value1 + value2 + value3;
            console.log(`sum2DArray: ${total}`);

        }).catch((err) => {
            console.log(err);
        })

    }).catch((err) => {
        console.log(err);
    })

}).catch((err) => {
    console.log(err);
});