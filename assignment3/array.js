/* 1. Write a function that accepts an array of numbers 
as an argument and returns their average. */
var avg = function (nums) {
  'use strict';
  var sum = 0;
  nums.forEach(function (value) {
    sum = sum + value;
  });
  return sum / nums.length;
};
avg([1, 2, 3, 4]);

/* 2. Write a function that accepts an array of numbers 
as an argument and returns the largest number in the array. */
var max = function (nums) {
  'use strict';
  var maxNumber = nums[0];
  nums.forEach(function (value) {
    if (maxNumber < value) {
      maxNumber = value;
    }
  });
  return maxNumber;
};
max([1, 3, 5, 2]);

/* 3. Write a function that accepts an array of numbers 
and returns true if it contains at least one even number, false otherwise. */
var even = function (nums) {
  'use strict';
  return nums.some(function (value) {
    return value % 2 === 0;
  });
};
even([1, 3, 5]);

/* 4. Write a function that accepts an array of numbers 
and returns true if every number is even, false otherwise. */
var allEven = function (nums) {
  'use strict';
  return nums.every(function (value) {
    return value % 2 === 0;
  });
};
allEven([2, 4, 6]);

/* 5. Write a function that accepts two arguments—an array of strings 
and a string—and returns true if the string is contained in the array, 
false otherwise. */
var arrayContains = function (strArray, str) {
  'use strict';
  return strArray.some(function (element) {
    return element === str;
  });
};
arrayContains(['hello', 'world'], 'hello');

/* 6. Write a function that is similar to the previous one, but returns 
true only if the array contains the given string at least twice: */
var arrayContainsTwo = function (strArray, str) {
  'use strict';
  var count = 0;
  strArray.forEach(function (value) {
    if (value === str) {
      count++;
    }
  });
  if (count >= 2) {
    return true;
  } else {
    return false;
  }
};
arrayContainsTwo(['a', 'b', 'a', 'c'], 'a');

/* Once you have that working, write a function called arrayContainsThree 
that behaves similarly, but for three instead of two */
var arrayContainsThree = function (strArray, str) {
  'use strict';
  var count = 0;
  strArray.forEach(function (value) {
    if (value === str) {
      count++;
    }
  });
  if (count >= 3) {
    return true;
  } else {
    return false;
  }
};
arrayContainsThree(['a', 'b', 'a', 'a'], 'a');

/* Write a function that accepts three arguments and returns true if the
array contains the element n times, where n is the third argument */
var arrayContainsNTimes = function (strArray, str, n) {
  'use strict';
  var count = 0;
  strArray.forEach(function (value) {
    if (value === str) {
      count++;
    }
  });
  if (count >= n) {
    return true;
  } else {
    return false;
  }
};
arrayContainsNTimes(['a', 'b', 'a', 'c', 'a'], 'a', 3);