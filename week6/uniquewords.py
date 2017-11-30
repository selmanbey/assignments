from uniquewordslib import *


def main():
    clear_screen()
    print(welcome_info)
    source_text = get_source(get_source_info)
    words_list = clean_source(source_text)

    all_words = []
    repeating_words = []

    sort_words(words_list, all_words, repeating_words)

    unique_words = []

    find_unique_words(all_words, repeating_words, unique_words)
    outcome_text = clean_outcome(unique_words)

    create_outcome_txt(outcome_text, create_outcome_txt_info)
    print(goodbye_info)


if __name__ == "__main__":
    main()
