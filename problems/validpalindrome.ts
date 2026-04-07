/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s: string) {
  const isAlpha = (char: string) => {
    return (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
      (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
    );
  };

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlpha(s[left]!)) left += 1;
    while (left < right && !isAlpha(s[right]!)) right -= 1;

    if (s[left]?.toLowerCase() !== s[right]?.toLowerCase()) return false;
    left += 1;
    right -= 1;
  }
  return true;
};

console.log(isPalindrome("0P"));
