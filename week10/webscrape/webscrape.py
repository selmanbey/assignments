from urllib.request import urlopen
from bs4 import BeautifulSoup as soup
import re

link = "https://www.vocabulary.com/lists/52473"


# opens the connection, grabs and reads the page
uClient = urlopen(link)

page_html = uClient.read()

uClient.close()

#html parsing
page_soup = soup(page_html, 'html.parser')

allWords = page_soup.findAll("a", {"class":"word dynamictext"})
allDefinitions = page_soup.findAll("div", {"class":"definition"})

words = []
definitions = []

for word in allWords:
    currentWord = word.text
    words.append(currentWord)

for definition in allDefinitions:
    currentDef = definition.text
    definitions.append(currentDef)

game_dictionary = str(dict(zip(words, definitions)))

with open('gamedict.json', 'w') as f:
    f.write(game_dictionary)