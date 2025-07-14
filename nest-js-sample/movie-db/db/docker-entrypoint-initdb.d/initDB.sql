CREATE DATEBASE 'Movie';

USE 'Movie';


CREATE TABLE 'Movie' (
	'id' int(11) NOT NULL AUTO_INCREMENT,
	'title' varchar(255) DEFAULT NULL,
	'year' int(11) DEFAULT NULL,
	PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- docker run --name=mysql -p3306:3306 -e MYSQL_ROOT_PASSWORD=topSecret -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=Movie -v initDB.sql mysql/mysql-server:8.0