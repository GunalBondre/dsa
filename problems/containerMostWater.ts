/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height: number[]) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left <= right) {
    let minHeight = Math.min(height[left]!, height[right]!);
    maxWater = Math.max(maxWater, minHeight! * (right - left));

    if (height[left]! < height[right]!) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
