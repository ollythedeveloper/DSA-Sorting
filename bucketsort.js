const array = [25, 4, 1, 12, 3]
function bucketSort(arr, min, max) {
    //turn the array into a hashmap
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (map.get(arr[i]) === undefined) {
        map.set(arr[i], 1);
      } else {
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }
    console.log(arr)
    //create variable for index 0
    let arrI = 0;
    for (let i = min; i <= max; i++) {
      //plus one to min, this is not ideal
      //if the key doesn't exist, move on 
      let numAppearing = map.get(i);
      console.log('numAppearing before: ' + numAppearing)
      //if the key exists
      while (numAppearing) {
        arr[arrI] = i;
        //go back to previous key 
        numAppearing--;
        //move to next index of array
        arrI++;
      }
    }
    return arr;
  }
  
console.log(bucketSort(array, 1, 25))