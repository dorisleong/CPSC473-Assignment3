var array = {};
/* 1. Write a function that accepts an array of numbers 
as an argument and returns their average. */
array.avg = function (nums) {
  'use strict';
  var sum = 0;
  nums.forEach(function (value) {
    sum = sum + value;
  });
  return sum / nums.length;
};

/* 2. Write a function that accepts an array of numbers 
as an argument and returns the largest number in the array. */
array.max = function (nums) {
  'use strict';
  var maxNumber = nums[0];
  nums.forEach(function (value) {
    if (maxNumber < value) {
      maxNumber = value;
    }
  });
  return maxNumber;
};

/* 3. Write a function that accepts an array of numbers 
and returns true if it contains at least one even number, false otherwise. */
array.even = function (nums) {
  'use strict';
  return nums.some(function (value) {
    return value % 2 === 0;
  });
};

/* 4. Write a function that accepts an array of numbers 
and returns true if every number is even, false otherwise. */
array.allEven = function (nums) {
  'use strict';
  return nums.every(function (value) {
    return value % 2 === 0;
  });
};

/* 5. Write a function that accepts two arguments—an array of strings 
and a string—and returns true if the string is contained in the array, 
false otherwise. */
array.arrayContains = function (strArray, str) {
  'use strict';
  return strArray.some(function (element) {
    return element === str;
  });
};

/* 6. Write a function that is similar to the previous one, but returns 
true only if the array contains the given string at least twice: */
array.arrayContainsTwo = function (strArray, str) {
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

/* Once you have that working, write a function called arrayContainsThree 
that behaves similarly, but for three instead of two */
array.arrayContainsThree = function (strArray, str) {
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

/* Write a function that accepts three arguments and returns true if the
array contains the element n times, where n is the third argument */
array.arrayContainsNTimes = function (strArray, str, n) {
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

module.exports = array;