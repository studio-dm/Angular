CREATE DATABASE buyflow_products;


USE buyflow_products;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `buflow_products`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `features` varchar(500) NOT NULL,
  `promos` varchar(500) NOT NULL,
  `logo` varchar(200) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=951 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `price`, `features`, `promos`, `logo`, `status`) VALUES
(1, 5050, 'Starter TV with HBO & Extreme Internet (30Mbps)   ', '79.99', '20+ Channels incl. HD','$50 Visa® Rewards Card','widgetassets/img/logo-centurylink.png', 'Active'),
(2, 5051, 'Preferred TV, Turbo Internet (20 Mbps) & Home Phone National   ', '119.99', '200+ Channels incl. HD DVR Service','Free HBO®, Cinemax®, Showtime®','widgetassets/img/logo-centurylink.png', 'Active'),
(3, 5052, 'Starter TV with HBO & Extreme Internet (30Mbps)   ', '79.99', '200+ Channels including HD','$100 Visa® Rewards Card','widgetassets/img/logo-centurylink.png', 'Active'),
(4, 5053, 'Home Security Smart Protect & Control   ', '99.99', '24x7x365 monitoring','Free Equipment','widgetassets/img/logo-vivint.png', 'Active');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
