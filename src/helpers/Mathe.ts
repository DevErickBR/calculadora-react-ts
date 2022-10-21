export const Math = (e: string, result: (e: number) => void, setInput: (e: string) => void) => {
    result(eval(e))
    setInput("0")
}