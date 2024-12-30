def solve(s):
    result = []
    
    for i in range(len(s)):
        char = s[i]
        
        if i % 2 == 1:
            if char == 'y':
                result.append('B')
            elif char == 'z':
                result.append('C')
            else:
                new_char = chr(((ord(char.lower()) - ord('a') + 3) % 26) + ord('a')).upper()
                result.append(new_char)
        else:
            result.append(char)

    return ''.join(result)

s = input()
outcome = solve(s)
print(outcome) 