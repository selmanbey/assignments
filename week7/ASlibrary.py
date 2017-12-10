import os
import re
import string
import random


class Hangman():
    hangmanDict = {}
    board = ""

    def getInput(self):
        while True:
            guess = input("Guess A Letter: ")
            if len(guess) == 1 and re.match(r'[a-zA-Z]', guess):
                return guess.upper()
                break
            else:
                pass

    def askDifficulty(self):
        print("Choose Difficulty: [1] Easy, [2] Normal, [3] Hard \n")
        while True:
            number = input()
            try:
                number = int(number)
                if number in range(1, 4):
                    return number
                    break
                else:
                    pass
            except Exception:
                pass

    def chooseDifficulty(self, number):
        gameDifficulty = ""
        if number == 1:
            gameDifficulty = "easy"
        elif number == 2:
            gameDifficulty = "normal"
        else:
            gameDifficulty = "hard"
        return gameDifficulty

    def chooseWord(self, gameDifficulty):
        while True:
            word = random.choice(list(self.hangmanDict.keys()))
            if self.hangmanDict[word] == gameDifficulty:
                return word
                break
            else:
                pass

    def printBoard(self):
        printedBoard = (" ").join(self.board)
        print(printedBoard)

    def checkScore(self, word, chances):
        checkword = []
        for x in range(len(word)):
            checkword.append("_")
        if word == checkword:
            self.printBoard()
            print("Congratulations! You won!")
            return True
        elif chances == 0:
            print("You lost!")
            return True
        else:
            pass

    def playTurn(self, word, chances):
        self.printBoard()
        guessedLetter = self.getInput()
        if guessedLetter not in word:
            chances -= 1
            print("Chances left: " + str(chances))
            return chances
        else:
            while guessedLetter in word:
                for letter in word:
                    if guessedLetter == letter:
                        index = word.index(letter)
                        word[index] = "_"
                        self.board[index] = guessedLetter
                        return chances


# SELF-STANDING FUNCTIONS
def readSource(text):
    with open(text) as f:
        for line in f:
            yield re.findall(r'[a-zA-Z][a-zA-z]*', line)


def cleanSource(aList):
    for line in readSource('source.txt'):
        for word in line:
            if len(word) >= 3:
                if word[1] == "a" or word[1] == "A":
                    aList.append(word.upper())
                elif word[len(word) - 1] == "s" or word[len(word) - 1] == "S":
                    aList.append(word.upper())
    return aList


def assignDifficulty(word):
    difficulty = "normal"
    if len(word) > 6:
        difficulty = "hard"
    elif len(word) <= 4:
        difficulty = "easy"
    return difficulty
