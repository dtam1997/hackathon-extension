const body = document.querySelector('body');
//body.innerText = 'Can you see this??';
//const board = document.querySelector('#board');
//const head = new Head(board);

const image = document.createElement("img");
image.id = 'shrekFace';
const shrekFace = document.querySelector('#shrekFace');
body.appendChild(image);
const pirateUrl = "url(https://p.kindpng.com/picc/s/156-1569003_jack-sparrow-transparent-png-png-download.png)";
const shrekUrl = "url(https://pngimg.com/uploads/shrek/small/shrek_PNG6.png)";
const abeUrl = "url(https://cdn.britannica.com/34/78134-050-3AC7D4F8/Abraham-Lincoln-photograph-Mathew-Brady.jpg?w=400&h=300&c=crop)"
const shakespeareUrl = "url(https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg3NTExNDQ2ODU3/shakespeare-hero.jpg)";
const buddhaUrl = "url(https://c4.wallpaperflare.com/wallpaper/558/595/705/religious-buddhism-wallpaper-preview.jpg)";

const shrekQuotes = [
  "Get off of me swamp!",
  "Donkayyyy!",
  "Well it\'s no wonder you don\'t have any friends.",
  "Onions have layers, Ogres have layers.",
  "Somebody once told me the world is gonna roll me...",
  "Donkey, you have the right to remain silent. What you lack is the capacity.",
  "Well, That\'s Not Very Nice. It\'s Just A Donkey.",
  "Do you think maybe he's compensating for something?",
  "Hey! I'm no one's messenger boy, all right? I'm a delivery boy.",
  "What are you doing in my swamp?",
];


const pirateQuotes = [
  "This is the day you will always remember as the day you almost caught Captain Jack Sparrow.",
  "Not all treasure is gold and silver mate.",
  "I’m Captain Jack Sparrow. Savvy",
  "Face is familiar, have I threatened you before?",
  "Did everyone see that? Because I will not be doing it again.",
  "Why is the rum always gone?",
  "I've Got A Jar Of Dirt!",
  "But You Have Heard Of Me.",
  "If You Were Waiting For The Opportune Moment, That Was It.",
  "This Shot Is Not Meant For You.",
];

const abeQuotes = [];

const shakespeareQuotes = [];

const buddhaQuotes = [];


let cache;
fetch('https://type.fit/api/quotes')
  .then((data) => data.json())
  .then((data) => {
    cache = data;
    console.log(cache);
    // iterate through data, pull all abe lincoln quotes
    for(let i = 0; i < cache.length; i++) {
      if(cache[i]['author'] === 'Abraham Lincoln') {
        abeQuotes.push(cache[i]['text']);
      }
      if(cache[i]['author'] === 'William Shakespeare') {
        shakespeareQuotes.push(cache[i]['text']);
      }
      if(cache[i]['author'] === 'Buddha') {
        buddhaQuotes.push(cache[i]['text']);
      }
    }
    console.log(abeQuotes);
  })
  .catch((err) => {
    console.log('Error: ', err)
  });


let quotes = shrekQuotes;


const quoteBox = document.createElement("div");
quoteBox.id = 'quoteBox';
body.appendChild(quoteBox);


const quote = document.createElement("h2");
quote.id = 'quote';
quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

body.appendChild(quote);
//body.querySelector('#shrekFace').style.content =  "url(https://p.kindpng.com/picc/s/156-1569003_jack-sparrow-transparent-png-png-download.png";

setTimeout(enterQuote, 2000);


function enterQuote() {
  let opacity = Number(body.querySelector('#quote').style.opacity);
  if (opacity < 1) {
    opacity += 0.1;
    body.querySelector('#quote').style.opacity = opacity.toString();
    body.querySelector('#quoteBox').style.opacity = opacity.toString();
    setTimeout(enterQuote, 50);
  } else setTimeout(exitQuote, 3000);
}

function exitQuote() {
  let opacity = Number(body.querySelector('#quote').style.opacity);
  if (opacity > 0) {
    opacity -= 0.1;
    body.querySelector('#quote').style.opacity = opacity.toString();
    body.querySelector('#quoteBox').style.opacity = opacity.toString();
    setTimeout(exitQuote, 50);
  }
  else {
    setTimeout(function () {
      body.querySelector("#quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
      enterQuote();
    }, 800);
  }
}

//document.write('<audio id="player" src="" >');
//document.getElementById('player').play();


// const sound = new Audio("https://soundbible.com/477-R2D2.html");
// sound.play();
// setTimeout(sound.play, 2000);

// sound.addEventListener('canplaythrough', (e) =>{
//     sound.play();
// })

// shrekFace.style.onclick = function() {
//   clicked();
// }
let currentHead = shrekUrl;
function clicked() {
  if (currentHead === shrekUrl) {
    document.querySelector('#shrekFace').style.content = pirateUrl;
    quotes = pirateQuotes;
    currentHead = pirateUrl;
  }
  else if (currentHead === pirateUrl) {
    document.querySelector('#shrekFace').style.content = abeUrl;
    quotes = abeQuotes;
    currentHead = abeUrl;
  }
  else if (currentHead === abeUrl) {
    document.querySelector('#shrekFace').style.content = shakespeareUrl;
    quotes = shakespeareQuotes;
    currentHead = shakespeareUrl;
  }
  else if (currentHead === shakespeareUrl) {
    document.querySelector('#shrekFace').style.content = buddhaUrl;
    quotes = buddhaQuotes;
    currentHead = buddhaUrl;
  }
  else {
    document.querySelector('#shrekFace').style.content = shrekFace;
    quotes = shrekQuotes;
    currentHead = shrekFace;
  }

}
// body.addEventListener('keydown', (e) => {
//   if (e.code === 'ArrowDown') {
//     body.querySelector('#shrekFace').style.content =  "url(https://p.kindpng.com/picc/s/156-1569003_jack-sparrow-transparent-png-png-download.png";
//   }
// });
document.querySelector('#shrekFace').addEventListener('click', function (e) {
  clicked();
  console.log(cache);
})
