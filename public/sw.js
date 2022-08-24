let cacheData = 'kurtubiV1'

this.addEventListener('install', (event) => {
   
    event.waitUntil(
        caches.open(cacheData)
            .then((cache) => {
                cache.addAll([
                    '/',
                    '/logo.png',
                    '/static/js/bundle.js',
                    '/static/js/main.chunk.js',
                    '/static/js/vendors~main.chunk.js',
                    '/static/css/2.a66643a7.chunk.css',
                    '/static/css/main.c0629dd1.chunk.css',
                    '/static/js/2.9efd84c3.chunk.js',
                    '/static/js/main.d368ee87.chunk.js',
                    '/static/media/logo.1453d03c.png',
                    '/manifest.json',
                    '/auth/user'
                ])
            }).catch(err => console.log(err))
    )

})

this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if(response){
                        return response
                    }
                })
                .catch(err => console.log(err))
        )

        let fetchUrl = event.request.clone()
        fetch(fetchUrl)
    }

})