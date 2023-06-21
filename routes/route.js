const express = require("express");
const { ListBerita, InsertBerita, BeritaId, UpdateBerita, DeleteBerita} = require("../controlers/page");
// Inisialisasi Express Router
const router = express.Router();
//Midleware untuk membaca body dari request
router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.get("/ListBerita", ListBerita);
router.post("/AddBerita", InsertBerita);
router.get("/ListBerita/:id", BeritaId);
router.put("/UpdateBerita/:id", UpdateBerita);
router.delete("/DeleteBerita/:id", DeleteBerita);

module.exports = router;