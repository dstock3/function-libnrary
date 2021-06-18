/* Write a function called capitalize that takes a string and returns 
that string with only the first letter capitalized. Make sure that it 
can take strings that are lowercase, UPPERCASE or BoTh.*/

function capitalize(string) {
    firstLetter = string[0];
    capFirstLetter = firstLetter.toUpperCase();
    lowerCaseStr = string.toLowerCase();
    modifiedStr = lowerCaseStr.substring(1);
    finalString = capFirstLetter + modifiedStr;
    return finalString;
};

/*Write a function called lastLetter that takes a string and returns the 
very last letter of that string*/

function lastLetter(string) {
    stringLength = string.length;
    lastL = string[stringLength - 1];
    return lastL;
};

/*Write a function min(a,b) which returns the least of two numbers a and b.*/

function min(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return undefined
    }
};

/*Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result.
P.S. In this task the function should support only natural values of n: integers up from 1.*/

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

  /* Create your own isArray() function. */

  function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
  }


/*   Create a function which returns the number of true values there are in an array. */

function countTrue(anArray) {
  let num = 0;
  for (i = 0; i <= anArray.length -1; i++) {
    if (anArray[i] === true) {
      num = num + 1;
    } else {
      continue;
    }
  }
  return(num);
}

/* Implement a function that takes 2 integers and returns the sum of every number between(and including) them */

  const sumAll = function(x, y) {
    let sum = 0;
  
    if (x < y) {
      for (i = x; i <= y; i++) {
        sum += i;
      }
    }
    if (y < x) {
      for (i = y; i <= x; i++) {
        sum += i;
      }
    }
    if (y === x) {
      sum = (y + x);
    }
    if (x < 0 || y < 0) {
      sum = "ERROR";
    };
    if (!(Number.isInteger(x)) || !(Number.isInteger(y))) {
      sum = "ERROR";
    }
    return sum;
  };

  /* Create a function that determines whether or not a given year is a leap year. */

  const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  }

  /* Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa: */

  const ftoc = function(num) {
    cel = (num - 32) * (5 / 9);
    cel = Math.round(cel * 10) / 10; 
    return cel;
  }
  
  const ctof = function(num) {
    far = (num) * (9/5) + 32;
    far = Math.round(far * 10) / 10; 
    return far;
  }
  