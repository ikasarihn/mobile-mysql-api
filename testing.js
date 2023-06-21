const Info = (req, res) => {
    const idPenulis1 = req.query.id_penulis_1; // Anggapkan nilai id_penulis_1 diberikan melalui parameter permintaan
    const idPenulis2 = req.query.id_penulis_2; // Anggapkan nilai id_penulis_2 diberikan melalui parameter permintaan
  
    // Menggunakan parameter placeholder (?) untuk mencegah SQL Injection
    const query = 'SELECT tbl_berita.*, tbl_kategori.nama_kategori, tbl_penulis.nama_penulis FROM tbl_berita JOIN tbl_kategori ON tbl_berita.id_kategori = tbl_kategori.id_kategori JOIN tbl_penulis ON tbl_berita.id_penulis = tbl_penulis.id_penulis WHERE tbl_penulis.id_penulis = ? OR tbl_penulis.id_penulis = ?';
  
    connection.query(query, [idPenulis1, idPenulis2], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
}