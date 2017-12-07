import os
import re
from collections import defaultdict
from pprint import pprint

def readfile(fn):
  with open(fn) as f:
    for line in f:
      yield line


def unique(source_path):
  uniques = set()
  
  for line in readfile(source_path):
    words = set([x.lower() for x in line.split() 
                           if re.search(r'^[a-zA-Z]+$', x)])
    uniques = uniques.union(words)

  return uniques


def count(source_path):
  counter = defaultdict(int)

  for line in readfile(source_path):
    for word in [x.lower() for x in line.split() 
                           if re.search(r'^[a-zA-Z]+$', x)]:
      counter[word] += 1

  return counter


def once(d):
  return [x for x, y in d.items() if y == 1]


def export(s):
  folder, _ = os.path.split(__file__)
  outfile = os.path.join(folder, 'result.txt')

  with open(outfile, mode='w') as f:
    for x in s:
      f.write(x)
      f.write('\n')


def main():
  folder, _ = os.path.split(__file__)
  source_path = os.path.join(folder, 'source.txt')

  # uniques = unique(source_path)
  counts = count(source_path)
  uniques = once(counts)

  export(sorted(uniques))


if __name__ == '__main__':
  main()
