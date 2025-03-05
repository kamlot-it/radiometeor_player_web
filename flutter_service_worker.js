'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "35c83f346de23669bd4559ca76485018",
".git/config": "1c5cd5df3eb14045fa7b75c0f76be8e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1ce80b11378bcdf9b252261f5cbc75ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53921ad9473f7d81209a5cd53265fb07",
".git/logs/refs/heads/main": "c5180ea93aa613b85e108d6c1f2cccf6",
".git/logs/refs/remotes/origin/main": "d4d3ba5ee5c242109a7c7b57f950c9d3",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/04/6907097c8293fc11da3e0bfb5497ab7bb97f98": "bd817da82d3a3caae1888e9f405abcff",
".git/objects/0d/6c2bca44df90063bd44896d59369b88ea2c1b5": "e8452974179dd2e34ef561a95eb9a238",
".git/objects/10/9c0b91b19fdc6d8feed103fdb8e6e176b8e727": "5b28eaa7fed65e0153b7f32c7011766b",
".git/objects/13/677380d32fafb13bbae6d662efb3503a0c0db0": "f417f44a7f57e3f05a54b95b85701590",
".git/objects/14/0ae13380c8619bc2739a4b7c5643d008ac443c": "ae445951f1243182c602481327c05733",
".git/objects/18/f1de12b29fbc6ac7b520b33b978f9cf0ba942e": "4ce4df67d34802ff7023c724f702f280",
".git/objects/1d/2e2a27cf3c230daebd4e2c02b5dedbe2541bbb": "d752e2c767f8b42193c206944b28ef45",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/25/f3a605e1e91b09e108a7b1d502b0c0592f979b": "652285eeebaa0f6ba44c5ecbd4fdc247",
".git/objects/26/8bb228931490d87b94dd7d8b867984c85c1699": "a9f2ff573d879d0f32f6bd06beeb03ca",
".git/objects/28/354896348ae9b602a2da47a5a4b4688f69950d": "ffb9f6f48ec48ae66479614acad80fbc",
".git/objects/28/6822ad1856b912f01ab9225422392c91664a51": "4929392ead06b5d99318a12836f96073",
".git/objects/2b/67c004c5cd7c49a7e2db2b9fa3fd55a7fded4f": "4e2c683e0a0a26a6586cc975c95f5f32",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/ff1f8731fa86e018319ebe12a7c06aaaf8f3ec": "aeb5a2f20e3c86a3c31152a3ce9913b8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/78b7ff15f8313ec9af2656a274ae518d4ebdcf": "536c11710576ee04f222adbd273a8e5f",
".git/objects/4e/4d289ed6633ac45cc32a90c47bc59f686f2f0b": "0e4eff81495cceea7781a77a5513ffae",
".git/objects/51/483d0cc31f4aba8f9470ce2db347e35a900ed5": "2554fb73dcdb14d9960185c7e7d34acf",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/90f495143fdcf35742ea3bb1e65d803ffddb37": "e7e2f78531d38a3b15aeac3c45169279",
".git/objects/5a/2fb1912c3b7bafb6c85c51f6ba719378fa08fa": "8198d5f65b5970c3592524ff4c95512f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/e3001b08aae49702527aa7cbc3d473a21d2904": "dbe5053246b7d4afda5197c963dd0742",
".git/objects/65/2698999f551750a3a062cf06f04f0c1834ac1d": "c35294fe70667eddd5b6cca46298c2b1",
".git/objects/70/b032d9a15126b4ec06789ba70533075b6cfa48": "57c6825f2ea5cd566b3c21fd3c31ddcb",
".git/objects/71/4310b698c410c6cc1fa3a7b79f9ff6f97d5010": "fdc64b668eae5d48754dcfe819f3c9fc",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/77/026602a043ccca12e80f570552a4d963491a03": "1c808cfb1beb199fb8c533c57a7f27a1",
".git/objects/83/66051bc1ac0be18426f2e5c476f0d190b333dd": "d84d9edfc7650237b36491c4b719c4dd",
".git/objects/84/f42b24c43548058007bed6b72ed1d02a47cf40": "acdb702871892ef10d5ed3daeb641801",
".git/objects/85/99aeacbe5d4880eba5f1862db7479f90775cff": "819a77646ac90ce9bd31576fae8e998b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d6f2f28e4fd2f72658be400b30488f9ec21fc2": "6b1be42c3038a84bc402f8f9ad7fe80a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/18dac20e96cfa742e2544ef8f3cf2c332c674a": "aa80e7ce802d5815e1ec769b9fa1ac9c",
".git/objects/8e/f25c8b64399faa2c5e6e4f2cb0b4c5e30d62cf": "dbe42e6538e25c277041a35fa03ec525",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9d/97472ff68e78d8b38a261e258f7e45aaa72b5c": "755a09b01b5fb70b4aa35d4225ba162a",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a4/a986504b7b323b4ad7e1f3b904a7e4a249012d": "6b8dfd3b37585c0216ec7200fdbffeb1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/590c7b216d0fa7d386f3acd8085414537dcdd9": "025d074763bfbb8edd7b7d9e27795088",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/b0/1d1e11c2939e22ec6897e0c69e25a0c53bf7f4": "41e121d62fc2365ce2d85ec8c71cf4ee",
".git/objects/b3/6fe743db04b8fd6fecfc24827e4669b94006b6": "c20dffd7d4a4354694f77001a2e1457c",
".git/objects/b3/8189f083cb4e75fbf4d649546e73602ed61725": "2b41fbfa216653b8430f1ec01d661149",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/72dd8269d3b5cbf115fc012a6e40d108c82fdc": "bc456e825dd0ce566598616123965a2b",
".git/objects/c4/ad7a96dae94c157ae034084b268d65232c05b3": "cc4197b46b698af88ebd1d693f73df87",
".git/objects/c7/61e2affdc3e8689d46cf88533fd4e8b7386cf9": "f38e246d0b154b317f80060bff12b0e0",
".git/objects/cb/8488e2347eafc12a2b949a4098206645040d75": "bbe21117d9d45bd0202fa23c372154c1",
".git/objects/cb/e9fdf27fcfa7bb8f85a69f9ce309d39ea37170": "e239852d78b6d5702e5425f75a62d200",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/1f0675fd5f3db5de30a78dcd2feda89b4c274f": "efca22f5857f2383f6ed3e20a01570ba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/029a24a9c661d9cfbec72e2031df528afc4fa9": "5dd17250774c150bd97f2f3d4085b6ed",
".git/objects/f8/841742caec49674aa779067e050db27b1da0af": "d9db66a1c16234c85dc5ce5ac77ef590",
".git/refs/heads/main": "601723362fb33184dac90eff12af7566",
".git/refs/remotes/origin/main": "601723362fb33184dac90eff12af7566",
"assets/AssetManifest.bin": "e9a888b798f726fc01ab9ae6d3ac7f0e",
"assets/AssetManifest.bin.json": "1a7deb546c8ee98c2595098bcda59a39",
"assets/AssetManifest.json": "f3fa9820aefbf0a5578860dd1ace0202",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/backgrounds/exe_storki_bg.png": "3666edc99627b9c8859af4cd8645a3b0",
"assets/assets/images/backgrounds/magmuz_storki_bg.png": "74a58756bc54569c73d46ea1eddfd852",
"assets/assets/images/backgrounds/Notatki_z_poznania_storki_bg.png": "61a4ca1e1428cfb55de30658bcb530ba",
"assets/assets/images/backgrounds/PK_storki_bg.png": "523e0aac36678f284535ce61c629b672",
"assets/assets/images/backgrounds/Planeta_storki_bg.png": "5c1089eea0e788a5780874a07315b8a8",
"assets/assets/images/icon.png": "b860bf8f614018ac45d8a627c44dd951",
"assets/assets/images/logo.png": "025594a12ba3a17282f3a459bb4fe747",
"assets/assets/images/rm_logowhite.png": "e39429cc6c46668bbadfa5a2f9b207af",
"assets/assets/videos/animation.gif": "9ca00f3f0c39b31e590967bfa59c19f9",
"assets/assets/videos/animation.mp4": "a2bb37789f679dea833446827c74c13e",
"assets/assets/videos/animation.webp": "400888b04aab3c51a15844a6ef0e94f2",
"assets/assets/videos/palette.png": "e16e9cda8c0966dc086e2cf6c3d5e87e",
"assets/FontManifest.json": "943340d70e2dc09bf0bec29295dbc98b",
"assets/fonts/MaterialIcons-Regular.otf": "b77457212ce5fb40e6291238f3905bf9",
"assets/NOTICES": "baf97d4c4b82e0d4cd9ec0967460b1cf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "025594a12ba3a17282f3a459bb4fe747",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1f42eac997b44c6bdefb512781db1e66",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d69073eb0f648428c467e2050a3beab",
"/": "6d69073eb0f648428c467e2050a3beab",
"main.dart.js": "4fe9b99dc0041bc1488ce1e6439fa7cb",
"manifest.json": "0b3c86d48d6e617aabd38036d8b16367",
"version.json": "109852459e0d205cf1e3d68a56bfc7b6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
