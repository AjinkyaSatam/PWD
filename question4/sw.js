self.addEventListener('fetch', e =>
  e.respondWith(
    caches.match(e.request).then(r =>
      r || fetch(e.request).then(res =>
        caches.open('v1').then(c => {
          c.put(e.request, res.clone());
          return res;
        })
      )
    )
  )
);