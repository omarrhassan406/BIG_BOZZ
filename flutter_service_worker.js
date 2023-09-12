'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "02b94c05f16d2cc62e1187f32a649a14",
".git/config": "cbfc368714af91e8b0c88341d30f5441",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "59a4502e1dc017b8ec0ebf53fcbb4868",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "acda15d5765bae752d5ad841fd4b0f6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "317684e4daeaada2ff48e59da9894d84",
".git/logs/refs/heads/main": "0affe3a555eee782863f6146de910e38",
".git/logs/refs/remotes/origin/main": "8cba09fafdecdfacd5fb605505f7ba15",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/02/4c851e366e58e70660bbca1dd84cbf02e64cb8": "fcde28898fbed0af3dbac2890fed5147",
".git/objects/06/2df7ee218dd9db05391cea0a598bcf40e711dc": "04a6c924f31c51a459437f461da341d8",
".git/objects/08/1c3d37448fb5340e15d53632f0d22a0fe9b692": "249cf7ac39424de5d6f4adfc117fe302",
".git/objects/0c/308ddee7d4430061c4f6883c4c014be1d9ef07": "9f05fb751ddb91928313a75910a9dff5",
".git/objects/11/ab238b38f9c37df17f15f9af6639c230b97292": "f79ad46a6e1ecc67e0ff995a2f676ad1",
".git/objects/15/aa22f68a8ae7259e568e5c051d949a33efdebb": "97f4f67cf1079e7263c8250faeabdace",
".git/objects/15/c52794835e21cd005902298f97790bb89d4505": "755702e37f8b6774b154fc0adccb22f4",
".git/objects/18/65e760951a30e2b0f199a59cc98b11f9afd86a": "c8029367607468d5191c31e1685f7607",
".git/objects/18/cb8b64917741367b71c1e2fee7e1daf924e161": "5e1a3d012937961255cb148ca10b1fdc",
".git/objects/1a/8fdba43fc4351667ab8541a4b86cac9befeb6e": "ac4dbf3ec5b222f6b4a9d31356361b88",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/621b27e28d728c4f5f2eb39fe5c30ae3133f68": "11acce70957321942fc691592103ed78",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/54b671e9a942224739c46dce64f79ec093170a": "ef3d80290b421f38d0473a8d10eeb81a",
".git/objects/44/a347ed56699f923f17af2a2746a1bebe321cf7": "d68c7356ba974de4d6a8f44f2f64ce00",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/2e170481def233f87fe7446538834fafcd2cb7": "cd25dd894d2ca6529e10be34a372f0c8",
".git/objects/4c/b49685a98f1bc4977860ded31ce773537f180f": "0df38f33319d9cd0a9173d21adce9010",
".git/objects/4e/e7826cc27fc16c03d0c19c3a7caa6b65875b8a": "9ac20d69b434fde1a309e0c5b5ebffee",
".git/objects/4e/ed0622ef08130fbe73315f2699ac2edf65f4df": "528815fd5dcfababeff3316a3d93eeda",
".git/objects/52/5264b48ab0ffb1ca791ce1c79e5d33061c5c58": "c8530f9af62d57e27ce3021cadbf173b",
".git/objects/53/6fefbb1ac32c974df18d6abeba9025c40c9f48": "40babd0de2e0ee980e692e9e99afd9ba",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5c/38a2217bca6ad809f1a9e4764c93f378f026dd": "b8f50415d0d736ba645a0e77a4664662",
".git/objects/5d/c142ea13e8a3f831127d7bf1534f662ef772fa": "6b8d35858bd3ec1fd16294fbd899445c",
".git/objects/66/8a968f083b4e6d5e733293fbaa85811949940c": "3b7d02416da79db8ee6457642dc66605",
".git/objects/67/10199ba85bb5203ebca9fa9756df9d4c77dea3": "9e599ace2d8511f43f1f59f756e4716f",
".git/objects/69/5fb62d488df9a83ece56cf84f11a21af838598": "b114b749db2e93e6f65023419f3cec39",
".git/objects/75/752cbc8d4af5f2256de05ab169d4b09e2bee88": "8385be6103dbe8180b5299360afbd345",
".git/objects/80/202073917bcbb8ec7cb9743227c032108f9722": "a9d028a18280d87e88daf844f7251452",
".git/objects/80/bb36b4c732c206f5ce10a121f2eaa5b1a1ff08": "5da80d74a0f99421da0f37b5919fd365",
".git/objects/86/64e84605c7304399d57e412eb34db88e614dec": "2bd9c5c602cab58f285207d4bb463218",
".git/objects/87/0d9b80d17c51a671b8df2e76336b48f02e2dd7": "503b7d2037a57a6c4deeff7cc9cd9f70",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/f389058d811350f7055367d4844a19de6c8054": "3f3c054fba21f35d73f890f54cbb9c40",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/ae/27a89e917508952d0c5bdf6feefb4a160ac89b": "25a369f16a79e9222d097562a20bd92e",
".git/objects/b6/5339a316a072a8dfb8fba3cb8994677fe685f0": "738d18623037df2e5841a78aa7f35380",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/bf1be97bd6f756ccaa50ff0b3e009bf33b7679": "71584ac5a4706b154d3cd1bd9529e19e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/dcb6fa998f243c9886ef8b4c016430e6512e5b": "0e992f876d676de6aaebc094d39fdc13",
".git/objects/c4/e17e41441fd1a65f122e75b0e36ce3319ae021": "198816d0b260a57c45cd928e4560cb8b",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c7/8a6e7c224a657ad94cf1a083181aa1758f212c": "b3535714ec33dba781e87731d5f67aa7",
".git/objects/cd/3d0dca2ddf36500397404209168a009adb0e8d": "6a9bc1c88b913bb56d644553eed111e5",
".git/objects/cf/4911633a8686366fc9d6338e247599d0bd068d": "d12b7543a67cab6311c15b0e03525389",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4c61df3d3a4beac2184d10c26aafd0bf16d64d": "d8f358979835a6ec106d6537d49beb65",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/1ab607ed6df34e717a027644c132b149ae7b88": "29b8559973e53aa794a0f7cf95b8cc03",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/18aca2d8675d4790de9eec2e26bf970bf8b2b0": "18caebc7a0e906036af86600c228c8d9",
".git/objects/e9/f954a584df4d55fd82d59a043a623e15d5227c": "14df5e884cb978d5cf21f7283fec4213",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/3966ab6a46185023543afbaa28db19611772eb": "59ee14ddfc84eb39636359a0e5c2c731",
".git/objects/f3/d7df6d2abe542c6f921c125933ffbd0f3a86e7": "f8eb847a386e050d1abb8a50953ce760",
".git/objects/f9/5bdce09142a3239659a1d80c0afd0a4d6285c5": "9241aa57e2959922153b95473348a744",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fa/ed250be6826f231c3a1eaa6e401c7fd4d442a4": "b79bdf469a8229fe0e43cb5017dea817",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "d08cf46ed4bf5c75d38e518944658fc2",
".git/refs/remotes/origin/main": "9e75be8f03684acfb6e365de9da5da62",
"assets/AssetManifest.bin": "6b37c6bb0d6698d0b474e9ca0263fa8e",
"assets/AssetManifest.json": "7715f1ba23a6551bb5386298d477d78f",
"assets/assets/Icon.png": "8b9cf486552460f79e37ce02b55c9da9",
"assets/assets/Icon2.png": "703cabbc71525854264ebee0be8fc57e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "163ca09c3adae75fada9835cee53b28e",
"assets/NOTICES": "f11e26e586ecfdc98c2337278c25823c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/canvaskit.wasm": "e1268bd44a281b6550298daafe885f09",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "8f35cc9e9c176036cf4926acbe1a72a4",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "56bda229703c13713a99bfb31dae923b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "40116daf24d74aad05ad4fbdb26be662",
"/": "40116daf24d74aad05ad4fbdb26be662",
"main.dart.js": "d033ca6c0cb6fe8067f5eadd05863fc5",
"manifest.json": "2a562e0ed4983ca4e4ca8b791bcb5eef",
"version.json": "fd58c1b512d510aa9e9e505167abd596"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
