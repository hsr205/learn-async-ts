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

            arr[rowIndex].some((val: number) => {
                if (val < 0) {
                    console.log(`Negative value found in row: ${rowIndex}`);
                    console.log(`Negative value found: ${val}`);
                }
            });
        }, 0);

    });
}


const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];


async function findNegativeValuesByRow(): Promise<number> {

    let values = await Promise.all([promiseNegativeValues2DArray(array2D_3, 0), promiseNegativeValues2DArray(array2D_3, 1), promiseNegativeValues2DArray(array2D_3, 2)])

    return values.reduce((sum, item) => sum + item, 0);

}


findNegativeValuesByRow().then(() => {
    console.log(`Executing findNegativeValuesByRow() method`)
}).catch((error) => {
    console.error(error);
});