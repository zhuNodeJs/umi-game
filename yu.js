function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    console.log('i==', i);
    console.log('min==', min);
    index = Math.floor((i + 1) * Math.random());
    console.log('index==', index);
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  console.log('herolist-changed--', shuffled);
  return shuffled.slice(min);
}
var herolist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var number = 2;
const freeheros = getRandomArrayElements(herolist, number);
console.log('freeHeros==', freeheros);
