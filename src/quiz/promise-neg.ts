function promiseNegativeValues2DArray(arr: number[][], rowIndex: number): Promise<number> {

    return new Promise((resolve, reject) => {
        console.log('Searching for negative values... ');

        const arrLength: number = arr.length;

        if (arrLength === 0) {
            reject('Cannot iterate over empty array');
        }

        if (rowIndex > arrLength - 1) {
            reject(`Index passed ${rowIndex} is invalid`);
        }


        setTimeout(() => {
            let sum = 0;
            let rowCount = 0;

            arr.forEach((row) => {
                if (rowCount === rowIndex) {
                    row.some((val: number) => {
                        if (val < 0) {
                            console.log(`Negative value found in row: ${rowIndex}`);
                            console.log(`Negative value found: ${val}`);
                        }
                    })
                }
                rowCount++;
            })
            resolve(sum);
        }, 0);

    });
}


const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];


const findNegativeValuesByRow = promiseNegativeValues2DArray(array2D_3, 0).then(() => {

        promiseNegativeValues2DArray(array2D_3, 1).then(() => {

            promiseNegativeValues2DArray(array2D_3, 2).then(() => {

            }).catch((err) => {
                console.log(err);
            })

        }).catch((err) => {
            console.log(err)
        })
    }
).catch((err) => {
    console.log(err)
})