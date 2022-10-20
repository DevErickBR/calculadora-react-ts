const AddNumbers = (e: string, arr: number[], f: (a: string) => void) => {
    let newNumber = parseFloat(e.replace(",", "."))
    arr.push(newNumber)
    f("0")
    console.log(arr)
    return arr
}

export const Add = (arr: number[], e: string, f: (a: string) => void, r: number) => {
    AddNumbers(e, arr, f)
    for (let i = 0; i < arr.length; i++) {
        r = arr[i] + arr[i - 1];
        console.log(r)
        return r
    }
};