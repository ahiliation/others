/* This  file is copied from Linux kernel source 3.17  /lib/llist.c    */

#include <linux/kernel.h>
#include <linux/export.h>
#include <linux/interrupt.h>
#include <linux/llist.h>

bool llist_add_batch(struct llist_node *new_first, struct llist_node *new_last, struct llist_head *head)
{

  struct llist_node *first;
  do {
    new_last->next = first = ACCESS_ONCE(head->first);
  } while (cmpxchg(
