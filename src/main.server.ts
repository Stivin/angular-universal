// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { createServer, IncomingMessage, Server, ServerResponse } from 'http';

import { enableProdMode } from '@angular/core';

import { app } from './app';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const PORT: number | string = process.env.PORT || 3000;

let requestListener: (req, res) => void = app;

// Start up the Node server
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  requestListener(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

if (module['hot']) {
  module['hot'].accept('./app', () => {
    requestListener = require('./app').app;
  });
}

export default server;
