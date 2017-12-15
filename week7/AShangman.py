from ASlibrary import *


def main():
    # PRE-GAME
    hangmanWords = []  # camelCase is only for class names
    cleanSource(hangmanWords)

    game = Hangman()

    for word in hangmanWords:
        game.hangmanDict[word] = assignDifficulty(word)

    # SETTING DIFFICULTY

    difficulty = game.askDifficulty()
    gameDifficulty = game.chooseDifficulty(difficulty)
    gameOfTheWord = list(game.chooseWord(gameDifficulty))

    # SETTING BOARD
    game.board = list("_" * len(gameOfTheWord))

    # GAMEPLAY
    chances = 4
    gameEnd = False

    while not gameEnd:
        chances = game.playTurn(gameOfTheWord, chances)
        gameEnd = game.checkScore(gameOfTheWord, chances)
        if gameEnd:
            break


if __name__ == "__main__":
    main()
