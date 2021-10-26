-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: company
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

use heroku_5148a07b6c82db3;

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `employeeNumber` int NOT NULL AUTO_INCREMENT,
  `lastName` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `extension` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `officeCode` varchar(10) NOT NULL,
  `jobTitle` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`employeeNumber`),
  UNIQUE KEY `IDX_817d1d427138772d47eca04885` (`email`),
  KEY `FK_cce34df756b84d5e7d57ca671bd` (`officeCode`),
  CONSTRAINT `FK_cce34df756b84d5e7d57ca671bd` FOREIGN KEY (`officeCode`) REFERENCES `office` (`officeCode`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Murphy','Diane','x5800','dmurphy@classicmodelcars.com','1','President',''),(2,'Patterson','Mary','x4611','mpatterso@classicmodelcars.com','1','VP Sales',''),(3,'Firrelli','Jeff','x9273','jfirrelli@classicmodelcars.com','1','VP Marketing',''),(4,'Patterson','William','x4871','wpatterson@classicmodelcars.com','6','Sales Manager (APAC)',''),(6,'Bow','Anthony','x5428','abow@classicmodelcars.com','1','Sales Manager (NA)',''),(7,'Jennings','Leslie','x3291','ljennings@classicmodelcars.com','1','Sales Rep',''),(8,'Thompson','Leslie','x4065','lthompson@classicmodelcars.com','1','Sales Rep',''),(9,'Firrelli','Julie','x2173','jufirrelli@classicmodelcars.com','2','Sales Rep',''),(10,'Vanauf','George','x4102','gvanauf@classicmodelcars.com','3','Sales Rep',''),(11,'Nishi','Mami','x101','mnishi@classicmodelcars.com','6','Sales Rep',''),(12,'Firrello','Nathalie','x2573','nfirrello@classicmodelcars.com','5','Sales Rep',''),(14,'Manolo','Enrico','x2513','eManolo@classicmodelcars.com','5','Sales Rep','$2b$10$9bi7Ie16WCnTw6qt1Q85Ne0Wt85kClZZRlqdsyBgleP2NEZuArfCC');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-26 18:24:00
