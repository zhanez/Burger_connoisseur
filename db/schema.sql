DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id AUTO_INCREMENT INT PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN,

)