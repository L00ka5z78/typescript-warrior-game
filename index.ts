import * as express from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";
import {homeRouter} from "./routers/home";
import {warriorRoute} from "./routers/warrior";
import {arenaRoute} from "./routers/arena";
import {hallOfFameRoute} from "./routers/hall-of-fame";
import {WarriorRecord} from "./records/warrior.record";
import './utils/db';
import {handleError} from "./utils/error";


const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    //helpers??
}));
app.set('view engine', '.hbs');


app.use('/', homeRouter);
app.use('/warrior', warriorRoute);
app.use('/arena', arenaRoute);
app.use('/hall-of-fame', hallOfFameRoute);

app.use(handleError);



app.listen(3000, 'localhost', () => {
    console.log('Server is On and running on http://localhost:3000');
});

