CREATE TABLE travel (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    destination VARCHAR(255),
    picture VARCHAR(255),
    tips VARCHAR(1000)
    continent_id,
    category_id
);

CREATE TABLE continent (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    continent_name VARCHAR(255)
);

CREATE TABLE category (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255)
);