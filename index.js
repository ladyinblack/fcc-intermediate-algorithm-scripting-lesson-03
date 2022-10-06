// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Seek and Destroy</h1>`;

/** TODO:
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 * NOTE: You have to use the arguments object.
 * 
 function destroyer(arr) {
   return arr;
 }

 destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 */

function destroyer(arr) {
  const newArr = [];
  for (let j = 0; j < arr.length; j++) {
    let removeEl = false;
    for (let i = 1; i < arguments.length; i++) {
      if (arr[j] === arguments[i]) {
        removeEl = true;
      }
    }
    if (!removeEl) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53));
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht',
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
);
