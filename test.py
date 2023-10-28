digits = []

if not any(digits[i] == digits[i+1] and 
           (i == 0 or digits[i-1] != digits[i]) and 
           (i == len(digits)-2 or digits[i+2] != digits[i+1]) 
           for i in range(len(digits)-1)):
    print('something')
else:
    print("none")