import { message } from "@/shared/constants";
import { util } from "./utils-sw";

declare const self: ServiceWorkerGlobalScope;

// To disable all Workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// https://developer.chrome.com/docs/workbox/troubleshooting-and-logging/#turn-off-logging-in-development-builds-in-any-workflow
//
// self.__WB_DISABLE_DEV_LOGS = true

util(message);

// listen to message event from window
self.addEventListener("message", (event: { data: any; }) => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected Workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event?.data);
});

self.addEventListener("push", (event) => {
  const data = JSON.parse(event?.data?.text() || "{}");
  event?.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.message,
      icon: "/icons/android-chrome-192x192.png",
    })
  );
});

// ya lo hace ...
/* self.addEventListener("install", (event) => {
  event?.waitUntil(
    caches.open('svg-cache').then((cache) => {
      return cache.addAll([
        "../src/assets/svg/theme/moon.svg",
        "../src/assets/svg/theme/sun.svg",
      ]);
    })
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  )
}) */