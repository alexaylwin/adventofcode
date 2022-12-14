/** --- Utilities and Set Up */
import * as fs from 'fs';
const inputraw = fs.readFileSync('input.txt', 'utf-8');
const input: string[] = inputraw.split('\n');

const l = (s: any) => console.log(s);

const findSharedChar = (strings: string[]): string => {
  let charArrays: string[][] = strings.map( (v) => v.split(''));
  let res = '';
  charArrays[0].forEach( (c) => {
    charArrays.map( (ary) => ary.indexOf(c) ).filter( (v) => v > -1 ).length == charArrays.length ? res = c : res = res;
  })
  return res;
}

const calcCharCode = (item: string): number => 
item.charCodeAt(0) > 90 ? item.charCodeAt(0) - 96 : item.charCodeAt(0) - 38


// const runTests = (tests: ((arg: any) => any)[]): void => {
//   let errs: string[] = [];

//   tests.forEach( (test) => test.)

//   //Print results
//   if( errs.length > 0 ) {
//     l("Errors occurred:")
//     errs.forEach( (e) => l(e) );
//   } else {
//     l("No errors");
//   }  
// }

/** --- End Utilities and Set Up */

type Assignment = {
  start: number,
  end: number
}

const getAssignmentPairs = (input: string[]): Assignment[][] => {
  return input
    .map( (line) => line.split(',') )
    .map( (pair) => pair
      .map( (assignmentString: string) => {
        return { start: Number.parseInt(assignmentString.split('-')[0]), 
                  end: Number.parseInt(assignmentString.split('-')[1])}
      })
    );
}

const findOverlap = (a:Assignment[]): number => {
  if( (a[0].start <= a[1].start && a[0].end >= a[1].end)
  || (a[1].start <= a[0].start && a[1].end >= a[0].end)) {
    return 1
  }

  return 0;
}

l(getAssignmentPairs(input).reduce( (acc, pair) => acc + findOverlap(pair), 0));