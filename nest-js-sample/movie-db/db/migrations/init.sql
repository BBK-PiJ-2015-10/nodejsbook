CREATE DATABASE `moviedb`;

USE `moviedb`;

CREATE TABLE movie (
	id int(11) NOT NULL AUTO_INCREMENT,
	title varchar(255) DEFAULT NULL,
	year int(11) DEFAULT NULL,
	PRIMARY KEY (id)
); 

INSERT INTO movie (title,year) VALUES ('Iron Man',2008);
INSERT INTO movie (title,year) VALUES ('Thor',2011);
INSERT INTO movie (title,year) VALUES ('Capt America',2028);

CREATE TABLE user (
	id int(11) NOT NULL AUTO_INCREMENT,
	username varchar(255) DEFAULT NULL,
	password varchar(255) DEFAULT NULL,
	PRIMARY KEY (id)
);

INSERT INTO user (username,password) VALUES ('springer','test');



-- CREATE TABLE `movie` (
	-- `id` int(11) NOT NULL AUTO_INCREMENT,
	-- `title` varchar(255) DEFAULT NULL,
	-- `year` int(11) DEFAULT NULL,
	-- PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- INSERT INTO `movie` (`title`,`year`) VALUES (`Iron Man`,2008);


-- docker run --name nestdb -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=nestdb -e MYSQL_ROOT_HOST=% -v $(pwd)/movie-db/db/migrations/:/docker-entrypoint-initdb.d -p 3306:3306 -d mysql:latest
-- docker run --name nestdb -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=nestdb -e MYSQL_ROOT_HOST=% -v $(pwd)/db/migrations/:/docker-entrypoint-initdb.d -p 3306:3306 -d mysql:latest


-- to delete
-- docker rm -f $(docker ps -aq)

-- to get inside
-- docker exec -it nestdb bash
