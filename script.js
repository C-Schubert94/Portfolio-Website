let root = document.documentElement;;
let heading = document.querySelector('h3');
let headingText = heading.textContent;
let headingCount = headingText.length;

    console.log(headingCount)

root.style.setProperty('--typewriterChar', headingCount)