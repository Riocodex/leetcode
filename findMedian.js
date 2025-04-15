/**
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
