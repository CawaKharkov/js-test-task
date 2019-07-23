export type ICompare = (...strings: string[]) => string;

export const compare: ICompare = makeCompare();

function makeCompare(): ICompare {
  const DEFAULT_FROM_CHAR: string = "a";
  const DEFAULT_TO_CHAR: string = "z";

  const allowedSortedChars: string[] = [
    ...generateChars(DEFAULT_FROM_CHAR, DEFAULT_TO_CHAR)
  ];

  return function(...strings: string[]): string {
    return compareInternal(strings, allowedSortedChars);
  };
}

function compareInternal(
  strings: string[],
  allowedSortedChars: string[]
): string {
  const chars: Set<string> = new Set<string>(joinStrings(strings));
  const sortedChars: string[] = [];

  for (const char of allowedSortedChars) {
    if (chars.has(char)) {
      sortedChars.push(char);
    }
  }

  return joinStrings(sortedChars);
}

function* generateChars(
  fromChar: string,
  toChar: string
): IterableIterator<string> {
  for (
    let charCode: number = fromChar.charCodeAt(0);
    charCode <= toChar.charCodeAt(0);
    charCode++
  ) {
    yield String.fromCharCode(charCode);
  }
}

function joinStrings(array: string[]): string {
  return array.join("");
}
