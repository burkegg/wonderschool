To do list.  

# instructions to run:
1:  Clone down the repo.\
2:  cd into the repo's folder\
3:  Use npm install or yarn install to install dependencies.\
4:  Use npm run start or yarn start to run a development version of the todo list.\
5:  Your browser should automatically open to localhost:3000.\


## Database design:
[View the schema](./database/schema.sql)

I assumed that we would want the following use cases:

1:  Get all tasks (including dependent tasks) by user id.\
2:  Get all dependent tasks by task id.\
3:  Get all tasks by task-group name.\

The tasks table has indices added on userID and task group name (group), to speed up searches.

There is a join table called dependencies.  This will have tasks stored as taskID, and dependencies stored as dependencyID.  This is to allow faster queries for dependent tasks.  This would not be necessary in the initial project's scope, but it seems like a nice thing to have, and a likely topic of conversation in an interview.

## API design:
To read about the API, see the [API documentation file](./api/api.js)



