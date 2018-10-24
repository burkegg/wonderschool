/* api documentation:

1: POST a new item.  

Endpoint:  /hostname/newtodo/:userID
Request payload format: application/json, including the following:
{
  id: 1,
  group: "Purchases",
  task: "Go to the bank",
  dependencyIds: [],
  completedAt: null
}

Responses:
Success payload format: respond with a status 201.
Error: if the request payload is invalid, respond with a 400 status.
Error: if the database sends an error, respond with a 500 status.



2: GET all tasks by userID:

Endpoint:  /hostname/todos/tasks/:userID
Request payload format: text/plain

Responses:
Success Payload format:  application/json, as
[{
  id: 1,
  group: "Purchases",
  task: "Go to the bank",
  dependencyIds: [],
  completedAt: null
}]
Error: if the request payload is invalid, respond with a 400 status.
Error: if the database sends an error, respond with a 500 status.



3: GET userID (and other info) by userName

Endpoint:  /hostname/todos/userinfo/:userName

Success payload format: application/json
{
  id: 1,
  name: Andy Griffith
}
Error: if the request payload is invalid, respond with a 400 status.
Error: if the database sends an error, respond with a 500 status.



4: UPDATE, to edit an existing todo:

Endpoint:  /hostname/edittodo/:userID/:taskID
Request payload format: application/json, including the following:
{
  id: 1,
  group: "Purchases",
  task: "Go to the bank",
  dependencyIds: [],
  completedAt: null
}

First it calls the get method, to check whether the entry exists.
Then it deletes the old entry, using the delete method.
Finally it uses the post method to post the updated todo.

Success response payload format: respond with a status 200.
Error response: if the request payload is invalid, respond with a 400 status.
Error response: if the database sends an error, respond with a 500 status.


5: delete: should delete an entry, given the id. 

Endpoint:  /hostname/deletetodo/:userID/:taskID
Request payload format: text/plain
This uses the parameters userID and taskID to perform a delete query on the database.

Success: Returns a 200 status
