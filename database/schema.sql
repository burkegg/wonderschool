DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo;

USE todo;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE lists (
  id int NOT NULL AUTO_INCREMENT,
  userID int,
  FOREIGN KEY(userID) REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  todotext VARCHAR(200),
  completedAt date,
  userID int,
  PRIMARY KEY (id),
  FOREIGN KEY(userID) REFERENCES users(id)
);

ALTER TABLE items ADD INDEX idx_userID (userID);

CREATE TABLE dependencies (
  taskID INT,
  dependencyID INT,
  PRIMARY KEY (taskID)
);
