import { join } from 'path';
import { readFileSync } from 'fs';

import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

// NOTE: leave this as require() since this file is built Dynamically from webpack
const { AppServerModule, AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./app/ngmodule');

// Express server
export const app = express();
app.use(compression());
app.use(cookieParser());

const DIST_BROWSER_FOLDER: string = join(process.cwd(), 'dist', 'browser');
const INDEX_HTML_PATH: string = join(DIST_BROWSER_FOLDER, 'index.html');
const INDEX_HTML: string = readFileSync(INDEX_HTML_PATH).toString();

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory || AppServerModule, {
    document: INDEX_HTML,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
      { provide: REQUEST, useValue: options.req },
      { provide: RESPONSE, useValue: options.res },
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', DIST_BROWSER_FOLDER);

// Server static files from /browser
app.get('*.*', express.static(DIST_BROWSER_FOLDER));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(INDEX_HTML_PATH, {
    req, res,
    providers: [
      { provide: REQUEST, useValue: (req) },
      { provide: RESPONSE, useValue: (res) },
    ],
  });
});
