importScripts('https://cdn.ampproject.org/sw/amp-sw.js')

AMP_SW.init({
  assetCachingOptions: [
    {
      regexp: /\.(png|css|js)/,
      cachingStrategy: 'CACHE_FIRST'
    }
  ],
  offlinePageOptions: {
    url: '/index.html',
    assets: []
  }
})
