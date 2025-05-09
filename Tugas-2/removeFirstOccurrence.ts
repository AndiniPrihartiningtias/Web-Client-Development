export function removeFirstOccurrence(str: string, search: string, append: string): string {
    return str.replace(search, '') + " " + append;
 }