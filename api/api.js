/* api methods:

1: Post a new item.  It should include all data in:
{
    id: 1,
    group: "Purchases",
    task: "Go to the bank",
    dependencyIds: [],
    completedAt: null,
  }.

  Sends a 201 status if successful.
  Error: sends the error passed back from database

2: Update: should also include all data in:

{
    id: 1,
    group: "Purchases",
    task: "Go to the bank",
    dependencyIds: [],
    completedAt: null,
  },
  Returns a 200 status if successful.
  Error: sends the status passed back from database

3: delete: should delete an entry, given the id.  
Success: Returns a 200 status


4: Re-usable methods:  
query database for task by taskID
query database for all tasks by userID
query database for all dependent tasks by taskID

*/