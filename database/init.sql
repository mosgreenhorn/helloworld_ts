CREATE DATABASE monitoring;

USE monitoring;

CREATE TABLE `data`
( 
    `Timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `P_PV` DOUBLE NOT NULL DEFAULT '0' , 
    `E_Day` DOUBLE NOT NULL DEFAULT '0' , 
    `E_Year` DOUBLE NULL , 
    `E_Total` DOUBLE NULL , 
PRIMARY KEY
(`Timestamp`)) ENGINE = InnoDB;


GRANT ALL PRIVILEGES ON monitoring.* TO 'user'@'localhost' IDENTIFIED BY 'P.assword123';
