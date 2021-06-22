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
  
/* Random Generator: Takes an array and returns a random item within that array. */

function randomGenerator(thingArray) {
  thingNum = thingArray.length - 1;
  num = Math.round(Math.random() * thingNum);
  return thingArray[num]; 
};


/* DOM MANIPULATION */

/* Element Builder: Builds an element, assigns it a class name, and assigns a parent element.*/

  function elementBuilder (elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
};

/* Link Builder: Takes an array of links and includes them in an unordered list. 
It also assigns a common class to each link and ensures that a new tab is opened when a
given link is clicked. This function also sets the anchor element's id to the name assigned to
the link object.*/

function linkBuilder(linkArray, ulVar, className, openNewTab) {
  for (let i = 0; i < linkArray.length; i++) {
      linkLi = elementBuilder('li', className, ulVar);
      linkAnchor = elementBuilder('a', 'nav-anchor', linkLi);
      linkAnchor.textContent = linkArray[i].name;
      linkAnchor.href = linkArray[i].link;
      linkLi.setAttribute("id", `${linkArray[i].name.toLowerCase()}`);
      
      if (openNewTab === true) {
          linkAnchor.rel = "noreferrer noopener";
          linkAnchor.target = "blank";
      };
  };
};

/* Button Builder: Builds a button with a span as a child element. */

function buttonBuilder(buttonClass, spanClass, parent) {
  let button = elementBuilder("button", buttonClass, parent);
  button.type = "button";
  let span = elementBuilder("span", spanClass, button);
  let buttonBuild = [button, span];
  return buttonBuild;
};

/* Button Builder Jr: Builds a series of buttons and appends them to a parent 
based an array of strings. Need to include more functionality, ideally to filter 
content based on the button's purpose. */

function buttonBuilderJr(buttonArray, parent) {
  let buttonElementArray = [];
  for (i = 0; i < buttonArray.length; i++) {
      let projectButton = elementBuilder("button", "btn", parent);
      projectButton.type = "button";
      projectButton.classList.add("btn-outline-primary");
      projectButton.innerHTML = buttonArray[i];
      buttonElementArray.push(projectButton);
  };
  return buttonElementArray;
};


/* Section Builder: Builds a section with a child div "container" and a row, specifically
for integration with Bootstrap. */

function sectionBuilder(sectionName) {
  let section = elementBuilder("section", sectionName, body);
  section.setAttribute("id", sectionName);
  let sectionContainer = elementBuilder("div", "container", section);
  let sectionRow = elementBuilder("div", "row", sectionContainer);
  let sectionElements = [section, sectionContainer, sectionRow];
  return sectionElements;
};

/* Builds "project boxes" based on image data, and appends them to a parent element. 
Need to add functionality for links.*/

function projectBoxBuilder(imgSrc, projectTitle, description, parent) {
  let projectBodyCol = elementBuilder("div", "col-lg-4", parent);
  let projectBox = elementBuilder("div", "project-box", projectBodyCol);
  projectBox.classList.add("shadow");
  let projectImage = elementBuilder("img", "img-fluid", projectBox);
  projectImage.alt = description;
  projectImage.src = imgSrc;
  projectImage.title = projectTitle;
  let projectInfo = elementBuilder("div", "project-info", projectBox);
  let caption = elementBuilder("div", "caption", projectInfo);
  let captionHead = elementBuilder("h4", "caption-head", caption);
  captionHead.innerHTML = projectTitle;
  let captionDesc = elementBuilder("p", "caption-description", caption);
  captionDesc.innerHTML = description;
  let projectElements = [projectBodyCol, projectBox, projectImage, projectInfo, caption, captionHead, captionDesc];
  return projectElements;
};

/* Project Iterator: Takes an array of objects containing project info and calls
projectBoxBuilder to create a series of boxes." */

function projectIterator(projectArray, parent) {
  let projectElementsArray = [];
  for (i = 0; i < projectArray.length; i++) {
      let newProject = projectArray[i];
      let newProjectElements = projectBoxBuilder(newProject.source, newProject.title, newProject.description, parent);
      projectElementsArray.push(newProjectElements);
  };
  return projectElementsArray;
};

/* Random image generator: Takes an object with a series of key-value pairs,
and returns a random pair. The key is mean to be the alt description for an image,
and the value is meant to be the image's file name. Incudes alt description as the second return value. */

function randomImageGenerator(imagesObject) {
  imageKeys = Object.keys(imagesObject);
  imageProps = Object.values(imagesObject);
  imageNum = imageKeys.length - 1;
  num = Math.round(Math.random() * imageNum);
  let newImageArray = [imageKeys[num], imageProps[num]];
  return newImageArray;
};




