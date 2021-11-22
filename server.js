'use strict';

import express from 'express';
import cors from 'cors';
import modules from './routes/modules.js';

const app = express();
const app_port = process.env.APP_PORT || 3500;

app.use(cors())
app.use('/modules', modules);
app.use('/cdn', express.static('cdn'));

app.listen(app_port, () => console.log(`listening at ${app_port}`));

