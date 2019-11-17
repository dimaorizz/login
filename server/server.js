const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/user');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@blogsample-3ep2e.mongodb.net/Blog?retryWrites=true&w=majority',
                 {useNewUrlParser:true, useUnifiedTopology:true}
                 );

const clientPath = path.join(__dirname, '../client');

app.use(bodyParser.json());
app.use('/', express.static(clientPath));
app.use('/login', userRoute);

app.listen(3000, () => {
    console.log('Fine!'); 
});
