const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send('Portal Home');
});
app.use('/api', require('./route/portal.route'))

app.listen(5000, function(){
    console.log("Server Listening at 5000");
});

