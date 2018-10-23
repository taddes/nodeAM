// Classic Async Example (even with 0 ms timer!!!)
console.log('---BASIC CALLBACK EXAMPLE----')
console.log('Starting App');

setTimeout(() => {
  console.log('Inside callback');
},0);

setTimeout(() => {
  console.log('Inside second callback');
  console.log('-------')
  console.log('\n')

},2000);

console.log('Finishing App');

console.log('-------')
console.log('\n')
