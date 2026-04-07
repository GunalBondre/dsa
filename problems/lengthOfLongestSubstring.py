def lengthOfLongestSubstring(s):
    obj = {}
    maxLen = float("-inf")
    left = 0

    for right in range(0,len(s)):
        if s[right] in obj:
            left = max(left,obj[s[right]]+1)
        obj[s[right]] = right
        maxLen = max(maxLen,right-left+1)
    return maxLen

print(lengthOfLongestSubstring("pwwkew"))