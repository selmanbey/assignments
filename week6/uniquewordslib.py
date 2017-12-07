import os
import re

welcome_info = """UNIQUE WORDS DETECTOR \n
This is a Python3 script that takes a plain text file, scans it and finds all the unique words in that file, that is the words that only occur once.
It then creates another plain text file and writes these words into it, each on its own line.
"""
get_source_info = "To start, please enter the name of the file you want to execute the script on. Make sure that the file is in the same folder with the script.\n\nThe script only works with .txt files. It automatically adds the extension \".txt\", so enter only the name of the file: \n"
create_outcome_txt_info = "\nPlease enter a name for your outcome file. It will automatically be created in .txt format, so no need to manually write an extension: \n\n"
goodbye_info = "\nCongratulations! A new .txt file is created with the name you provided. It contains only the unique words in the text you executed the script on. You can find the file in the same folder with the script. Best of luck!"


def clear_screen():
    os.system("clear")


def get_source(message:str)->str:
    """Reads given source file and returns contents.

    Returns:
        str -- Contents of the file.
    """
    print(message)
    condition = True
    while condition:
            name_of_file = input() + ".txt"
            if os.path.isfile("./" + name_of_file):
                condition = False
            else:
                print("Either the file does not exist in the same folder with the script, or you entered its name wrong. Please try again: \n")

    with open(name_of_file) as source:
        source_text = source.read()

    return source_text  # returns a string


def clean_source(string):
        string = re.sub('[+_˜µ≤≥÷«‘©»∆˚¬Ω≈ç√ß∑´®†¥¨øπ‘√≈!@#$(^)123456&~|}{7890½►…"%,.<>=\'\/;:*?’“”\-]', '', string)
        string = string.lower()
        return sorted(string.split())  # returns a list


def sort_words(source_as_a_list, all_words_list, repeating_words_list):
    """Args:
    source_as_a_list = cleaned up source file in list type
    all_words_list = a blank list to store all the words that appear in the source
    repeating_words_list = a blank list to store all the repeating words in the source
    """
    for x in source_as_a_list:
        if len(x) < 2:
            pass
        elif x in all_words_list:
            repeating_words_list.append(x)
        else:
            all_words_list.append(x)


def find_unique_words(all_words_list, repeating_words_list, unique_words_list):
    """ Args:
    all_words_list = a list of all the words that appear in the source
    repeating_words_list = a list of all the repeating words in the source
    unique_words_list = a blank list to store only the words that appear once
    """
    for x in all_words_list:
        if x in repeating_words_list:
            pass
        else:
            unique_words_list.append(x)


def clean_outcome(unique_words):
    return "\n".join(sorted(unique_words))


def create_outcome_txt(outcome_text, message):
    condition = True
    while condition:
        name_of_file = input(message)
        try:
            with open(name_of_file + ".txt", "w") as outcome:
                outcome.write(outcome_text)

            condition = False
        except:
            print("The name you wrote contains invalid characters. Please try another name: \n")
