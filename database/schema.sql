DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo;

USE todo;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE lists (
  id int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  FOREIGN KEY(userID) REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  todotext VARCHAR(200) NOT NULL,
  completedAt date DEFAULT NULL,
  userID int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(userID) REFERENCES users(id)
);

-- I am adding an index to speed up searches by userID
ALTER TABLE items ADD INDEX idx_userID (userID);


-- This table is added to allow a many to many 
-- relationship between a task and its dependencies.
CREATE TABLE dependencies (
  taskID INT,
  dependencyID INT,
  PRIMARY KEY (taskID)
);
