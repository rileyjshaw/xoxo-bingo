// garbage fire
//
//
//
//

// var theimages = JSON.parse(fs.readFileSync('static/public/icons/attendees.json', 'utf8'));
// var thenames = Object.keys(attendeesImages);

var dones = JSON.parse(localStorage.getItem('dones')) || [];

var goalz = [
  {
    icon: heyyyy-you,
    icongrey: heyyyy-you_grey,
    attrib: '',
    title: 'heyyy yyy...oooou?',
    description: 'mutually recognize someone and fail to remember each-other’s names',
  },
  {
    icon: meetspace,
    icongrey: meetspace_grey,
    attrib: 'Online Relationship by MRFA from the Noun Project',
    title: 'meetspace',
    description: 'talk to someone who you only know from the internet',
  },
  {
    icon: soda,
    icongrey: soda_grey,
    attrib: 'soda by Chad Remsing from the Noun Project',
    title: 'carbonated',
    description: 'try all of the sodas',
  },
  {
    icon: airstream,
    icongrey: airstream_grey,
    attrib: 'Trailer by Mourad Mokrane from the Noun Project',
    title: 'chromecast',
    description: 'check out the podcasting airstream',
  },
  {
    icon: 2018,
    icongrey: 2018_grey,
    attrib: 'female artist by Naveen Cs from the Noun Project',
    title: 'twenty eighteen',
    description: 'meet a comic artist, board game designer, or a kind of artist there wasn\'t a name for fifteen years ago',
  },
    {
    icon: andys,
    icongrey: andys_grey,
    attrib: '',
    title: 'starstruck',
    description: 'talk to one of the Andy’s in person',
  },
  {
    icon: heroes,
    icongrey: heroes_grey,
    attrib: 'Volunteer by Stephen Borengasser from the Noun Project',
    title: 'heroes',
    description: 'thank a volunteer and ask them about their time at XOXO',
  },
  {
    icon: whoami,
    icongrey: whoami_grey,
    attrib: 'Man with Question by Gan Khoon Lay from the Noun Project',
    title: 'whoami',
    description: 'forget your name badge',
  },
  {
    icon: pinpal,
    icongrey: pinpal_grey,
    attrib: '',
    title: 'pin pals',
    description: 'trade pins w a new friend',
  },
  {
    icon: quill,
    icongrey: quill_grey,
    attrib: 'quill by romzicon from the Noun Project',
    title: 'missive impossible',
    description: 'made a new pen pal',
  },
    {
    icon: incognito,
    icongrey: incognito_grey,
    attrib: 'HANNAH WEI MADE THIS!',
    title: 'incognito mode',
    description: 'introduce yourself without mentioning your job',
  },
  {
    icon: game,
    icongrey: game_grey,
    attrib: 'Game by Fengquan Li from the Noun Project',
    title: 'forever young',
    description: 'play a new game',
  },
  {
    icon: freebie,
    icongrey: freebie_grey,
    attrib: 'face mask by Nico Ilk from the Noun Project',
    title: 'freebie',
    description: 'have imposter syndrome',
  },
  {
    icon: pillow,
    icongrey: pillow_grey,
    attrib: '',
    title: 'zzz',
    description: 'lie down in the chill room!',
  },
  {
    icon: cry,
    icongrey: cry_grey,
    attrib: 'cry by AomAm from the Noun Project',
    title: 'bawler',
    description: 'openly cry with others during a conference talk',
  },
    {
    icon: carriage,
    icongrey: carriage_grey,
    attrib: 'Cinderella Carriage by Ates Evren Aydinel from the Noun Project',
    title: 'cinderella',
    description: 'stay until midnight each night',
  },
  {
    icon: mug,
    icongrey: mug_grey,
    attrib: 'mug by Hakan Yalcin from the Noun Project',
    title: 'mugged',
    description: 'get a mug at the blue ox',
  },
  {
    icon: eat,
    icongrey: eat_grey,
    attrib: 'food chat by corpus delicti from the Noun Project',
    title: 'eat and greet',
    description: 'have a meal with people who are complete strangers/future friends',
  },
  {
    icon: bird,
    icongrey: bird_grey,
    attrib: 'Bird by HIDEYUKI NOZAKI from the Noun Project',
    title: 'put a bird on it',
    description: 'do a "portland thing"! control the panic sign with your phone, ground kontrol, ...etc.',
  },
  {
    icon: slackers,
    icongrey: slackers_grey,
    attrib: 'Friends Posing for Camera by Gan Khoon Lay from the Noun Project',
    title: 'slackers',
    description: 'hit up a Social meetup',
  },
    {
    icon: hometown,
    icongrey: hometown_grey,
    attrib: '',
    title: 'hiya neighbor!',
    description: 'meet someone from your own hometown that you didn\'t know before',
  },
  {
    icon: timtam,
    icongrey: timtam_grey,
    attrib: '',
    title: 'slammer',
    description: 'do a Tim Tam Slam Jam',
  },
  {
    icon: presenter,
    icongrey: presenter_grey,
    attrib: '',
    title: 'casual',
    description: 'meet somebody who only later you realize is a speaker',
  },
  {
    icon: fan,
    icongrey: fan_grey,
    attrib: 'wishlist by Gonzalo Bravo from the Noun Project',
    title: 'new fan',
    description: 'add a book/artwork/album/game to a wishlist after meeting the person who made it',
  },
  {
    icon: meal,
    icongrey: meal_grey,
    attrib: 'meal by Ralf Schmitzer from the Noun Project',
    title: 'offroading',
    description: 'eat a meal away from a food truck',
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

  var iconImg = '<img class="icon" src="./icons/' + goal.icon + '.svg" alt="' + goal.title + '" />' + '<!-- ' + goal.attrib + '-->';

  square.innerHTML = dones[i]
    ? '<img class="icon" src="./icons/' + goal.icon + '_grey.svg" alt="' + goal.title + '" />' + '<!-- ' + goal.attrib + '-->'+
          ((i % 2) ? '<p class="pink">X</p>' : '<p class="pink">O</p>')
    : iconImg;

  square.addEventListener('click', function () {

    modal.setContent('<h1>' + iconImg + '<span>' + goal.title + '</span>' + '</h1><p>' + goal.description + '</p>');
    modal.setFooterContent('');

    if (goal.isDone) {
      modal.addFooterBtn('i lied before. i didn\'t do it yet, sorry!', 'tingle-btn tingle-btn--danger', function () {
        goal.isDone = false;
        square.innerHTML = iconImg;
        dones[i] = false;
        localStorage.setItem('dones', JSON.stringify(dones));
        modal.close();
      });
    } else {
      modal.addFooterBtn('i didn\'t do it yet!', 'tingle-btn tingle-btn--danger', function () {
        modal.close();
      });

      modal.addFooterBtn('i did it!', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function () {
        square.innerHTML = '<img class="icon" src="./icons/' + goal.icon + '_grey.svg" alt="' + goal.title + '" />' + '<!-- ' + goal.attrib + '-->'+
          ((i % 2) ? '<p class="pink">X</p>' : '<p class="pink">O</p>');

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
