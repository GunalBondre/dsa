def maxProfit(prices):
    minimum = prices[0]
    maxProfit = float("-inf")

    for price in range(1,len(prices)):
        minimum = min(minimum,prices[price])
        maxProfit = max(maxProfit,(prices[price]-minimum))
    return maxProfit if maxProfit > 0 else 0
        
        
        
print(maxProfit([7,6,4,3,1]))