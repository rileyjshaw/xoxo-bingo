// garbage fire
//
//
//
//

var dones = JSON.parse(localStorage.getItem('dones')) || [];
var goalz = [
  {
    icon: 'buddies',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'instant buddies',
    description: 'introduce yourself to someone looking for a buddy',
  },
  {
    icon: 'share',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'share',
    description: 'tell someone about xoxo who hasn\'t heard of it',
  },
  {
    icon: 'carriage',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'cinderella',
    description: 'stay until closing',
  },
  {
    icon: 'casual',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'casual',
    description: 'meet somebody who only later you realize is a speaker',
  },
  {
    icon: 'slackers',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'slackers',
    description: 'hit up a Social meetup',
  },
  {
    icon: 'bawler',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'bawler',
    description: 'openly cry with others during a conference talk',
  },
  {
    icon: 'starstruck',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'starstruck',
    description: 'talk to one of the Andys in person',
  },
  {
    icon: 'game',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'forever young',
    description: 'play a new game',
  },
  {
    icon: 'incognito',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'incognito mode',
    description: 'introduce yourself without mentioning your job',
  },
  {
    icon: 'exit',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'exit, pursued by a bear',
    description: 'consider quitting your job because of XOXO',
  },
  {
    icon: 'heyyyy',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'heyyy yyy...oooou?',
    description: 'mutually recognize someone and fail to remember each-other’s names',
  },
  {
    icon: 'heroes',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'heroes',
    description: 'thank a volunteer and ask them about their time at XOXO',
  },
  {
    icon: 'freebie',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'freebie',
    description: 'drink water!',
  },
  {
    icon: 'lunchgames',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'lunchgames',
    description: 'play a board game with strangers-turned-new-friends during lunch',
  },
  {
    icon: 'hometown',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'hiya neighbor!',
    description: 'meet someone from your own hometown that you didn\'t know before',
  },
  {
    icon: 'allstar',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'all star',
    description: 'do karaoke',
  },
  {
    icon: 'fan',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'new fan',
    description: 'add a book / artwork / album / game to a wishlist after meeting the person who made it',
  },
  {
    icon: 'eat',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'eat and greet',
    description: 'have a meal with people who are complete strangers/future friends',
  },
  {
    icon: 'bird',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'put a bird on it',
    description: 'do a "portland thing"! control the panic sign with your phone, ground kontrol, ...etc.',
  },
  {
    icon: 'linguist',
    title: 'linguist',
    description: 'meet three people whose first language isn\'t English',
  },
  {
    icon: 'whoami',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'whoami',
    description: 'forget your name badge',
  },
  {
    icon: 'soda',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'carbonated',
    description: 'try all of the sodas',
  },
  {
    icon: 'offroading',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'offroading',
    description: 'eat a meal away from a food truck',
  },
  {
    icon: 'slammer',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'slammer',
    description: 'do a Tim Tam Slam Jam',
  },
  {
    icon: 'meetspace',
    attrib: 'Illustrated by Julia Skott: juliaskott.com',
    title: 'meetspace',
    description: 'talk to someone who you only know from the internet',
  }
];

goalz.forEach(function (goal, i) {
  goal.isDone = dones[i];
});

var modal = new tingle.modal({
  footer: true,
  stickyFooter: true,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: 'Close',
  cssClass: ['modal'],
});

var grid = document.querySelector('table');
var squares = Array.from(document.querySelectorAll('.goalz'));
var rulez = document.querySelector('.rulez');

squares.forEach(function (square, i) {
  var goal = goalz[i];
  if (!goal) return;

  var iconImg = '<img class="icon" src="./icons/' + goal.icon + '.png" alt="' + goal.title + '" />' + '<!-- ' + goal.attrib + '-->';
  var iconImgGrey = '<img class="icon" src="./icons/' + goal.icon + '_grey.png" alt="' + goal.title + '" />' + '<!-- ' + goal.attrib + '-->';
  var svgX = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="100" x2="100" y2="0" stroke="#000" stroke-width="8" /><line x1="0" y1="0" x2="100" y2="100" stroke="#000" stroke-width="8" /></svg>'
  var svgO = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle stroke="#000" stroke-width="8" fill="none" cx="50" cy="50" r="46"/></svg>'
  square.innerHTML = dones[i]
    ? iconImg + ((i % 2) ? svgX : svgO)
    : iconImgGrey;

  square.addEventListener('click', function () {
    modal.setContent('<h1>' + iconImg + '<span>' + goal.title + '</span>' + '</h1><p>' + goal.description + '</p>');
    modal.setFooterContent('');

    if (goal.isDone) {
      modal.addFooterBtn('i lied before. i didn\'t do it yet, sorry!', 'tingle-btn tingle-btn--danger', function () {
        goal.isDone = false;
        square.innerHTML = iconImgGrey;
        dones[i] = false;
        localStorage.setItem('dones', JSON.stringify(dones));
        modal.close();
      });
    } else {
      modal.addFooterBtn('i didn\'t do it yet!', 'tingle-btn tingle-btn--danger', function () {
        modal.close();
      });

      modal.addFooterBtn('i did it!', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function () {
        square.innerHTML = iconImg + ((i % 2) ? svgX : svgO);

        goal.isDone = true;
        dones[i] = true;
        localStorage.setItem('dones', JSON.stringify(dones));

        modal.close();
      });
    }

    modal.open();
  }, false);

  rulez.innerHTML += '<li>' + iconImg + '<strong>' + goal.title + '</strong><p>' + goal.description + '</p></li>';
});

rulez.innerHTML += '<li></li>';

window.setTimeout(function () {
  grid.className += ' okayShowItNowIGuess';
  rulez.className += ' okayShowItNowIGuess';
}, 400);