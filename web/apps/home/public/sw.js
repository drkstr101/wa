if(!self.define){let e,i={};const o=(o,s)=>(o=new URL(o+".js",s).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const r=e=>o(e,c),t={module:{uri:c},exports:a,require:r};i[c]=Promise.all(s.map((e=>t[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/../public/android-chrome-192x192.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/android-chrome-512x512.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/apple-touch-icon.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/browserconfig.xml",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/favicon-16x16.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/favicon-32x32.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/favicon.ico",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/icons/icon-article.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/icons/icon-data-refresh.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/icons/icon-devices.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/icons/icon-project.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/icons/icon-servers.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/icons/users-lock.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/aaron-r-miller.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/adobestock_434934439.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/apple.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/auto_mode_black_48dp.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/background.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/bg.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/carla.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/cloud-illustration-indigo-400.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/desmond-eagle.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/dianne-ameter.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/expo.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/faster.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/favicon.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/ferenc-almasi-ayjnmg4oux4-unsplash.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/focused.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/gatsby.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/google-play.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hero-1.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hero-2.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hero-3.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hero-4.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hero-enterprise.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hero.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hilary-ouse.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/hugh-saturation.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/icon.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/lock_black_48dp.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/logo-alt.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/logo-df8eda14.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/logo.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/logo.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/playstation.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-1.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-10.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-11.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-12.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-2.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-3.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-4.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-5.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-6.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-7.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-8.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/post-9.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/scale_black_48dp.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/scott-graham-5fnmwej4taa-unsplash.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/skype.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/smarter.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/users-lock.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/wa-card@4x.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/work-book-cover-2.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/work-book-cover-3.jpg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/xbox.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/images/zcool.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/manifest.json",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/mstile-150x150.png",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/safari-pinned-tab.svg",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/styles/base.css",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/styles/components.css",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/styles/index.css",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/styles/utilities.css",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/../public/sw.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/framework-72f19c736b33bfbf.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/main-5ca0f74ebeb6957c.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/pages/_app-01577e407adde19c.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/pages/_error-9ec226e1e9b3ed2c.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/pages/index-3fc4d12c90a68c13.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/chunks/webpack-7ee66019f7f6d30f.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/css/2dd1d6ce00d48d4b.css",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/daIWom5Yc66KBHoHx051_/_buildManifest.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/daIWom5Yc66KBHoHx051_/_middlewareManifest.js",revision:"daIWom5Yc66KBHoHx051_"},{url:"/_next/static/daIWom5Yc66KBHoHx051_/_ssgManifest.js",revision:"daIWom5Yc66KBHoHx051_"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:o,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
