const port = 1337;
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views','views');
app.set('view engine','html');

const session = require('express-session');
const fileStore = require('session-file-store')(session);

const gameRouter = require('./routes/game');

const congratsRouter = require('./routes/congrats');

app.use(express.urlencoded({ extended: true }));

app.use(session({
    store: new fileStore(),
    secret: "392482iwefsgniu4ewbfucdhsfe893647rf"
}))



app.use('/congrats', congratsRouter);

app.use('/guess', gameRouter);




app.listen(port, ()=>{
    console.log(`port:${port} `)
});
