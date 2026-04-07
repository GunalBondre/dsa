def checkInclusion(s1,s2):
    map = {}
    currentWindowMap = {}
    
    windowSize = 0

    if len(s2) < len(s1):
         return False

    for i in range(0,len(s1)):
        map[s1[i]] = map.get(s1[i],0) + 1
        currentWindowMap[s2[i]] = currentWindowMap.get(s2[i],0) + 1
        windowSize = windowSize + 1
    
    if map == currentWindowMap:
            return True
    print(windowSize,currentWindowMap,map)

    for i in range(windowSize,len(s2)):
        currentWindowMap[s2[i]] = currentWindowMap.get(s2[i],0) + 1
      
        currentWindowMap[s2[i - windowSize]] = currentWindowMap.get(s2[i - windowSize],0) - 1
        if(currentWindowMap[s2[i - windowSize]]<=0):
            del currentWindowMap[s2[i - windowSize]]
        print(currentWindowMap,map)

        if map == currentWindowMap:
            return True
       

    return False
        
print(checkInclusion('a','ab'))