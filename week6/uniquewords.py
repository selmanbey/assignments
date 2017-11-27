import re


def main():
    with open("source.txt") as source:
        source_text = source.read()
    source.closed

    source_text = re.sub('[!@#$()1234567890½►…"%,.<>=\'\/;:*?’“”\-]', '', source_text)  # not exactly sure how this works but it does

    words_list = sorted(source_text.split())

    all_words = []
    repeating_words = []

    for x in words_list:
        if len(x) < 2:
            pass
        elif x in all_words:
            repeating_words.append(x)
        else:
            all_words.append(x)

    unique_words = []

    for x in all_words:
        if x in repeating_words:
            pass
        else:
            unique_words.append(x)

    outcome_text = "\n".join(sorted(unique_words))

    with open("outcome.txt", "w") as outcome:
        outcome.write(outcome_text)
    outcome.closed


if __name__ == "__main__":
    main()
