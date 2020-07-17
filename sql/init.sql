CREATE DATABASE share_your_tt CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER shareyourtt@localhost IDENTIFIED BY 'shareyourtt';
GRANT ALL PRIVILEGES ON share_your_tt.* TO shareyourtt@localhost;
