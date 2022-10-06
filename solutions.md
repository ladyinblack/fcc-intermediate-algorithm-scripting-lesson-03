## ALTERNATE SOLUTIONS

### Solution 1
```js
function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        let removeElement = false;
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                removeElement = true;
            }
        }
        if (!removeElement) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
```

### Code Explanation
1. Create an array of `valsToRemove` using `Object.values(arguments).slice(1)` and store it in the variable `valsToRemove`.  We'll use this to check against `arr`.
2. Start a basic `for` loop to iterate through `arr`.  Nest another `for` loop inside the first, changing the integer variable `j` and `arr` to `valsToRemove`.  This second loop will iterate through `valsToRemove`.
    - Within the second loop create an `if` statement, checking strictly `===` that the current value of `arr[i]` is equal to `valsToRemove[j]`.
    - If the value at the current index is equal in both arrays, let `removeElement` to `true` remove it from `arr`.
    - If the value is not flagged for removal, add it to the `filteredArray`.
3. Outside of the nested loops, return the `filteredArray`.

### REFERENCE LINKS
- [Arguments Object](http://forum.freecodecamp.org/t/how-arguments-work-in-javascript-javascript-arguments-guide/14283)


### Solution 2
```js
function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    });
}
```

### Code Explanation
1. Declare a variable named `valsToRemove` and set it equal to a new `Array` object `from()` the `arguments` passed into hte function.  Use the `slice()` method on the array of arguments, starting from the second index 1.
2. Return the filtered array, using `includes()` in the callback function to check if `val` is not in `valsToRemove`; returning `true` to keep the value in the original array or `false` to remove it.

### REFERENCE LINKS
- [arguments](http://forum.freecodecamp.com/t/javascript-arguments/14283)
- [`Array.slice()`](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
- [`Array.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)


### Solution 3
```js
function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}
```

### Code Explanation
- Using spread operator to retrieve the arguments.
- Return the filtered array, using `includes()`.

### REFERENCE LINKS
- [Rest Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)


