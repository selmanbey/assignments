from urllib.request import urlopen
from bs4 import BeautifulSoup as soup
import re

link = "http://www.oxfordislamicstudies.com/browse?_startPrefix=A&_hi=21"


# opens the connection, grabs and reads the page
uClient = urlopen(link)

page_html = uClient.read()

uClient.close()

#html parsing
page_soup = soup(page_html, 'html.parser')

title_elements = page_soup.findAll("a", {"class":"_result"})

titles = []

for element in title_elements:
    title = element.text.strip("\n").strip()
    title = re.sub(r"\s+", " ", title)
    titles.append(title)

print(titles)


