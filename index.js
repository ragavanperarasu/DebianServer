require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const rateLimit = require('express-rate-limit');

// Routes Import
const emailOTP = require('./routes/users/emailOTP')
const newUser = require('./routes/users/newUser')
const uservalidate = require('./routes/users/uservalidate')
const userdata = require('./routes/users/userdata')
const getsubreg22 = require('./routes/users/getsubreg22')
const semupl22 = require('./routes/reg2022/sem/semupl22')
const semview = require('./routes/reg2022/sem/semview')
const semlike = require('./routes/reg2022/sem/semlike')
const semcomment = require('./routes/reg2022/sem/semcomment')
const semdownc = require('./routes/reg2022/sem/semdownc')

const utoupl22 = require('./routes/reg2022/uto/utoupl22')

const uttupl22 = require('./routes/reg2022/utt/uttupl22')

const booksupl = require('./routes/reg2022/books/booksupl')

const getpost = require('./routes/reg2022/getpost')

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 150, 
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);
app.use(cors({ credentials: true}))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}))
app.use(express.json());

app.use(express.static('public'));
app.use('/uploads', express.static('uploads', {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline'); // Not 'attachment'
    }
  }
}));





app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.use('/',emailOTP)
app.use('/',newUser)
app.use('/',uservalidate)
app.use('/',userdata)
app.use('/',getsubreg22)
app.use('/',semupl22)
app.use('/',semview)
app.use('/',semlike)
app.use('/',semcomment)
app.use('/',semdownc)

app.use('/',utoupl22)

app.use('/',uttupl22)

app.use('/',booksupl)

app.use('/',getpost)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});




const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
