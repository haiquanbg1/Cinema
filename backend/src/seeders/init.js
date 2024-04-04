const conn = require('../config/database')

module.exports = async () => {
    await conn.query(
        'CREATE TABLE if not exists `categories` ( `category_id` smallint NOT NULL AUTO_INCREMENT, `name` varchar(25)  DEFAULT NULL, PRIMARY KEY (`category_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `cities` (`city_id` smallint NOT NULL AUTO_INCREMENT, `city` varchar(50) DEFAULT NULL, PRIMARY KEY (`city_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `classifies` (`classify_id` smallint NOT NULL AUTO_INCREMENT, `title` varchar(5) DEFAULT NULL, `description` text, PRIMARY KEY (`classify_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `languages` (`language_id` smallint NOT NULL AUTO_INCREMENT, `name` varchar(20) DEFAULT NULL, PRIMARY KEY (`language_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `ranks` (`rank_id` tinyint NOT NULL AUTO_INCREMENT, `title` varchar(20) DEFAULT NULL, `money` int DEFAULT NULL, PRIMARY KEY (`rank_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `cinemas` (`cinema_id` smallint NOT NULL AUTO_INCREMENT,`address` varchar(100) DEFAULT NULL,`city_id` smallint NOT NULL,`phone` char(11) DEFAULT NULL,`email` varchar(50) DEFAULT NULL,`details` text,`name` varchar(100) DEFAULT NULL,PRIMARY KEY (`cinema_id`),KEY `FK_cinema_city` (`city_id`),CONSTRAINT `FK_cinema_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `films` (`film_id` int NOT NULL AUTO_INCREMENT,`title` varchar(128) DEFAULT NULL,`description` text,`release_date` date DEFAULT NULL,`language_id` smallint NOT NULL,`director` varchar(100) DEFAULT NULL,`actor` varchar(100) DEFAULT NULL,`length` smallint DEFAULT NULL,`classify_id` smallint NOT NULL,`deleted` tinyint(1) DEFAULT 0,PRIMARY KEY (`film_id`),KEY `FK_film_language` (`language_id`),KEY `FK_film_classify` (`classify_id`),CONSTRAINT `FK_film_classify` FOREIGN KEY (`classify_id`) REFERENCES `classifies` (`classify_id`),CONSTRAINT `FK_film_language` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `rooms` (`room_id` smallint NOT NULL AUTO_INCREMENT,`name` varchar(10) DEFAULT NULL,`cinema_id` smallint NOT NULL,PRIMARY KEY (`room_id`),KEY `FK_room_cinema` (`cinema_id`),CONSTRAINT `FK_room_cinema` FOREIGN KEY (`cinema_id`) REFERENCES `cinemas` (`cinema_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `seats` (`seat_id` int NOT NULL AUTO_INCREMENT,`name` varchar(5) DEFAULT NULL,`type` varchar(20) DEFAULT NULL,`room_id` smallint NOT NULL,PRIMARY KEY (`seat_id`),KEY `FK_seat_room` (`room_id`),CONSTRAINT `FK_seat_room` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `showtimes` (`showtime_id` int NOT NULL AUTO_INCREMENT,`film_id` int NOT NULL,`cinema_id` smallint NOT NULL,`time` datetime DEFAULT NULL,`price` int DEFAULT NULL,PRIMARY KEY (`showtime_id`),KEY `FK_showtime_film` (`film_id`),KEY `FK_showtime_cinema` (`cinema_id`),CONSTRAINT `FK_showtime_cinema` FOREIGN KEY (`cinema_id`) REFERENCES `cinemas` (`cinema_id`),CONSTRAINT `FK_showtime_film` FOREIGN KEY (`film_id`) REFERENCES `films` (`film_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `users` (`user_id` int NOT NULL AUTO_INCREMENT,`firstname` varchar(50) DEFAULT NULL,`lastname` varchar(50) DEFAULT NULL,`gender` tinyint(1) DEFAULT NULL,`email` varchar(100) NOT NULL,`password` varchar(100) NOT NULL,`phone` char(10) DEFAULT NULL,`birthday` date DEFAULT NULL,`city_id` smallint NOT NULL,`created_at` timestamp NULL DEFAULT NULL,`updated_at` timestamp NULL DEFAULT NULL,`refresh_token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,`is_admin` tinyint(1) NOT NULL DEFAULT 0,`rank_id` tinyint DEFAULT 1,PRIMARY KEY (`user_id`),KEY `FK_user_city` (`city_id`),KEY `FK_user_rank` (`rank_id`),CONSTRAINT `FK_user_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`),CONSTRAINT `FK_user_rank` FOREIGN KEY (`rank_id`) REFERENCES `ranks` (`rank_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `bookings` (`booking_id` int NOT NULL AUTO_INCREMENT,`showtime_id` int NOT NULL,`user_id` int NOT NULL,`created_at` timestamp NULL DEFAULT NULL,`pay` int,PRIMARY KEY (`booking_id`),KEY `FK_booking_user` (`user_id`),KEY `FK_booking_showtime` (`showtime_id`),CONSTRAINT `FK_booking_showtime` FOREIGN KEY (`showtime_id`) REFERENCES `showtimes` (`showtime_id`),CONSTRAINT `FK_booking_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `film_category` (`film_id` int NOT NULL,`category_id` smallint NOT NULL,PRIMARY KEY (`film_id`,`category_id`),KEY `FK_category_film` (`category_id`),CONSTRAINT `FK_category_film` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),CONSTRAINT `FK_film_category` FOREIGN KEY (`film_id`) REFERENCES `films` (`film_id`))'
    )

    await conn.query(
        'CREATE TABLE if not exists `booking_seat` (`booking_id` int NOT NULL,`seat_id` int NOT NULL,PRIMARY KEY (`booking_id`,`seat_id`),KEY `FK_seat_booking` (`seat_id`),CONSTRAINT `FK_booking_seat` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`),CONSTRAINT `FK_seat_booking` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`seat_id`))'
    )
}