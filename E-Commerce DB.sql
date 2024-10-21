CREATE DATABASE E_Commerce;
USE E_Commerce;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    mobileNumber BIGINT, 
    email VARCHAR(255),
    password VARCHAR(255),
    confirmPassword VARCHAR(255)
);

