def productExceptSelf(arr):

    prefix= [1] * len(arr)

    for i in range(1,len(arr)):
        prefix[i] = prefix[i-1] * arr[i-1]
    
    suffix = [1] * len(arr)
    for i in range(len(arr)-2,-1,-1):
        suffix[i] = suffix[i+1] * arr[i+1]

    ans = []
    for i in range(0,len(arr)):
        ans.append(prefix[i] * suffix[i])
    return ans


print(productExceptSelf([1,2,3,4]))

# [1,1,1,1] -> 1 * 1 = 1
# [1,1,1,1] -> 