$('document').ready( function() {
  var hangmanWords = ['adult', 'advice', 'arrangement', 'attempt', 'autumn',
  'border', 'breeze', 'brick', 'calm', 'canal', 'cast', 'chosen', 'claw', 'coach',
  'constant', 'contrast', 'cookie', 'custom', 'damage', 'deep', 'depth',
  'discussion', 'doll', 'donkey', 'essential', 'exchange', 'exist',
  'explanation', 'face', 'film', 'finest', 'fireplace', 'folk', 'fort',
  'garage', 'grandmother', 'habit', 'happy', 'hunter', 'image', 'independent',
  'instant', 'kids', 'label', 'mathematics', 'memory', 'mill', 'mission',
  'monkey', 'mountain', 'mysterious', 'neighborhood', 'nuts', 'occasional',
  'official', 'palace', 'plate', 'poetry', 'policeman', 'positive', 'possible',
  'practical', 'pride', 'promise', 'recall', 'relationship', 'remarkable',
  'require', 'rhyme', 'rocky', 'rush', 'sale', 'satellite', 'satisfaction',
  'scary', 'selection', 'shake', 'shallow', 'shout', 'silly', 'simples',
  'slight', 'slip', 'slope', 'soap', 'solar', 'species', 'spin', 'stiff',
  'swung', 'tale', 'thumb', 'tobacco', 'toy', 'tray', 'tune', 'university',
  'vapor', 'vessels', 'wealth', 'wolf', 'zoo'];

  var chances = 5;

  var wordBoard = $("#word_board")
  var chancesBoard = $("#chances_board")
  var notificationBoard = $("#notification")

  chancesBoard.html(chances)

  function createBoard(origin, guess) {
    for (i = 1; i <= origin.length; i++) {
     guess.push("_");
    }
  };

  function printBoard(word) {
    return word.join(" ")
  }

  var randomWord = hangmanWords[Math.round(Math.random() * (hangmanWords.length))].toUpperCase();
  var chosenWord = randomWord.split("")
  var guessedWord = [];
  var repeatingLetters = [];

  createBoard(randomWord, guessedWord);
  wordBoard.html(printBoard(guessedWord));

  console.log(chosenWord, guessedWord)

  $("input").keypress(function (event) {
    if (event.which === 13) {
      var guessedLetter = "";
      var input = $(this).val();
     if (/^[a-zA-Z]$/.test(input)) {
      // console.log("got you!")
      guessedLetter = input.toUpperCase();

      if (repeatingLetters.includes(guessedLetter)) {
        notificationBoard.html("You already guessed this letter!");
      } else {
        repeatingLetters.push(guessedLetter);
        if (chosenWord == "") {
        } else if (chosenWord.includes(guessedLetter)) {
          // console.log("before guessedWord is: ", guessedWord)
          chosenWord.forEach (function (currentLetter) {
           // while (chosenWord.includes(guessedLetter)) {
           if (guessedLetter === currentLetter) {
             var index = chosenWord.indexOf(currentLetter);
             chosenWord[index] = "_";
             guessedWord[index] = guessedLetter;
             wordBoard.html(printBoard(guessedWord));
           };
           // };
          })
        } else {
          chances = chances - 1;
          chancesBoard.html(chances);
        };
      }
    } else {
      notificationBoard.html("A letter and only one letter please!")
      guessedLetter = ""
    };

      $(this).val("")

      switch (chances) {
        case 4:
          $("span").css("color", "#229954");
          $("input").css("border-color", "#229954");
          break;
        case 3:
          $("span").css("color", "#F1C40F");
          $("input").css("border-color", "#F1C40F");
          break;
        case 2:
          $("span").css("color", "#FF851B");
          $("input").css("border-color", "#FF851B");
          break;
        case 1:
          $("span").css("color", "#C70039");
          $("input").css("border-color", "#C70039");
          break;
      };

      if (!guessedWord.includes("_")) {
        $(".gamewon").css("display", "block");
        $(".gameon").css("display", "none");
        $(".word_revealed").html("The word was: ".concat(randomWord.toUpperCase()));
      } else if (chances === 0) {
        $(".gameoff").css("display", "block");
        $(".gameon").css("display", "none");
        $(".word_revealed").html("The word was: ".concat(randomWord.toUpperCase()));
      };



    // console.log(guessedLetter)
    };
  });




  // function validate(input) {
  //   if (/^[a-zA-Z]$/.test(input)) {
  //     // console.log("got you!")
  //     return input.toLowerCase();
  //  } else {
  //     alert("A letter and only one letter please!")
  //  }
  // }



  // $('#board').HTML(displayWord)
});
