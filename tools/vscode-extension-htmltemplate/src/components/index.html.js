export default `
<!DOCTYPE html>
<html
  lang="en"
  dir="ltr"
  itemscope
  itemtype="https://schema.org/WebPage"
  prefix="og: http://ogp.me/ns#"
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HTML Template</title>

    <link rel="canonical" href="https://moderntemplate.site/" />
    <link rel="amphtml" href="https://moderntemplate.site/amp/index.html" />
    <link rel="icon" type="image/png" href="./public/icons/64x64.png" />
    <link rel="manifest" href="./manifest.json" />

    <!-- General -->
    <meta name="application-name" content="HTML Template" />
    <meta name="author" content="Igor Agapov" />
    <meta name="description" content="Modern HTML Starter Template" />
    <meta
      name="keywords"
      content="modern, useful, html, html5, css, css3, javascript, js, template, boilerplate"
    />
    <meta name="referrer" content="strict-origin" />

    <meta itemprop="name" content="HTML Template" />
    <meta itemprop="description" content="Modern HTML Starter Template" />
    <meta itemprop="image" content="./public/icons/128x128.png" />

    <!-- Microsoft -->
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="msapplication-starturl" content="/" />
    <meta name="msapplication-tooltip" content="Modern HTML Starter Template" />
    <meta name="msapplication-TileColor" content="#222" />
    <meta name="msapplication-config" content="browserconfig.xml" />

    <!-- Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://moderntemplate.site/" />
    <meta property="og:title" content="HTML Template" />
    <meta property="og:description" content="Modern HTML Starter Template" />
    <meta property="og:image" content="./public/icons/256x256.png" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta name="twitter:card" content="app" />
    <meta name="twitter:title" content="HTML Template" />
    <meta name="twitter:description" content="Modern HTML Starter Template" />
    <meta name="twitter:url" content="https://moderntemplate.site/" />
    <meta name="twitter:image" content="./public/icons/256x256.png" />

    <!-- Apple (IOS) -->
    <meta name="apple-mobile-web-app-title" content="HTML Template" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#222" />
    <link rel="apple-touch-icon" href="./public/icons/256x256.png" />

    <!-- Android -->
    <meta name="theme-color" content="#eee" />
    <meta name="color-scheme" content="light" />
    <meta name="mobile-web-app-capable" content="yes" />

    <!-- Google Verification Tag -->

    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Yandex Verification Tag -->

    <!-- Yandex.Metrika counter -->

    <!-- Mail Verification Tag -->

    <!-- JSON-LD -->
    <!-- https://schema.org/WebPage -->
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Webpage",
        "url": "https://moderntemplate.site",
        "name": "HTML Template",
        "headline": "HTML Template",
        "description": "Modern HTML Starter Template",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://moderntemplate.site"
        },
        "publisher": {
          "@type": "Person",
          "name": "Igor Agapov"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://moderntemplate.site/img/logo.png",
          "width": 1200,
          "height": 680
        },
        "datePublished": "2020-12-14",
        "keywords": "modern, useful, html, html5, css, css3, javascript, js, template, boilerplate"
      }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      as="style"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      rel="stylesheet"
    />

    <link rel="preload" href="./public/css/style.css" as="style" />
    <link rel="stylesheet" href="./public/css/style.css" />

    <link rel="preload" href="./public/js/script.js" as="script" />

    <style>
      /* Critical CSS */
    </style>
  </head>

  <body>
    <!-- HTML5 -->
    <header>
      <h1>
        Modern HTML <br />
        Starter Template
      </h1>
      <nav>
        <a href="https://moderntemplate.site" target="_blank" rel="noopener">
          WebSite
        </a>
        <a
          href="https://github.com/harryheman/Modern-HTML-Starter-Template"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </nav>
      <time></time>
    </header>

    <main></main>

    <footer>
      <p>
        &copy; 2020.
        <a href="https://github.com/harryheman" target="_blank" rel="noopener">
          Igor Agapov
        </a>
      </p>
      <p>Licensed under MIT</p>
    </footer>

    <script src="./public/js/script.js" type="module"></script>
    <script src="./sw-register.js"></script>
  </body>
</html>
`
