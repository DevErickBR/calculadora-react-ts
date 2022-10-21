export const handleDeleteValue = (e: string, f: (a: string) => void) => {
    if (e) {
        return f("0")
    }
}