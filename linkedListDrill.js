const LinkedList = require('./linkedList')

function main() {
    const LL = new LinkedList()
    LL.insertFirst(10)
    LL.insertLast(17)
    LL.insertLast(13)
    LL.insertLast(2)
    LL.insertLast(11)
    LL.insertLast(20)
    LL.insertLast(9)
    LL.insertLast(5)
    LL.insertLast(3)
    return LL
}

const LL = main();

function display(list) {
    let output = ''
    let currNode = list.head
    while (currNode !== null) {
      output += currNode.value
      if (currNode.next !== null) {
        output += ' -> '
      }
      currNode = currNode.next
    }
    return output
  }
  
  console.log('display: ' + display(LL))

  //merge sort implementation:
function mSortList(list) {
  let currNode = list.head;
  if (currNode.next === null) {
    return list;
  }
  let length = 1;
  while (currNode.next !== null) {
    length++;
    currNode = currNode.next;
  }
  const middleI = Math.floor(length / 2);
  let leftList = splitList(list, 0, middleI);
  let rightList = splitList(list, middleI, length);
  leftList = mSortList(leftList);
  rightList = mSortList(rightList);
  return mergeLists(leftList, rightList);
}

function splitList(list, startI, endI) {
  let currNode = list.head;
  if (currNode === null) return;
  const returnList = new LinkedList();
  let i = 0;
  while (currNode !== null) {
    if (i >= startI && i < endI) {
      returnList.insertLast(currNode.value);
    }
    i++;
    currNode = currNode.next;
  }
  return returnList;
}

function mergeLists(leftList, rightList) {
  const mergedList = new LinkedList();
  let currLeft = leftList.head;
  let currRight = rightList.head;
  while (currLeft && currRight) {
    if (currLeft.value <= currRight.value) {
      mergedList.insertLast(currLeft.value);
      currLeft = currLeft.next;
    } else {
      mergedList.insertLast(currRight.value);
      currRight = currRight.next;
    }
  }
  while (currLeft) {
    mergedList.insertLast(currLeft.value);
    currLeft = currLeft.next;
  }
  while (currRight) {
    mergedList.insertLast(currRight.value);
    currRight = currRight.next;
  }
  return mergedList;
}

const sortedList= mSortList(LL)
console.log(display(sortedList))