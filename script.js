// Get the navigation bar
var navbar = document.querySelector("nav");

// Get all links in the navigation bar
var links = navbar.querySelectorAll("a");

// Add a click event listener to each link
links.forEach(function(link) {
  link.addEventListener("click", function() {
    // Remove the active class from all links
    links.forEach(function(link) {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    link.classList.add("active");
  });
});

var i = 0;
var txt = 'The Earth is the cradle of humanity but mankind cannot stay in the cradle forever.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quote").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => { document.getElementById("marks1").style.visibility = 'visible' }, 10);
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("marks").style.visibility = 'visible';
    setTimeout(() => {
      typeWriter();
    }, 100);
  }, 100);
  
})


const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };
    
    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, options.timeout);
    };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}

/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
const strings = [
  'Yo mama\'s so fat, when she fell I didn\'t laugh, but the sidewalk cracked up.',
  'Yo mama\'s so fat, when she skips a meal, the stock market drops.',
  'Yo mama\'s so fat, it took me two buses and a train to get to her good side.',
  'Yo mama\'s so fat, when she goes camping, the bears hide their food.',
  'Yo mama\'s so ugly, her birth certificate is an apology letter.',
  'Yo mama so ugly, she walked into a haunted house and walked back out with a job application.',
  'Oh thank god, you\'re alright.',
  'You know, being Caroline taught me a valuable lesson. I thought you were my greatest enemy. When all along you were my best friend.',
  'The surge of emotion that shot through me when I saved your life taught me an even more valuable lesson: where Caroline lives in my brain.',
  'Goodbye, Caroline.',
  'You know, deleting Caroline just now taught me a valuable lesson. The best solution to a problem is usually the easiest one. And I\'ll be honest.',
  'Killing you? Is hard.',
  'You know what my days used to be like? I just tested. Nobody murdered me. Or put me in a potato. Or fed me to birds. I had a pretty good life.',
  'And then you showed up. You dangerous, mute lunatic. So you know what?',
  'You win.',
  'Just go.',
  'It\'s been fun. Don\'t come back.',
  '......'
];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;
    
    if (counter >= strings.length) {
      counter = 0;
    }
    
    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 5000);
}

resolver.resolve(options, callback);

document.querySelectorAll("a['href']").forEach((elem)=>{
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    let img = document.createELement('img');
    img.src = "https://qph.cf2.quoracdn.net/main-qimg-750ac92f71e64b3d51611b9540e93920";
    img.style.position = "absolute";
    img.style.left = "0px";
    img.style.top = "0px";
    img.style.zIndex = "9999"
    img.height = "100vh";
    img.
  })
})
