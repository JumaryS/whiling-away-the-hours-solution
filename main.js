// makeChallengeBanner(1);
function makeChallengeBanner(n) {
  console.log(`######## Challenge ${n} ########`)
}
// -> ######## Challenge 1 ########

makeChallengeBanner(1);


// makeChallengeBanner(2);
// -> ######## Challenge 2 ########
// makeChallengeBanner(2);
// -> ######## Challenge 2 ########

function countTo5() {
  let num = 1;

  while (num <= 5) {
    console.log(num);
    num = num + 1;
  }
}

countTo5();

makeChallengeBanner(2);
// -> ######## Challenge 3 ########

function countUpTo(n) {
  let num = 1;

  while (num <= n) {
    console.log(num);
    num = num + 1;
  }
}

countUpTo(6);

makeChallengeBanner(3);
function count(start, end) {
  let num = start;

  while (num <= end) {
    console.log(num);
    num = num + 1;
  }
}

count(5, 8);

makeChallengeBanner(4);

function evenOrOdd(end) {
  let num = 1;
  
  while (num <= end) {
    console.log(num);

    if (num % 2 === 0) {
      console.log('Even');
    } else {
      console.log('Odd')
    }
    
    num = num + 1;
  }
}

evenOrOdd(5);

makeChallengeBanner(5)
function printEvenOnly (end) {
  let num = 1;
  while (num <= end) {
    if (num % 2 === 0) {
      console.log(num);
    } 

    num = num + 1;
  }
}

printEvenOnly(7);

makeChallengeBanner(6);

function countdown() {
  let num = 10;

  while (num >= 1) {
    console.log(num);
    num = num - 1;
  }
}

countdown();


makeChallengeBanner(7);

function countdownWithBlastoff() {
  let num = 10;

  while (num >= 1) {
    console.log(num);
    num = num - 1;
  }

  // Or, using our earlier code:
  // countdown();
  
  console.log('Blast off!')
}

countdownWithBlastoff();

makeChallengeBanner(8);

function countdownBy3s(start) {
  let num = start;

  while (num >= 1) {
    console.log(num);
    num = num - 3;
  }
}

countdownBy3s(20);


makeChallengeBanner(9);

function hello7() {
  let num = 1;

  while (num <= 7) {
    console.log(num + '. Hello!');
    num = num + 1;
  }
}

hello7();

makeChallengeBanner(10);
function repeat7(str) {
  let num = 1;

  while (num <= 7) {
    console.log(num + '. ' + str);
    num = num + 1;
  }
}

repeat7('Hi!');

makeChallengeBanner(11);

function repeat(str, end) {
  let num = 1;

  while (num <= end) {
    console.log(str);
    num = num + 1;
  }
}

repeat('Hey annoying people!', 8);

function printCharacters(str) {
  let i = 0;

  while (i < str.length) {
    console.log(str[i]);
    i = i + 1;
  }
}

printCharacters('hello')

makeChallengeBanner(13)
function printEveryOtherCharacter(str) {
  let i = 0;
  
  while (i < str.length) {
    if (i % 2 === 1) {
      console.log(str[i]);
    }
    i = i + 1;
  }
}

printEveryOtherCharacter('nobody');

makeChallengeBanner(14);


function printCharactersBackwards(str) {
  let i = str.length - 1;

  while (i >= 0) {
    console.log(str[i]);
    i = i - 1;
  }
}

printCharactersBackwards('hello')


function printStringBackwards(str) {
  let backwards = '';
  let i = str.length - 1;

  while (i >= 0) {
    backwards = backwards + str[i];
    i = i - 1;
  }

  // console.log(backwards)

  console.log(str.split('').reverse().join(''))
}


function fizzBuzz(end) {
  let num = 1;
  while (num <= end) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log('FizzBuzz');
    } else if (num % 5 !== 0 && num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0 && num % 3 !== 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
    
    num = num + 1;
  }
}
makeChallengeBanner(15);
fizzBuzz(15);
