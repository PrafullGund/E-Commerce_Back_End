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

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255),
    productDescription VARCHAR(255),
    productPrice DECIMAL(10,2),
    productImage VARCHAR(255)
);

CREATE TABLE Orders(
	id INT AUTO_INCREMENT PRIMARY KEY,
    productId INT,
    customerName VARCHAR(255),
	mobileNumber BIGINT, 
    orderDate DATE NOT NULL,
    orderAddress TEXT,
    deliveryAddress TEXT,
    FOREIGN KEY (productId) REFERENCES Products(id)
);

CREATE TABLE Category(
	id INT AUTO_INCREMENT PRIMARY KEY,
    categoryName VARCHAR(255),
    description VARCHAR(255)
);
