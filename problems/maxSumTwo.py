def maxSumTwo(arr,k):
    sum = 0
    left = 0
    maxSum = float('-inf')
    for i in range(0,k):
        sum = sum + arr[i]
    maxSum = sum
    for i in range(k,len(arr)):
        sum = sum + arr[i]
        sum = sum - arr[left]
        maxSum = max(maxSum,sum)
        left = left + 1

    return maxSum


    


print(maxSumTwo([2, 1, 5, 1, 3, 2],2))