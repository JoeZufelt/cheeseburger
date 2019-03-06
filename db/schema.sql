CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id integer NOT NULL AUTO_INCREMENT,
    burger_name varchar(50),
    devoured boolean NOT NULL,
    PRIMARY KEY (id)
);