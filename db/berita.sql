-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2023 at 08:46 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sim`
--

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id` int(11) NOT NULL,
  `gambar` text NOT NULL,
  `judul` text NOT NULL,
  `isi` text NOT NULL,
  `kategori` text NOT NULL,
  `penulis` text NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id`, `gambar`, `judul`, `isi`, `kategori`, `penulis`, `tanggal`) VALUES
(1, '1.jpg', 'Twitter Uji Batasi Pengguna Non Pelanggan Kirim DM', 'Jakarta - Twitter telah membatasi banyak fitur untuk pengguna yang tak berlangganan dengan Twitter Blue. Yang terbaru pengguna gratisan ini nantinya akan dibatasi untuk mengirim pesan langsung atau DM.Melansir dari Gizmochina, platform microblogging saat ini Twitter sedang menguji untuk membatasi jumlah pesan langsung atau DM yang dapat dikirim pengguna, Twitter akan membatasi jumlah DM jadi 30 untuk pengguna gratis, yang saat ini masih 500 DM per hari.Dengan langkah tersebut, tampaknya Twitter ingin mendorong penggunanya untuk menjadi pelanggan berbayar di Twitter Blue, sebuah layanan berlangganan premium yang menawarkan lebih banyak fitur.', 'inet', 'Ufiq', '2023-06-06'),
(3, '2.jpg', 'Dies Natalis STIKOM', 'Dies Natalis stikom banyuwangi tahun ini sudah yang ke 30 yang akan dilaksanakan pada tanggal 18-20 juni 2023', 'kampus', 'ufiq', '0000-00-00'),
(4, '2.jpg', 'Dies Natalis STIKOM', 'Dies Natalis stikom banyuwangi tahun ini sudah yang ke 30 yang akan dilaksanakan pada tanggal 18-20 juni 2023', 'kampus', 'ufiq', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
