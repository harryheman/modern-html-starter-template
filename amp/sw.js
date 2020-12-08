importScripts('https://cdn.ampproject.org/sw/amp-sw.js')

AMP_SW.init({
  assetCachingOptions: [
    {
      regexp: /\.(png|jpg|woff2|woff|css|js)/,
      cachingStrategy: 'CACHE_FIRST'
    }
  ],
  offlinePageOptions: {
    url: '/index.html',
    assets: []
  }
})
