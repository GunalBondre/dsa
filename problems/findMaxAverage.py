def findMaxAverage(nums,k):
    sum = 0
    for i in range(0,k):
        sum = sum + nums[i]

    for i in range(k,len(nums)):
        sum = sum + nums[i]
        sum = sum - nums[k-i]
    return sum/k


print(findMaxAverage([1,12,-5,-6,50,3],4) )

