-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 06, 2023 at 05:37 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codeblocksProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `codeblocks`
--

CREATE TABLE `codeblocks` (
  `codeblockId` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `language` varchar(20) NOT NULL,
  `code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `codeblocks`
--

INSERT INTO `codeblocks` (`codeblockId`, `name`, `language`, `code`) VALUES
(1, 'Async Case', 'JavaScript', 'async function myFunction() {\r\n  return \"Hello\";\r\n}'),
(2, 'Error Handling', 'JavaScript', 'try {\r\n  //Block of code to try\r\n}\r\ncatch(err) {\r\n  //Block of code to handle errors\r\n}'),
(3, 'Data Fetching', 'JavaScript', 'async function getText(file) {\r\n  let myObject = await fetch(file);\r\n  let myText = await myObject.text();\r\n  myDisplay(myText);\r\n}'),
(4, 'Form Validation', 'JavaScript', 'function validateForm() {\r\n  let x = document.forms[\"myForm\"][\"fname\"].value;\r\n  if (x == \"\") {\r\n    alert(\"Name must be filled out\");\r\n    return false;\r\n  }\r\n}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `codeblocks`
--
ALTER TABLE `codeblocks`
  ADD PRIMARY KEY (`codeblockId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `codeblocks`
--
ALTER TABLE `codeblocks`
  MODIFY `codeblockId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
