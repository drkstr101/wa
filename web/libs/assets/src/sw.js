if (!self.define) {
  let s,
    e = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    e[i] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = i), (s.onload = e), document.head.appendChild(s);
        } else (s = i), importScripts(i), e();
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, p) => {
    const l = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (e[l]) return;
    let v = {};
    const r = (s) => i(s, l),
      t = { module: { uri: l }, exports: v, require: r };
    e[l] = Promise.all(n.map((s) => t[s] || r(s))).then((s) => (p(...s), v));
  };
}
define(['./workbox-75794ccf'], function (s) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: '/_next/../public/android-chrome-192x192.png',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/../public/android-chrome-512x512.png',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/apple-touch-icon.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/browserconfig.xml', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/favicon-16x16.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/favicon-32x32.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/favicon.ico', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/icons/icon-article.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/icons/icon-data-refresh.svg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/icons/icon-devices.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/icons/icon-project.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/icons/icon-servers.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/icons/users-lock.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/aaron-r-miller.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/../public/images/adobestock_434934439.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/apple.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/auto_mode_black_48dp.svg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/background.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/bg.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/carla.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/cloud-illustration-indigo-400.svg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/desmond-eagle.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/dianne-ameter.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/expo.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/faster.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/favicon.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/ferenc-almasi-ayjnmg4oux4-unsplash.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/focused.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/gatsby.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/google-play.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/hero-1.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/hero-2.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/hero-3.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/hero-4.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/hero-enterprise.svg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/hero.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/hilary-ouse.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/hugh-saturation.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/icon.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/lock_black_48dp.svg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/logo-alt.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/logo-df8eda14.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/logo.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/logo.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/playstation.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-1.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-10.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-11.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-12.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-2.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-3.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-4.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-5.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-6.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-7.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-8.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/post-9.jpg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/scale_black_48dp.svg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/../public/images/scott-graham-5fnmwej4taa-unsplash.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/skype.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/smarter.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/users-lock.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/wa-card@4x.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/../public/images/work-book-cover-2.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/../public/images/work-book-cover-3.jpg',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/../public/images/xbox.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/images/zcool.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/manifest.json', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/mstile-150x150.png', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/safari-pinned-tab.svg', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/styles/base.css', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/styles/components.css', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/styles/index.css', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/styles/utilities.css', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        { url: '/_next/../public/sw.js', revision: 'KlBpFDMwKd-vS43sPvPpz' },
        {
          url: '/_next/static/KlBpFDMwKd-vS43sPvPpz/_buildManifest.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/KlBpFDMwKd-vS43sPvPpz/_middlewareManifest.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/KlBpFDMwKd-vS43sPvPpz/_ssgManifest.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/798-7d14fe1b52e6d0a5.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/framework-ba67e663225a77fc.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/main-0979ff525c2e0633.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/pages/_app-7b6a897abaf419da.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/pages/_error-9ec226e1e9b3ed2c.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/pages/index-a5243e8c5a9d2bc1.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        {
          url: '/_next/static/chunks/webpack-7ee66019f7f6d30f.js',
          revision: 'KlBpFDMwKd-vS43sPvPpz'
        },
        { url: '/_next/static/css/caa79c4bde66a436.css', revision: 'KlBpFDMwKd-vS43sPvPpz' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      '/',
      new s.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: s, response: e, event: i, state: n }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers })
                : e
          }
        ]
      }),
      'GET'
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:mp4)$/i,
      new s.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        const e = s.pathname;
        return !e.startsWith('/api/auth/') && !!e.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        return !s.pathname.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    s.registerRoute(
      ({ url: s }) => !(self.origin === s.origin),
      new s.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
      }),
      'GET'
    );
});
