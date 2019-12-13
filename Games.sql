/*Table for Playstation Games */
CREATE TABLE "Playstation_1" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);

CREATE TABLE "Playstation_2" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);

CREATE TABLE "Playstation_3" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);

CREATE TABLE "Playstation_4" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);

/*Table for Xbox Games */
CREATE TABLE "XBOX" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);

CREATE TABLE "XBOX360" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);

CREATE TABLE "XBOX_One" (
	"ID"	INTEGER,
	"Title"	TEXT,
	"Release_Date"	INTEGER,
	"Release_Month"	TEXT,
	"Publisher"	TEXT,
	"Developer"	TEXT,
	PRIMARY KEY("ID")
);


/*One Table is used for Playstation 
  and the other is for XBOX
*/
INSERT INTO PS1(ID, Title, Release_Date)
VALUES (2, 'Metal Gear Solid', 1997);
VALUES (1, 'Final Fantasy VII', 1996);

SELECT ID, Title, Release_Date FROM PS1;



INSERT INTO XBOX(ID, Title, Release_Date)
VALUES (2, 'Blinx', 2002);
VALUES (1, 'Halo', 2001);

SELECT ID, Title, Release_Date FROM XBOX