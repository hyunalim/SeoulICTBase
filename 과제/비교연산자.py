#숫자끼리 비교하는 비교연산자 코드
for i in range (200):
    if 0 <= i <=200:
     print(i)

#문자끼리 비교하는 비교연산자 코드
for i in range(200):
    if '0' <= str(i) <= '200':            
     print(i)

print('300'>'600') #False
print('aaa'>'Z') #True
print('abc'>'banna') #False
