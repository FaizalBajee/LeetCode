// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// var mergeTwoLists = function (list1, list2) {
//   let newarray = [...list1, ...list2];
//   return newarray.sort((a, b) => a - b);
// };

// const arr1 = [];
// const arr2 = [];
// console.log(mergeTwoLists(arr1, arr2));

// Definition for singly-linked list



/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1); 
  let current = dummy;           

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      
      current.next = list1;      
      list1 = list1.next;        
    } else {
      current.next = list2;    
      list2 = list2.next;      
    }  
     current = current.next;
  }

  // One of the lists is not finished, attach it
  if (list1 !== null) current.next = list1;
  if (list2 !== null) current.next = list2;

  return dummy.next; // skip dummy node
};


