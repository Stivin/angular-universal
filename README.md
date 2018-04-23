<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1016365/10639063/138338bc-7806-11e5-8057-d34c75f3cafc.png" alt="Angular Universal" height="320"/>
</p>

# Angular Universal Starter [![Angular-RU](https://img.shields.io/badge/Telegram_chat:-Angular_RU-216bc1.svg?style=flat)](https://t.me/angular_ru) [![Angular-RU Universal](https://img.shields.io/badge/Telegram_chat:-Angular_RU_Universal-14b102.svg?style=flat)](https://t.me/angular_universal_ru)
> Server-Side Rendering for Angular

# Table of Contents
* [Demo](#demo)
* [Features](#features)
* [Plans](#plans)
* [Getting Started](#getting-started)
* [Universal "Gotchas"](#universal-gotchas)
* [License](#license)

# Demo
Live Demo: [angular-universal.ru](https://angular-universal.ru) (*Server-Side Rendering*)

# Features
- [x] **[Angular] 5** as universal web application platform
- [x] Using the modern **UI components** of **[Angular Material]**
- [x] Uses **[module-map-ngfactory-loader] 5** as server side rendering of lazy routes
- [x] Execution of queries to api on the server **TransferHttp**
- [x] Work with cookies on the server **UniversalStorage**
- [x] Uses **[angular/cli] 1.7** as code scaffolder
- [x] Uses **[webpack] 3** as module bundler
- [x] Uses **[node]** as server
- [x] Uses **[express]** as request handler
- [x] Uses **[ngx-translate]** to support internationalization (i18n)
- [x] Uses **[ngx-meta]** for SEO (*title, meta tags, and Open Graph tags for social sharing*)

# Plans
- [ ] @angular/service-worker

# Getting Started

### Installation
`npm install` or `yarn`

### Development (Client-side only rendering)
Run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

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
[module-map-ngfactory-loader]: https://github.com/angular/universal/tree/v5.0.0
[angular/cli]: https://github.com/angular/angular-cli/tree/1.7.x
[webpack]: https://github.com/webpack/webpack/tree/v3.11.0
[node]: https://nodejs.org/dist/latest-v8.x/docs/api/
[express]: http://expressjs.com/en/4x/api.html
[ngx-translate]: https://github.com/ngx-translate/core
[ngx-meta]: https://github.com/fulls1z3/ngx-meta