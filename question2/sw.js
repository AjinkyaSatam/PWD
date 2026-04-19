// Install Event
self.addEventListener('install', function(event) {
    console.log('Service Worker Installed');
});

// Activate Event
self.addEventListener('activate', function(event) {
    console.log('Service Worker Activated');
});