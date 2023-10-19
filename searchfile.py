import os

keyword = input("Enter keyword: ")

files = os.listdir()
for filename in files:
    if filename.endswith('.html'):
        with open(filename, 'r') as f:
            lines = f.readlines()
            for line in lines:
                line = line.lower()
                if keyword in line:
                    print(filename)