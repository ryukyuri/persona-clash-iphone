/* Stage 30 PWA shell. Offline assets only; save data is in localStorage. */
'use strict';
const CACHE_NAME='persona-clash-stage30-v0.9.23-github';
const CORE=['./','./index.html','./manifest.webmanifest','./device-check.html','./icon.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('persona-clash-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;event.respondWith(caches.match(req).then(hit=>hit||fetch(req)).catch(()=>req.mode==='navigate'?caches.match('./index.html'):Response.error()));});
