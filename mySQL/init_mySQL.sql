# Initialize a mysql db with a 'mtgsearch' db and be able test productpage with it.
# mysql -h 127.0.0.1 -ppassword < init_mySQL.sql

CREATE DATABASE mtgsearch;
USE mtgsearch;

CREATE TABLE `opinions` (
  `OpinionID` INT NOT NULL,
  `CardID` VARCHAR,
  `Opinion` VARCHAR,
  PRIMARY KEY (`OpinionID`)
);
INSERT INTO opinions VALUES (1, "fcb329b5-43b5-57d6-b7e5-5bb216cf05ff", "good card, I recommend");
INSERT INTO opinions VALUES (2, "fcb329b5-43b5-57d6-b7e5-5bb216cf05ff", "the best card from this set, beautiful graphics");
INSERT INTO opinions VALUES (3, "fcb329b5-43b5-57d6-b7e5-5bb216cf05ff", "weak card, how can you play with it");
