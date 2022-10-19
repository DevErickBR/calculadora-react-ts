export const removeNumber = (e: string, f: (a: string) => void) => {
    if (e != "0") {
        let newValue = e.slice(0, - 1)
        f(newValue)
        if (e.length == 1) {
            f("0")
        }
    }
}; 