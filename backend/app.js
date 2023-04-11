const express = require('express');
const mongoose = require('mongoose');
const user = require("./routes/user-routes");
const deppp = require("./routes/department-routes");
const app_and = require("./routes/app-routes");
const hospitality = require("./routes/hospitality-routes")
const kiss = require("./routes/kiss-routes")
const kiit = require("./routes/kiit-routes")
const kims = require("./routes/kims-routes");
const tasks = require("./routes/tasks-routes");
const auth = require("./routes/auth-routes");
const img = require("./routes/upload-routes");
const getimg = require("./routes/images-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const fs = require('fs');
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');

const  { mongoid }  = process.env;
console.log("monjnfcc...........:"+mongoid);
directConnection=true
useNewUrlParser= true,
useUnifiedTopology=true

app.use(cors({ credentials: true, origin: "http://localhost:3000/"}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/user', user);
app.use('/api/department', deppp);
app.use('/api/app', app_and);
app.use('/api/hospitality', hospitality);
app.use('/api/kiss', kiss);
app.use('/api/kims', kims);
app.use('/api/kiit', kiit);
app.use('/api/tasks', tasks);
app.use('/api/auth', auth);
app.use('/api/upload', img);
app.use('/api/images', getimg);

// app.use('/images', express.static('images'));

// app.get('/images', (req, res) => {
//     if (req.query.filename && req.query.username) {
//         const path1 = './assets/' + req.query.username + '/' + req.query.filename + '.png'
//         try {
//             fs.accessSync(path1);
//             res.sendFile(req.query.filename+".png", { root: path.join("./assets/"+req.query.username) });
//           } catch (err) {
//             res.sendFile("default.png", { root: path.join("./assets/") });
//           }
        
//     }
//     else {
//         res.sendFile("meme.webp", { root: path.join("./assets/")});
//     }
// })

mongoose.set('strictQuery', true);
console.log("App is Starting!");
mongoose.connect(mongoid+"?retryWrites=true&w=majority").then(() => {
    const port = process.env.port || 5000;
    app.listen(port);
    console.log("Database is connected Listening to localhost ->", port);
    })
        .catch((err) => console.log(err))
    

