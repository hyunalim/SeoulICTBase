list1 = [1,2,3,4,1,2,3,5,6,7,2,3,4]
list2 = []

for element in list1:
    if element not in list2:
        list2.append(element)
print(list2)
        