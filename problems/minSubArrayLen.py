def minSubArrayLen(target,nums):
    left = 0
    minLen = float('inf')
    sum = 0
    for right in range(0,len(nums)):
        sum = sum + nums[right]

        while(sum >= target):
            minLen = min(minLen,right-left+1)
            sum = sum - nums[left]
            left = left + 1

    return minLen

print(minSubArrayLen(11,[1,1,1,1,1,1,1,1]))