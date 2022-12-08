/** --- Utilities and Set Up */
import * as fs from 'fs';
const inputraw = fs.readFileSync('input.txt', 'utf-8');
const input: string[] = inputraw.split('\n');

const l = (s: any) => console.log(s);

/** --- End Utilities and Set Up */

/** Part One */

const getCompartments = (sack: string): string[] => 
  [ sack.substring(0, sack.length / 2),
  sack.substring(sack.length / 2) ]

const findSharedChar = (strings: string[]): string => {
  let charArrays: string[][] = strings.map( (v) => v.split(''));
  let res = '';
  charArrays[0].forEach( (c) => {
    charArrays.map( (ary) => ary.indexOf(c) ).filter( (v) => v > -1 ).length == charArrays.length ? res = c : res = res;
  })
  return res;
}

const calcPriority = (item: string): number => 
item.charCodeAt(0) > 90 ? item.charCodeAt(0) - 96 : item.charCodeAt(0) - 38

/** Tests */
const runTests = (): void => {
  let errs: string[] = [];
  /** getCompartments */
  input.forEach( (sack: string) => {
    const res = getCompartments(sack);
    if(res[0].length != res[1].length) {
      errs.push("Error - getCompartments length");
    }
  });

  /** findSharedItem */
  input.forEach( (sack: string, i) => {
    const c = getCompartments(sack);
    const res = findSharedChar(c);
    switch (i) {
      case 0:
        if(res != 'p') errs.push('Error - findSharedItem 0 returned ' + res);
        break;
      case 1:
        if(res != 'L') errs.push('Error - findSharedItem 0 returned ' + res);
        break;
      case 2:
        if(res != 'P') errs.push('Error - findSharedItem 0 returned ' + res);
        break;
      case 3:
        if(res != 'v') errs.push('Error - findSharedItem 0 returned ' + res);
        break;
      case 4:
        if(res != 't') errs.push('Error - findSharedItem 0 returned ' + res);
        break;
      case 5:
        if(res != 's') errs.push('Error - findSharedItem 0 returned ' + res);
        break;      
      }
  })
  //Print results
  if( errs.length > 0 ) {
    l("Errors occurred:")
    errs.forEach( (e) => l(e) );
  } else {
    l("No errors");
  }
}

//runTests();

// let res = input.reduce(
//   (acc, curr) => {
//     let priority = calcPriority(findSharedItem(getCompartments(curr)));
//     return acc + priority;
//   }
// , 0)


/** PART TWO */

const getElfGroups = (input: string[]): string[][] => {
  let res:string[][] = [];
  let curr:string[] = [];
  input.forEach( (v, i) => {
    curr.push(v);
    if(i > 0 && (i+1) % 3 == 0) {
      res.push(curr);
      curr = [];
    }
  })

  return res;
}
l('---')
l(getElfGroups(input).map((g) => findSharedChar(g)).map( (item) => calcPriority(item) ).reduce(
  (acc, curr) => acc + curr, 0
));
