import re


def main():
    with open("source.txt") as source:
        source_text = source.read()
    source.closed

    with open("outcome.txt") as outcome:
        outcome_text = outcome.read()
    source.closed

    outcome_list = outcome_text.split()
    source_text = re.sub('[!@#$()1234567890½►…"%,.<>=\'\/;:*?’“”\-]', '', source_text)
    source_text = source_text.lower()
    source_list = source_text.split()

    repeat_number = 0

    for x in outcome_list:
        if x in source_text:
            repeat_number += 1

    print(len(outcome_list))
    print(repeat_number)


if __name__ == "__main__":
    main()
