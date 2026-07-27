// 캐시 이름 설정
const CACHE_NAME = 'exchange-calc-v1';

// 설치 이벤트
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

// 활성화 이벤트
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Active');
  return self.clients.claim();
});

// 네트워크 요청 처리
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
