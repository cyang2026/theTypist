function displayStats() {
  var stat1 = document.getElementById("stat1");
  var stat2 = document.getElementById("stat2");
  var stat3 = document.getElementById("stat3");
  var stat4 = document.getElementById("stat4");
  stat1.style["animation-duration"] = "5s";
  stat1.style["animation-name"] = "stats";
  stat1.style.opacity = 1;
  setTimeout(function() {
    stat2.style["animation-duration"] = "5s";
    stat2.style["animation-name"] = "stats";
    stat2.style.opacity = 1;
    setTimeout(function() {
      stat3.style["animation-duration"] = "5s";
      stat3.style["animation-name"] = "stats";
      stat3.style.opacity = 1;
      setTimeout(function() {
        stat4.style["animation-duration"] = "5s";
        stat4.style["animation-name"] = "stats";
        stat4.style.opacity = 1;
      }, 3000)
    }, 3000)
  }, 3000)
};

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

function chooseLetter() {
  var num = rand(0, 1000);
  var letter;
  switch (true) {
    case (num < 111):
      letter = "e";
      return letter;
      break;
    case (num < 196):
      letter = "a";
      return letter;
      break;
    case (num < 272):
      letter = "r";
      return letter;
      break;
    case (num < 347):
      letter = "i";
      return letter;
      break;
    case (num < 419):
      letter = "o";
      return letter;
      break;
    case (num < 489):
      letter = "t";
      return letter;
      break;
    case (num < 556):
      letter = "n";
      return letter;
      break;
    case (num < 613):
      letter = "s";
      return letter;
      break;
    case (num < 668):
      letter = "l";
      return letter;
      break;
    case (num < 713):
      letter = "c";
      return letter;
      break;
    case (num < 749):
      letter = "u";
      return letter;
      break;
    case (num < 783):
      letter = "d";
      return letter;
      break;
    case (num < 815):
      letter = "p";
      return letter;
      break;
    case (num < 845):
      letter = "m";
      return letter;
      break;
    case (num < 875):
      letter = "h";
      return letter;
      break;
    case (num < 900):
      letter = "g";
      return letter;
      break;
    case (num < 920):
      letter = "b";
      return letter;
      break;
    case (num < 938):
      letter = "f";
      return letter;
      break;
    case (num < 956):
      letter = "y";
      return letter;
      break;
    case (num < 969):
      letter = "w";
      return letter;
      break;
    case (num < 980):
      letter = "k";
      return letter;
      break;
    case (num < 990):
      letter = "v";
      return letter;
      break;
    case (num < 993):
      letter = "x";
      return letter;
      break;
    case (num < 996):
      letter = "z";
      return letter;
      break;
    case (num < 998):
      letter = "j";
      return letter;
      break;
    case (num < 1000):
     letter = "q";
     return letter;
     break;
  }
}

function generateLetters() {
  var letterCount = rand(3, 7);
  var word = "";
  for (let i = 0; i < letterCount; i++) {
    var l = chooseLetter();
    word += l;
  }
  return word;
}

function generateWords(appendId) {
  var wordCount = 75;
  var para = "";
  for (let i = 0; i < wordCount; i++) {
    var word = generateLetters();
    para += word;
    para += " ";
  }
  var appendPara = document.getElementById(appendId);
  appendPara.innerHTML = para;
}

function calculateWPM(typed, time) {
  var wordsArray = typed.split(" ");
  var charsTyped = wordsArray.length;
  var wpm = Math.floor(charsTyped / (time/ 60));
  return wpm;
}

function countDown() {
  var clock = document.getElementById("clock");
  const interval = setInterval(function() {
    var currentTime = clock.innerHTML;
    clock.innerHTML = currentTime - 1;
    currentTime -= 1;
    if (currentTime === 0) {
      clearInterval(interval);
      var textarea = document.getElementById("textarea");
      var wordsWritten = textarea.value;
      var finalWPM = calculateWPM(wordsWritten, 60);
      findAccuracy("paragraph", "textarea", "accuracy");
      textarea.style.visibility = "hidden";
      var wpmAppend = document.getElementById("wpm");
      wpmAppend.innerHTML = "You got " + finalWPM + " WPM!";
    }
  }, 1000)
}

function beginTest() {
  var beginButton = document.getElementById("begin");
  beginButton.style.visibility = "hidden";
  generateWords("paragraph");
  countDown();
}

function findAccuracy(originalTextId, enteredTextId, appendId) {
  var originalText = document.getElementById(originalTextId).innerHTML;
  var enteredText = document.getElementById(enteredTextId).value;
  var score = 0;
  for (let i = 0; i < enteredText.length; i++) {
    if (enteredText[i] === originalText[i]) {
      score += 1;
    }
  }
  score /= enteredText.length;
  var finalAccuracy = score * 100;
  var accuracyAppend = document.getElementById(appendId);
  accuracyAppend.innerHTML = "Your accuracy was " + Math.round(finalAccuracy) + "%!";
}


function generateNums() {
  var final = "";
  for (let i = 0; i < 100; i++) {
    var num = rand(0, 9)
    num = num.toString();
    final += num;
    final += " ";
  }
  var appendNums = document.getElementById("nums");
  appendNums.innerHTML = final;
  var beginButton = document.getElementById("beginNumPractice");
  beginButton.remove();
  var textarea = document.getElementById("num-textarea");
  textarea.style.visibility = "visible";
  countUp("countup-clock");
  document.getElementById("done-nums").style.visibility = "visible";
}

function countUp(clockid) {
  var clock = document.getElementById(clockid);
  const interval = setInterval(function() {
    var currentTime = parseInt(clock.innerHTML, 10);
    clock.innerHTML = currentTime + 1;
    currentTime += 1;
  }, 1000)
}

function checkNums() {
  var clock = document.getElementById("countup-clock");
  var time = clock.innerHTML;
  clock.remove();
  var wordsWritten = document.getElementById("num-textarea").value;
  findAccuracy("nums", "num-textarea", "accuracy-append-nums");
  var finalWPM = calculateWPM(wordsWritten, time);
  var appendWPM = document.getElementById("wpm-append-nums");
  appendWPM.innerHTML = "You got " + finalWPM + " WPM!";
  setInterval(function() {
    location.reload();
  }, 5000)
}

function beginWordPractice() {
  countUp("word-countup-clock");
  document.getElementById("word-textarea").style.visibility = "visible";
  generateWords("words");
  document.getElementById("done-words").style.visibility = "visible";
}

function checkWords() {
  var clock = document.getElementById("word-countup-clock");
  var time = clock.innerHTML;
  clock.remove();
  var wordsWritten = document.getElementById("word-textarea").value;
  findAccuracy("words", "word-textarea", "accuracy-append-words");
  var finalWPM = calculateWPM(wordsWritten, time);
  var appendWPM = document.getElementById("wpm-append-words");
  appendWPM.innerHTML = "You got " + finalWPM + " WPM!";
  setInterval(function() {
    location.reload();
  }, 5000)
}
