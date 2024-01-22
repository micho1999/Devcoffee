installEvent.waitUntil(
  caches.open(staticDevCoffee).then(cache => {
    cache.addAll(assets);
    let version = 3;
    console.log("Service worker installed !");
    console.log("version:" + version);
  })
);


self.addEventListener("activate", function(e) {
  let version = 3;
  console.log("Service worker activated !");
  console.log("version:" + version);
}
);

self.addEventListener("fetch", fetchEvent => {
fetchEvent.respondWith(
  caches.match(fetchEvent.request).then(res => {
    //console.log("Fetching service worker")
    return res || fetch(fetchEvent.request);
  })
)
}

)
