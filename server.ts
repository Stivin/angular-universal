import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';

enableProdMode();

const PORT: number | string = process.env.PORT || 4000;
const DIST_FOLDER: string = join(process.cwd(), 'dist');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');
const app = express();
app.use(compression());
app.use(cookieParser());

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('*', (req, res) => {
  res.render('index', {
    req: req,
    res: res,
    providers: [
      { provide: REQUEST, useValue: (req) },
      { provide: RESPONSE, useValue: (res) },
    ]
  });
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
