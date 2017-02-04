self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Opus';
  const options = {
    body: event.data.text(),
    icon: 'assets/check-list64.png',
    badge: 'assets/check-list32.png'
  };

  const notificationPromise = self.registration.showNotification(title, options);
event.waitUntil(notificationPromise);
});


self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});