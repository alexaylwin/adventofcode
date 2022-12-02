/** --- Utilities and Set Up */
import * as fs from 'fs';
let input = fs.readFileSync('input.txt', 'utf-8');

let l = (s: any) => console.log(s);

/** --- End Utilities and Set Up */


// let readLineDelim = (input: string, delim: string = ''): string[] => {
//   return input.replaceAll('\n', '|').split('||')
// }

let partOne = (input: string) => {
  return input
    .replaceAll('\n', '|')
    .split('||')
    .map(
      (entry: string) => entry.split('|').reduce( (acc, curr) => acc + parseInt(curr), 0)
    )
    .sort((a, b) => b - a);
  
}

l(partOne(input)[0]);

let partTwo = (input: number[]) => {
  return input[0] + input[1] + input[2];
}

l(partTwo(partOne(input)));