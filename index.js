const express = require('express');
const cors = require('cors');
const motifsRouter = require('./routes/motifs');
const beritaRoutes = require('./routes/berita');
const sejarahRoutes = require('./routes/sejarah'); 
const pelestarianRoutes = require('./routes/pelestarian');
const batikModernRoutes = require('./routes/batikModern');  
const batikTradisionalRoutes = require('./routes/batikTradisional');  
const wisataJabarRoutes = require('./routes/wisataJabar');
const wisataJatengRoutes = require('./routes/wisataJateng');
const wisataJatimRoutes = require('./routes/wisataJatim');
const kelasEdukasiRoutes = require('./routes/kelasEdukasi');
const kontenMembatikRoutes = require('./routes/kontenMembatik');
const gameBatikRoutes = require('./routes/gameBatik');

const app = express();
const port = 5000;

app.use(cors());
app.use('/images', express.static('public/images'));

app.use('/api/motifs', motifsRouter);
app.use('/', beritaRoutes);
app.use('/', sejarahRoutes);
app.use('/', pelestarianRoutes);
app.use('/', batikModernRoutes); 
app.use('/', batikTradisionalRoutes); 
app.use('/', wisataJabarRoutes); 
app.use('/', wisataJatengRoutes); 
app.use('/', wisataJatimRoutes); 
app.use('/', kelasEdukasiRoutes); 
app.use('/', kontenMembatikRoutes); 
app.use('/', gameBatikRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
