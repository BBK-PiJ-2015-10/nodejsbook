CREATE DATABASE `moviedb`;

USE `moviedb`;

CREATE TABLE movie
(
    id    int(11) NOT NULL AUTO_INCREMENT,
    title varchar(255) DEFAULT NULL,
    year  int(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO movie (title, year)
VALUES ('Iron Man', 2008);
INSERT INTO movie (title, year)
VALUES ('Thor', 2011);
INSERT INTO movie (title, year)
VALUES ('Capt America', 2028);
