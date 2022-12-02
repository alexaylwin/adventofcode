/** --- Utilities and Set Up */
import * as fs from 'fs';
const inputraw = fs.readFileSync('input.txt', 'utf-8');
const input: string[] = inputraw.split('\n');

const l = (s: any) => console.log(s);

/** --- End Utilities and Set Up */

const roundScore = (y: string, t: string): number => {
  let score = 0;
  
  //table for win/loss/tie
  if(t == 'A' && y == 'X') { score = 3} else if
  (t == 'A' && y == 'Y' ) { score = 6 } else if
  (t == 'A' && y == 'Z' ) { score = 0 } else if

  (t == 'B' && y == 'X' ) { score = 0 } else if
  (t == 'B' && y == 'Y' ) { score = 3 } else if
  (t == 'B' && y == 'Z' ) { score = 6 } else if

  (t == 'C' && y == 'X' ) { score = 6 } else if
  (t == 'C' && y == 'Y' ) { score = 0 } else if
  (t == 'C' && y == 'Z' ) { score = 3 };

  if(y == 'X') { score = score + 1} else if
  (y == 'Y') { score = score + 2 } else if
  (y == 'Z') { score = score + 3 }
  
  return score;
}

const partOne = (input: string[]): number => {
  
  return input.reduce(
    (acc, curr) => acc + roundScore(curr.split(' ')[1], curr.split(' ')[0])
  , 0)
}

l(partOne(input));

const chooseAction = (t: string, outcome: string): string =>  {
  const nt = t.charCodeAt(0);
  let y = 0;
  if(outcome == 'X') { y = nt - 1} else if
  (outcome == 'Y') { y = nt } else if
  (outcome == 'Z') { y = nt + 1 }

  if(y > 67) { y = 65 }
  if(y < 65 ) { y = 67 }
  
  y = y + 23
  //l(outcome + ' ' + t + ' ' + String.fromCharCode(y));
  return String.fromCharCode(y);
}

const partTwo = (input: string[]): number => {
  return input.reduce(
    (acc, curr) => acc + roundScore(chooseAction(curr.split(' ')[0], curr.split(' ')[1]), curr.split(' ')[0]),
    0
  )
}

l(partTwo(input));