// Remove Duplicated from sorted list.js leetcode 83

function deleteDuplicates(head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.data === curr.next.data) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}