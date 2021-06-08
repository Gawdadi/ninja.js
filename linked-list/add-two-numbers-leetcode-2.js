/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    if(l1.val == null && l2.val == null){
        return new ListNode(l1.val,null);
    }
    
    let curr = new ListNode(0,null), carry = 0,head = null;
    while(curr) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const currSum = l1Val + l2Val + curr.val;
    curr.val = currSum % 10;
    if(!head){
        head = curr;
    }
    l1 = (l1 != null) ?  l1.next : l1;
    l2 = (l2 != null) ? l2.next : l2;
    carry = currSum > 9 ? 1 : 0;
        
    if(l1 !== null || l2 !== null || carry) {
        const new_node = new ListNode(carry,null);
        new_node.val = carry;
        curr.next = new_node;
        curr = new_node;
        } else {
            curr = null;
        }
    }
    return head;
        
};