const longestWord = sentence => {
  const words = sentence.split(/(\w+)/g);
  const wordsSorted = words.sort((a, b) => b.length - a.length);
  const longestWord = wordsSorted.filter(
    word => word.length >= wordsSorted[0].length
  );
  return longestWord;
};

const chunkArray = (array, len) => {
  // solution 1
  const chunks = [];
  let i = 0;
  while (i < array.length) {
    chunks.push(array.slice(i, i + len));
    i += len;
  }
  return chunks;

  // solution 2
  // const chunks = []
  // array.forEach(val => {
  //   const last = chunks[chunks.length - 1]
  //   if (!last || last.length === len) {
  //     chunks.push([val])
  //   } else {
  //     last.push(val)
  //   }
  // })
  // return chunks
};

const flattenArray = array => {
  // solution 1
  // const flatten = []
  // array.forEach(val => {
  //   val.forEach(val => flatten.push(val))
  // })
  // return flatten

  // solution 2
  // return array.reduce((accumulator, currentValue) => accumulator.concat(currentValue))

  // solution 3
  // return [].concat.apply([], array)

  // solution 4
  return [].concat(...array);
};

const isAnagram = (str1, str2) => formatString(str1) === formatString(str2);

// helper function
function formatString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

const letterChanges = str => {
  let newString = str.toLowerCase().replace(/[a-z]/g, char => {
    if (char === 'z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newString = newString.replace(/a|e|i|o|u/g, vowel => vowel.toUpperCase());
  return newString;
};

console.log(
  "\nlongestWord('Hello there, my name is Francesco Mirabella')\n",
  longestWord('Hello there, my name is Francesco Mirabella')
);

console.log(
  '\nchunkArray([1, 2, 3, 4, 5, 6, 7], 2)\n',
  chunkArray([1, 2, 3, 4, 5, 6, 7], 2)
);

console.log(
  '\nflattenArray([[1, 2], [3, 4], [5, 6], [7], [8, 9, 10, 11]])\n',
  flattenArray([[1, 2], [3, 4], [5, 6], [7], [8, 9, 10, 11]])
);

console.log("\nisAnagram('elbow', 'below')\n", isAnagram('elbow', 'below'));
console.log("\nisAnagram('elbow', 'belows')\n", isAnagram('elbow', 'belows'));
console.log(
  "\nisAnagram('Dormitory!!', 'room dirty##')\n",
  isAnagram('Dormitory!!', 'room dirty##')
);

console.log("\nletterChanges('Hello There')\n", letterChanges('Hello There'));

console.log("\nletterChanges('Zeta Zeta')\n", letterChanges('Zeta Zeta'));
