SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `share_your_tt` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `share_your_tt` ;

CREATE TABLE IF NOT EXISTS `share_your_tt`.`category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `share_your_tt`.`continent` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `continent_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `share_your_tt`.`trip` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `destination` VARCHAR(255) NULL DEFAULT NULL,
  `picture` VARCHAR(255) NULL DEFAULT NULL,
  `tips` VARCHAR(1000) NULL DEFAULT NULL,
  `continent_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `continent_id`),
  INDEX `fk_trip_continent1_idx` (`continent_id` ASC),
  CONSTRAINT `fk_trip_continent1`
    FOREIGN KEY (`continent_id`)
    REFERENCES `share_your_tt`.`continent` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `share_your_tt`.`trip_has_category` (
  `category_id` INT(11) NOT NULL,
  `trip_id` INT(11) NOT NULL,
  PRIMARY KEY (`category_id`, `trip_id`),
  INDEX `fk_category_has_trip_trip1_idx` (`trip_id` ASC),
  INDEX `fk_category_has_trip_category_idx` (`category_id` ASC),
  CONSTRAINT `fk_category_has_trip_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `share_your_tt`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_has_trip_trip1`
    FOREIGN KEY (`trip_id`)
    REFERENCES `share_your_tt`.`trip` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
