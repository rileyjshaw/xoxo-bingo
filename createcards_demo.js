// Quick demo of an algorithm to create bidirectional card pairs, so if
// you're on my card, I'm on yours.
//
// Naive implementation isn't as biased as I thought it'd' be, #shipit I guess?

// Create some placeholder names, etc.
function generateName() {
  return Array.from({length: 5}, () => Math.floor(Math.random() * 5)).join('');
}

function generateNameList() {
  return Array.from({length: 400}, generateName).sort((a, b) => a - b);
}

var list = generateNameList();

// Actual algorithm starts here.
var cards = Array.from({length: list.length}, () => []);

for (var i = 0; i < list.length; ++i) {
  var resetEverythingCounter = 0;
  var j = cards[i].length;
  console.log(i, j);
  // This algorithm doesn't always work; you may reach the end of the list and
  // have not enough free people left to fill the remaining cards. If this
  // happens `resetEverythingCounter` fills up and we bail and completely try
  // again. With 400 people it usually only takes one or two tries, shockingly.
  while (j < 24 && resetEverythingCounter < 700) {
    var partnerIdx = i + 1 + Math.floor(Math.random() * (list.length - i - 1));
    if (cards[partnerIdx].length < 24) {
      cards[i].push(list[partnerIdx]);
      cards[partnerIdx].push(list[i]);
      ++j;
    }
    ++resetEverythingCounter;
  }
  if (resetEverythingCounter >= 700) {
    i = 0;
    cards = Array.from({length: list.length}, () => []);
    console.log('RESETTING EVERYTHING... AGAIN!');
  }
}

console.log('DONE!');

// Printed these to graph the relationships and see if there's a super obvious
// bias (eg. people near the end of the list are paired with each-other more
// often). If a bias exists it's not suuuper obvious so that seems good enough.
var sums = cards.map(card => card.reduce((a, c) => a + parseInt(c), 0));
var sumBins = [];

for (var x = -1, y = 0; y < sums.length; ++y) {
  if (y % 25 === 0) {
    ++x;
    sumBins[x] = 0;
  }
  sumBins[x] += sums[y];
}

for (bin of sumBins) {
  console.log(bin);
}
