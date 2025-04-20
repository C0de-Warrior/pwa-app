let cacheData = "appV1";

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/ws',
                '/users',
                //'/index.html',//
                //'/index.html',
                //'/index.html',
                '/'
            ])
            .then(() => {
                console.log('Cache has been successfully added.');
            })
            .catch((error) => {
                console.error('Failed to add cache:', error);
            });
        })
    );
});
caches.keys().then(cacheNames => {
    console.log('Caches:', cacheNames)
});

this.addEventListener('fetch', (event) => {

    if (!navigator.onLine)
        if(event.request.url==='http://localhost:3000/static/js/bundle.js')
            {
            //console.warn('url', event.request.url)
            event.waitUntil(
                this.registration.showNotification('Notice!', {
                    body: 'Internet Connection Disconnected',
                })
                )};
    {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            let requestUrl = event.request.clone();
            fetch(requestUrl);
            //return fetch(event.request);
        })
    )
    }
});
// self.addEventListener("fetch", function(event) {
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(cacheData).then(function(cache) {
//                 cache.put(event.request.url, res.clone());
//                 return res;
//               });
//             })
           
//         }
//       })
//     );
//   });