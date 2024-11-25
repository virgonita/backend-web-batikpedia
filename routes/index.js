const express = require ('express')
const motifsRouter = require ("./motifs")
const beritaRoutes = require ("./berita")
const sejarahRoutes = require ("./sejarah")
const pelestarianRoutes = require ("./pelestarian")
const batikModernRoutes = require ("./batikModern")
const batikTradisionalRoutes = require ("./batikTradisional")
const wisataJabarRoutes = require ("./wisataJabar")
const wisataJatengRoutes = require ("./wisataJateng")
const wisataJatimRoutes = require ("./wisataJatim")
const kelasEdukasiRoutes = require ("./kelasEdukasi")
const kontenMembatikRoutes = require ("./kontenMembatik")
const gameBatikRoutes = require ("./gameBatik")

const router = express()
const baseURL = "/api/v1"

router.use('/api/v1/images', express.static('public/images'));

router.use(baseURL, motifsRouter);
router.use(baseURL, beritaRoutes);
router.use(baseURL, sejarahRoutes);
router.use(baseURL, pelestarianRoutes);
router.use(baseURL, batikModernRoutes);
router.use(baseURL, batikTradisionalRoutes);
router.use(baseURL, wisataJabarRoutes);
router.use(baseURL, wisataJatengRoutes);
router.use(baseURL, wisataJatimRoutes);
router.use(baseURL, kelasEdukasiRoutes);
router.use(baseURL, kontenMembatikRoutes);
router.use(baseURL, gameBatikRoutes);


module.exports = router