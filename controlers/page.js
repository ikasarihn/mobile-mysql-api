const connection = require('../db');
const ListBerita = (req, res) => {
    connection.query('SELECT * FROM berita', (error, results) => {
        if (error) throw error;
        res.set('Access-Control-Allow-Origin', '*');
        res.send(results);
    });
 }
 const InsertBerita = (req, res) => {
    const gambar = req.body.gambar;
    const judul = req.body.judul;
    const isi = req.body.isi;
    const kategori = req.body.kategori;
    const penulis = req.body.penulis;
    const tanggal = new Date().toLocaleDateString();
    // console.log('Nilai gambar:', gambar);  {Pengecekan jika diperlukan}
    connection.query('INSERT INTO berita (gambar, judul, isi, kategori, penulis, tanggal) VALUES (?,?,?, ?, ?, ?)', [gambar, judul, isi, kategori, penulis, tanggal], (error, results) => {
        if (error) throw error;
        res.set('Access-Control-Allow-Origin', '*');
        res.send(`Data ${judul} Berhasil Disimpan Ke Database`);
    });
 }
 const BeritaId = (req, res) => {
    const {id} = req.params;
    connection.query('SELECT * FROM berita where id=?', [id], (error, results) => {
        if (error) throw error;
        res.set('Access-Control-Allow-Origin', '*');
        res.send(results);
    });
 }
 const UpdateBerita = (req, res) => {
        const id = req.params.id;
        const { judul, isi} = req.body;
        const tanggal = new Date().toLocaleDateString();
        console.log(id, judul, tanggal);
        connection.query('UPDATE berita SET judul=?, isi=?, tanggal=? WHERE id=?', [judul, isi, kategori, penulis, tanggal, id], (error, results) => {
            if (error) throw error;
            res.send(`Data ${judul} Berhasil Dirubah Ke Database`);
        });
 }
 const DeleteBerita = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM berita WHERE id=?', [id], (error, results) => {
        if (error) throw error;
        res.send(`Data Berhasil Di Hapus dari Database`);
    });
 }
 
module.exports = {ListBerita, InsertBerita, BeritaId, UpdateBerita, DeleteBerita}
