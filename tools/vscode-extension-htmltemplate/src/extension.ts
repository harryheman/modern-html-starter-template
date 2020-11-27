import * as vscode from 'vscode'

const fs = require('fs-extra')
const path = require('path')

import indexHTML from './components/index.html.js'

import styleCSS from './components/css/style.css.js'
import footerCSS from './components/css/modules/footer.css.js'
import headerCSS from './components/css/modules/header.css.js'
import loaderCSS from './components/css/modules/loader.css.js'
import mainCSS from './components/css/modules/main.css.js'

import scriptJS from './components/script.js'
import serverJS from './components/server.js'
import serviceWorkerJS from './components/service-worker.js'
import createTimerJS from './components/js/modules/create-timer.js'
import loaderJS from './components/js/modules/loader.js'
import assetsJS from './components/js/src/assets.js'

import errorHTML from './components/404.html.js'
import browserconfigXML from './components/browserconfig.xml.js'
import gitignore from './components/gitignore.js'
import license from './components/LICENSE.js'
import manifestJSON from './components/manifest.json.js'
import packageJSON from './components/package.json.js'
import readmeMD from './components/README.md.js'
import robotsTXT from './components/robots.txt.js'
import sitemapXML from './components/sitemap.xml.js'
import snippetJSON from './components/snippet.json.js'
import yarnLock from './components/yarn.lock.js'

import icon64 from './components/icons/icon64.js'
import icon128 from './components/icons/icon128.js'
import icon150 from './components/icons/icon150.js'
import icon256 from './components/icons/icon256.js'
import icon512 from './components/icons/icon512.js'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "htmltemplate" is now active!')

  let disposable = vscode.commands.registerCommand(
    'htmltemplate.create',
    () => {
      const folder = (filename: string) =>
        path.join(vscode.workspace.rootPath, `html-template/${filename}`)

      const files: string[] = [
        indexHTML,
        styleCSS,
        footerCSS,
        headerCSS,
        loaderCSS,
        mainCSS,
        createTimerJS,
        loaderJS,
        assetsJS,
        gitignore,
        license,
        errorHTML,
        browserconfigXML,
        manifestJSON,
        packageJSON,
        readmeMD,
        robotsTXT,
        scriptJS,
        serverJS,
        serviceWorkerJS,
        sitemapXML,
        snippetJSON,
        yarnLock,
        icon64,
        icon128,
        icon150,
        icon256,
        icon512,
      ]

      const fileNames: string[] = [
        'index.html',
        'css/style.css',
        'css/modules/footer.css',
        'css/modules/header.css',
        'css/modules/loader.css',
        'css/modules/main.css',
        'js/modules/create-timer.js',
        'js/modules/loader.js',
        'js/src/assets.js',
        '.gitignore',
        'LICENSE',
        '404.html',
        'browserconfig.xml',
        'manifest.json',
        'package.json',
        'README.md',
        'robots.txt',
        'script.js',
        'server.js',
        'service-worker.js',
        'sitemap.xml',
        'vscode-html-snippet.json',
        'yarn.lock',
        'icons/64x64.png',
        'icons/128x128.png',
        'icons/150x150.png',
        'icons/256x256.png',
        'icons/512x512.png',
      ]

      ;(async () => {
        try {
          for (let i = 0; i < files.length; i++) {
            if (fileNames[i].includes('png')) {
              await fs.outputFile(folder(fileNames[i]), files[i], 'base64')
            } else {
              await fs.outputFile(folder(fileNames[i]), files[i])
            }
          }

          return vscode.window.showInformationMessage(
            'All files created successfully'
          )
        } catch {
          return vscode.window.showErrorMessage('Failed to create files')
        }
      })()
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
