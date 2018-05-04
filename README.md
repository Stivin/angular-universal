<img src="https://cloud.githubusercontent.com/assets/1016365/10639063/138338bc-7806-11e5-8057-d34c75f3cafc.png" alt="Angular Universal" height="80" /> Angular Universal Full Starter
======================================
[![Angular-RU Universal](https://img.shields.io/badge/Telegram_chat:-Angular_RU_Universal-14b102.svg?style=flat)](https://t.me/angular_universal_ru)
> Server-Side Rendering for Angular

# Table of Contents
* [Live Demo](#live-demo)
* [Features](#features)
* [Plans](#plans)
* [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Development Server](#development-server)
    * [Build](#build)
* [Universal "Gotchas"](#universal-gotchas)
* [License](#license)

# Live Demo
**[angular-universal.ru](https://angular-universal.ru)** *(Server-Side Rendering)*

# Features
- [x] Uses **[Angular] 6** as universal web application platform
- [x] Uses **[Angular Material] 6** as UI components
- [x] Uses **[module-map-ngfactory-loader] 6** as server side rendering of lazy routes
- [x] Uses **[angular/cli] 6** as code scaffolder
- [x] Uses **[webpack] 4** as module bundler
- [x] Uses **[node]** as server
- [x] Uses **[express]** as request handler
- [x] Uses **[ngx-translate]** to support internationalization (*i18n*)
- [x] Uses **[ngx-meta]** for SEO (*title, meta tags, and Open Graph tags for social sharing*)
- [x] Uses **[hmr]** (*Hot Module Replacement*) as hot module reloading for Webpack and Angular
- [x] Uses **[udk]** (*Universal Development Kit*) as Webpack extension which improves universal application development

# Plans
- [ ] @angular/service-worker

# Getting Started

### Installation
```
git clone https://github.com/Stivin/angular-universal.git my-project
cd my-project
npm install
```

### Development Server

#### Server-Side Rendering
Run `npm run dev` for a universal dev server. Navigate to http://localhost:4000 <br>
The universal dev server which enable SSR (build browser and server targets) <br>
The app will automatically hot-reload on server and browser sides if you change any of the source files.

#### Client-Side Rendering
Run `npm run dev:spa` for a SPA dev server. Navigate to http://localhost:4200 <br>
The SPA dev server which is a webpack dev server (build browser target only). <br>
The app will automatically reload if you change any of the browser source files.

### Build
Run `npm run build` for a build
Run `npm run build:prod` for a production build

# Universal "Gotchas"

> When building Universal components in Angular there are a few things to keep in mind.

- **`window`**, **`document`**, **`navigator`**, and other browser types - _do not exist on the server_ - so using them, or any library that uses them (jQuery for example) will not work. You do have some options, if you truly need some of this functionality:
    - If you need to use them, consider limiting them to only your client and wrapping them situationally. You can use the Object injected using the PLATFORM_ID token to check whether the current platform is browser or server.

```typescript
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }

ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
        // Client only code.
        ...
    }
    if (isPlatformServer(this.platformId)) {
        // Server only code.
        ...
    }
}
```

    - Try to *limit or* **avoid** using **`setTimeout`**. It will slow down the server-side rendering process. Make sure to remove them in the [`ngOnDestroy`](https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html) method of your Components.
    - Also for RxJs timeouts, make sure to _cancel_ their stream on success, for they can slow down rendering as well.
- **Don't manipulate the nativeElement directly**. Use the _Renderer2_. We do this to ensure that in any environment we're able to change our view.
```
constructor(element: ElementRef, renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'font-size', 'x-large');
}
```
- The application runs XHR requests on the server & once again on the Client-side (when the application bootstraps)
    - Use a cache that's transferred from server to client (TODO: Point to the example)
- Know the difference between attributes and properties in relation to the DOM.
- Keep your directives stateless as much as possible. For stateful directives, you may need to provide an attribute that reflects the corresponding property with an initial string value such as url in img tag. For our native element the src attribute is reflected as the src property of the element type HTMLImageElement.

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

[Angular]: https://angular.io
[Angular Material]: https://material.angular.io
[module-map-ngfactory-loader]: https://github.com/angular/universal
[angular/cli]: https://github.com/angular/angular-cli
[webpack]: https://github.com/webpack/webpack/
[node]: https://nodejs.org/dist/latest-v8.x/docs/api/
[express]: http://expressjs.com/en/4x/api.html
[ngx-translate]: https://github.com/ngx-translate/core
[ngx-meta]: https://github.com/fulls1z3/ngx-meta
[hmr]: https://github.com/gdi2290/angular-hmr
[udk]: https://github.com/enten/udk