/*
Given a linked list, delete the middle node. If the list is even length, delete the node at the start of the second half of the list.

/*
    * You may assume the node class is:
    * class LLNode {
    *   constructor(value, next = null) {
    *     this.value = value;
    *     this.next = next;
    *   }
    * }
*/

function deleteMiddleNode(list) {
    // find middle node - determine length, index = length/2 - 1
    //
    let current = this.head;
    let length = 0;
    while (current.next) {
        current = current.next;
        length++;
    }
    // loop through, find previous node at 
    // name next node
    // remove link from the previous and move the pointer to next node

}
