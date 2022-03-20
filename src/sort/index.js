// ---------------- 封装排序算法测试 ---------------- //
console.log('// ----- 封装排序算法测试 START -----//');
/**
 * @param {array} left
 * @param {array} right
 * @return {array} arr
 */
 var merge = function(left,right){
  let temp=[];
  while(left.length&&right.length){
      if(left[0]<right[0]){
          temp.push(left.shift());
      }else{
          temp.push(right.shift());
      }
  }
  //left和right长度不一样时，直接连接剩下的长的部分（本身有序）
  return temp.concat(left,right);

}
/**
 * @param {array} arr
 * @return {array} res
 */
var mergeSort = function(arr) {
  if(arr.length<=1){
    return arr;
  }
  let mid=Math.floor(arr.length/2);
  let left=arr.slice(0,mid);
  let right=arr.slice(mid);
  return  merge(mergeSort(left),mergeSort(right));
}
let data=[8,4,5,7,1,3,6,2];
let sortedData=mergeSort(data);
console.log(sortedData);

console.log('// ----- 封装排序算法测试 END -----//');
