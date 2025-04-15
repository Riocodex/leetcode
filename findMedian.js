/**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 


 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    numbers = []
    for(i=0;i<nums1.length;i++){
        numbers.push(nums1[i])
    }
    for(i=0;i<nums2.length;i++){
        numbers.push(nums2[i])
    }

    numbers.sort((a, b) => a - b);
    
    if (numbers.length%2==0){
       firstNum = numbers.length / 2
       secondNum = firstNum -1
       midNum = (numbers[firstNum] + numbers[secondNum])/2
       return midNum
    }else{
         midNum = Math.floor(numbers.length / 2)//doesnt leave a remainder
         return numbers[midNum]
    }
};
