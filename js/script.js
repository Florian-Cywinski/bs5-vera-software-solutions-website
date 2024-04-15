// Replace Text In Header - By using an third party script - 1. Create a new instance (new ReplaceMe) 2. Pass in the target element (class of replace-me) 3. Set some options
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {    // To make sure the class is there
  const replace = new ReplaceMe(checkReplace, { // ReplaceMe is a new instance of a class from the third party script replaceme.min.js
    animation: 'animated fadeIn',
    speed: 2000,    // 2 s
    separator: ',', // To separate Small Business, Startups, Enterprise - see in index.html
    loopCount: 'infinite',
    autoRun: true,
  });
}