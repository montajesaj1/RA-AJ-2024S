"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([[812],{

/***/ 37796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

// EXTERNAL MODULE: consume shared module (default) @jupyterlab/coreutils@~6.2.1 (singleton) (fallback: ./node_modules/@jupyterlab/coreutils/lib/index.js)
var index_js_ = __webpack_require__(68453);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/application-extension/style/index.js + 1 modules
var style = __webpack_require__(95171);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/apputils-extension/style/index.js + 1 modules
var apputils_extension_style = __webpack_require__(48435);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/cell-toolbar-extension/style/index.js + 2 modules
var cell_toolbar_extension_style = __webpack_require__(69858);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/celltags-extension/style/index.js + 1 modules
var celltags_extension_style = __webpack_require__(48641);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/codemirror-extension/style/index.js
var codemirror_extension_style = __webpack_require__(64331);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/completer-extension/style/index.js
var completer_extension_style = __webpack_require__(55834);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/console-extension/style/index.js
var console_extension_style = __webpack_require__(28180);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/csvviewer-extension/style/index.js + 2 modules
var csvviewer_extension_style = __webpack_require__(2542);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/debugger-extension/style/index.js + 2 modules
var debugger_extension_style = __webpack_require__(7920);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/docmanager-extension/style/index.js
var docmanager_extension_style = __webpack_require__(38710);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/documentsearch-extension/style/index.js
var documentsearch_extension_style = __webpack_require__(81554);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/extensionmanager-extension/style/index.js + 2 modules
var extensionmanager_extension_style = __webpack_require__(67014);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/filebrowser-extension/style/index.js + 1 modules
var filebrowser_extension_style = __webpack_require__(77552);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/fileeditor-extension/style/index.js
var fileeditor_extension_style = __webpack_require__(71821);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/help-extension/style/index.js + 1 modules
var help_extension_style = __webpack_require__(13313);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/htmlviewer-extension/style/index.js + 2 modules
var htmlviewer_extension_style = __webpack_require__(23454);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/hub-extension/style/index.js
var hub_extension_style = __webpack_require__(34802);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/imageviewer-extension/style/index.js + 2 modules
var imageviewer_extension_style = __webpack_require__(42584);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/inspector-extension/style/index.js
var inspector_extension_style = __webpack_require__(54244);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/javascript-extension/style/index.js + 1 modules
var javascript_extension_style = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/json-extension/style/index.js + 1 modules
var json_extension_style = __webpack_require__(64897);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/launcher-extension/style/index.js + 1 modules
var launcher_extension_style = __webpack_require__(94679);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/logconsole-extension/style/index.js + 1 modules
var logconsole_extension_style = __webpack_require__(92121);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/lsp-extension/style/index.js + 1 modules
var lsp_extension_style = __webpack_require__(83417);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/mainmenu-extension/style/index.js
var mainmenu_extension_style = __webpack_require__(83344);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/markdownviewer-extension/style/index.js + 2 modules
var markdownviewer_extension_style = __webpack_require__(52109);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/markedparser-extension/style/index.js + 1 modules
var markedparser_extension_style = __webpack_require__(32805);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/mathjax-extension/style/index.js + 1 modules
var mathjax_extension_style = __webpack_require__(63008);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/mermaid-extension/style/index.js + 1 modules
var mermaid_extension_style = __webpack_require__(32747);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/metadataform-extension/style/index.js
var metadataform_extension_style = __webpack_require__(39721);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/notebook-extension/style/index.js
var notebook_extension_style = __webpack_require__(55337);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/pdf-extension/style/index.js + 1 modules
var pdf_extension_style = __webpack_require__(32977);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/pluginmanager-extension/style/index.js
var pluginmanager_extension_style = __webpack_require__(78624);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/rendermime-extension/style/index.js
var rendermime_extension_style = __webpack_require__(95528);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/running-extension/style/index.js
var running_extension_style = __webpack_require__(3268);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/settingeditor-extension/style/index.js + 2 modules
var settingeditor_extension_style = __webpack_require__(99204);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/shortcuts-extension/style/index.js + 1 modules
var shortcuts_extension_style = __webpack_require__(38970);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/statusbar-extension/style/index.js
var statusbar_extension_style = __webpack_require__(50168);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/terminal-extension/style/index.js + 2 modules
var terminal_extension_style = __webpack_require__(52714);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/toc-extension/style/index.js + 1 modules
var toc_extension_style = __webpack_require__(4002);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/tooltip-extension/style/index.js + 2 modules
var tooltip_extension_style = __webpack_require__(57385);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/translation-extension/style/index.js
var translation_extension_style = __webpack_require__(65540);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/ui-components-extension/style/index.js
var ui_components_extension_style = __webpack_require__(1733);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/vega5-extension/style/index.js + 1 modules
var vega5_extension_style = __webpack_require__(30124);
// EXTERNAL MODULE: ./node_modules/@jupyterlab/workspaces-extension/style/index.js
var workspaces_extension_style = __webpack_require__(78815);
;// CONCATENATED MODULE: ./build/style.js
/* This is a generated file of CSS imports */
/* It was generated by @jupyterlab/builder in Build.ensureAssets() */















































;// CONCATENATED MODULE: ./build/index.out.js
// This file is auto-generated from the corresponding file in /dev_mode
/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */





async function createModule(scope, module) {
  try {
    const factory = await window._JUPYTERLAB[scope].get(module);
    const instance = factory();
    instance.__scope__ = scope;
    return instance;
  } catch(e) {
    console.warn(`Failed to create module: package: ${scope}; module: ${module}`);
    throw e;
  }
}

/**
 * The main entry point for the application.
 */
async function main() {

   // Handle a browser test.
   // Set up error handling prior to loading extensions.
   var browserTest = index_js_.PageConfig.getOption('browserTest');
   if (browserTest.toLowerCase() === 'true') {
     var el = document.createElement('div');
     el.id = 'browserTest';
     document.body.appendChild(el);
     el.textContent = '[]';
     el.style.display = 'none';
     var errors = [];
     var reported = false;
     var timeout = 25000;

     var report = function() {
       if (reported) {
         return;
       }
       reported = true;
       el.className = 'completed';
     }

     window.onerror = function(msg, url, line, col, error) {
       errors.push(String(error));
       el.textContent = JSON.stringify(errors)
     };
     console.error = function(message) {
       errors.push(String(message));
       el.textContent = JSON.stringify(errors)
     };
  }

  var JupyterLab = (__webpack_require__(61564).JupyterLab);
  var disabled = [];
  var deferred = [];
  var ignorePlugins = [];
  var register = [];


  const federatedExtensionPromises = [];
  const federatedMimeExtensionPromises = [];
  const federatedStylePromises = [];

  // Start initializing the federated extensions
  const extensions = JSON.parse(
    index_js_.PageConfig.getOption('federated_extensions')
  );

  const queuedFederated = [];

  extensions.forEach(data => {
    if (data.extension) {
      queuedFederated.push(data.name);
      federatedExtensionPromises.push(createModule(data.name, data.extension));
    }
    if (data.mimeExtension) {
      queuedFederated.push(data.name);
      federatedMimeExtensionPromises.push(createModule(data.name, data.mimeExtension));
    }

    if (data.style && !index_js_.PageConfig.Extension.isDisabled(data.name)) {
      federatedStylePromises.push(createModule(data.name, data.style));
    }
  });

  const allPlugins = [];

  /**
   * Iterate over active plugins in an extension.
   *
   * #### Notes
   * This also populates the disabled, deferred, and ignored arrays.
   */
  function* activePlugins(extension) {
    // Handle commonjs or es2015 modules
    let exports;
    if (extension.hasOwnProperty('__esModule')) {
      exports = extension.default;
    } else {
      // CommonJS exports.
      exports = extension;
    }

    let plugins = Array.isArray(exports) ? exports : [exports];
    for (let plugin of plugins) {
      const isDisabled = index_js_.PageConfig.Extension.isDisabled(plugin.id);
      allPlugins.push({
        id: plugin.id,
        description: plugin.description,
        requires: plugin.requires ?? [],
        optional: plugin.optional ?? [],
        provides: plugin.provides ?? null,
        autoStart: plugin.autoStart,
        enabled: !isDisabled,
        extension: extension.__scope__
      });
      if (isDisabled) {
        disabled.push(plugin.id);
        continue;
      }
      if (index_js_.PageConfig.Extension.isDeferred(plugin.id)) {
        deferred.push(plugin.id);
        ignorePlugins.push(plugin.id);
      }
      yield plugin;
    }
  }

  // Handle the registered mime extensions.
  const mimeExtensions = [];
  if (!queuedFederated.includes('@jupyterlab/javascript-extension')) {
    try {
      let ext = __webpack_require__(36381);
      ext.__scope__ = '@jupyterlab/javascript-extension';
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/json-extension')) {
    try {
      let ext = __webpack_require__(48486);
      ext.__scope__ = '@jupyterlab/json-extension';
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/mermaid-extension')) {
    try {
      let ext = __webpack_require__(89861);
      ext.__scope__ = '@jupyterlab/mermaid-extension';
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/pdf-extension')) {
    try {
      let ext = __webpack_require__(26125);
      ext.__scope__ = '@jupyterlab/pdf-extension';
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/vega5-extension')) {
    try {
      let ext = __webpack_require__(54322);
      ext.__scope__ = '@jupyterlab/vega5-extension';
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Add the federated mime extensions.
  const federatedMimeExtensions = await Promise.allSettled(federatedMimeExtensionPromises);
  federatedMimeExtensions.forEach(p => {
    if (p.status === "fulfilled") {
      for (let plugin of activePlugins(p.value)) {
        mimeExtensions.push(plugin);
      }
    } else {
      console.error(p.reason);
    }
  });

  // Handled the registered standard extensions.
  if (!queuedFederated.includes('@jupyterlab/application-extension')) {
    try {
      let ext = __webpack_require__(98061);
      ext.__scope__ = '@jupyterlab/application-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/apputils-extension')) {
    try {
      let ext = __webpack_require__(26380);
      ext.__scope__ = '@jupyterlab/apputils-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/cell-toolbar-extension')) {
    try {
      let ext = __webpack_require__(8879);
      ext.__scope__ = '@jupyterlab/cell-toolbar-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/celltags-extension')) {
    try {
      let ext = __webpack_require__(53015);
      ext.__scope__ = '@jupyterlab/celltags-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/codemirror-extension')) {
    try {
      let ext = __webpack_require__(1250);
      ext.__scope__ = '@jupyterlab/codemirror-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/completer-extension')) {
    try {
      let ext = __webpack_require__(55874);
      ext.__scope__ = '@jupyterlab/completer-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/console-extension')) {
    try {
      let ext = __webpack_require__(11442);
      ext.__scope__ = '@jupyterlab/console-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/csvviewer-extension')) {
    try {
      let ext = __webpack_require__(31639);
      ext.__scope__ = '@jupyterlab/csvviewer-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/debugger-extension')) {
    try {
      let ext = __webpack_require__(36375);
      ext.__scope__ = '@jupyterlab/debugger-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/docmanager-extension')) {
    try {
      let ext = __webpack_require__(49046);
      ext.__scope__ = '@jupyterlab/docmanager-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/documentsearch-extension')) {
    try {
      let ext = __webpack_require__(1988);
      ext.__scope__ = '@jupyterlab/documentsearch-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/extensionmanager-extension')) {
    try {
      let ext = __webpack_require__(18891);
      ext.__scope__ = '@jupyterlab/extensionmanager-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/filebrowser-extension')) {
    try {
      let ext = __webpack_require__(3769);
      ext.__scope__ = '@jupyterlab/filebrowser-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/fileeditor-extension')) {
    try {
      let ext = __webpack_require__(23386);
      ext.__scope__ = '@jupyterlab/fileeditor-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/help-extension')) {
    try {
      let ext = __webpack_require__(56418);
      ext.__scope__ = '@jupyterlab/help-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/htmlviewer-extension')) {
    try {
      let ext = __webpack_require__(62704);
      ext.__scope__ = '@jupyterlab/htmlviewer-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/hub-extension')) {
    try {
      let ext = __webpack_require__(33501);
      ext.__scope__ = '@jupyterlab/hub-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/imageviewer-extension')) {
    try {
      let ext = __webpack_require__(29403);
      ext.__scope__ = '@jupyterlab/imageviewer-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/inspector-extension')) {
    try {
      let ext = __webpack_require__(79921);
      ext.__scope__ = '@jupyterlab/inspector-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/launcher-extension')) {
    try {
      let ext = __webpack_require__(94865);
      ext.__scope__ = '@jupyterlab/launcher-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/logconsole-extension')) {
    try {
      let ext = __webpack_require__(80924);
      ext.__scope__ = '@jupyterlab/logconsole-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/lsp-extension')) {
    try {
      let ext = __webpack_require__(67461);
      ext.__scope__ = '@jupyterlab/lsp-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/mainmenu-extension')) {
    try {
      let ext = __webpack_require__(52210);
      ext.__scope__ = '@jupyterlab/mainmenu-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/markdownviewer-extension')) {
    try {
      let ext = __webpack_require__(49356);
      ext.__scope__ = '@jupyterlab/markdownviewer-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/markedparser-extension')) {
    try {
      let ext = __webpack_require__(95161);
      ext.__scope__ = '@jupyterlab/markedparser-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/mathjax-extension')) {
    try {
      let ext = __webpack_require__(98337);
      ext.__scope__ = '@jupyterlab/mathjax-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/mermaid-extension')) {
    try {
      let ext = __webpack_require__(20285);
      ext.__scope__ = '@jupyterlab/mermaid-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/metadataform-extension')) {
    try {
      let ext = __webpack_require__(92953);
      ext.__scope__ = '@jupyterlab/metadataform-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/notebook-extension')) {
    try {
      let ext = __webpack_require__(91680);
      ext.__scope__ = '@jupyterlab/notebook-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/pluginmanager-extension')) {
    try {
      let ext = __webpack_require__(84638);
      ext.__scope__ = '@jupyterlab/pluginmanager-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/rendermime-extension')) {
    try {
      let ext = __webpack_require__(16422);
      ext.__scope__ = '@jupyterlab/rendermime-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/running-extension')) {
    try {
      let ext = __webpack_require__(18170);
      ext.__scope__ = '@jupyterlab/running-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/settingeditor-extension')) {
    try {
      let ext = __webpack_require__(48551);
      ext.__scope__ = '@jupyterlab/settingeditor-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/shortcuts-extension')) {
    try {
      let ext = __webpack_require__(11471);
      ext.__scope__ = '@jupyterlab/shortcuts-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/statusbar-extension')) {
    try {
      let ext = __webpack_require__(90463);
      ext.__scope__ = '@jupyterlab/statusbar-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/terminal-extension')) {
    try {
      let ext = __webpack_require__(25846);
      ext.__scope__ = '@jupyterlab/terminal-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/theme-dark-extension')) {
    try {
      let ext = __webpack_require__(71648);
      ext.__scope__ = '@jupyterlab/theme-dark-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/theme-dark-high-contrast-extension')) {
    try {
      let ext = __webpack_require__(26006);
      ext.__scope__ = '@jupyterlab/theme-dark-high-contrast-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/theme-light-extension')) {
    try {
      let ext = __webpack_require__(2853);
      ext.__scope__ = '@jupyterlab/theme-light-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/toc-extension')) {
    try {
      let ext = __webpack_require__(11276);
      ext.__scope__ = '@jupyterlab/toc-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/tooltip-extension')) {
    try {
      let ext = __webpack_require__(45230);
      ext.__scope__ = '@jupyterlab/tooltip-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/translation-extension')) {
    try {
      let ext = __webpack_require__(44239);
      ext.__scope__ = '@jupyterlab/translation-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/ui-components-extension')) {
    try {
      let ext = __webpack_require__(45497);
      ext.__scope__ = '@jupyterlab/ui-components-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/workspaces-extension')) {
    try {
      let ext = __webpack_require__(96962);
      ext.__scope__ = '@jupyterlab/workspaces-extension';
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Add the federated extensions.
  const federatedExtensions = await Promise.allSettled(federatedExtensionPromises);
  federatedExtensions.forEach(p => {
    if (p.status === "fulfilled") {
      for (let plugin of activePlugins(p.value)) {
        register.push(plugin);
      }
    } else {
      console.error(p.reason);
    }
  });

  // Load all federated component styles and log errors for any that do not
  (await Promise.allSettled(federatedStylePromises)).filter(({status}) => status === "rejected").forEach(({reason}) => {
    console.error(reason);
  });

  const lab = new JupyterLab({
    mimeExtensions,
    disabled: {
      matches: disabled,
      patterns: index_js_.PageConfig.Extension.disabled.map(function (val) { return val.raw; })
    },
    deferred: {
      matches: deferred,
      patterns: index_js_.PageConfig.Extension.deferred.map(function (val) { return val.raw; })
    },
    availablePlugins: allPlugins
  });
  register.forEach(function(item) { lab.registerPluginModule(item); });

  lab.start({ ignorePlugins, bubblingKeydown: true });

  // Expose global app instance when in dev mode or when toggled explicitly.
  var exposeAppInBrowser = (index_js_.PageConfig.getOption('exposeAppInBrowser') || '').toLowerCase() === 'true';
  var devMode = (index_js_.PageConfig.getOption('devMode') || '').toLowerCase() === 'true';

  if (exposeAppInBrowser || devMode) {
    window.jupyterapp = lab;
  }

  // Handle a browser test.
  if (browserTest.toLowerCase() === 'true') {
    lab.restored
      .then(function() { report(errors); })
      .catch(function(reason) { report([`RestoreError: ${reason.message}`]); });

    // Handle failures to restore after the timeout has elapsed.
    window.setTimeout(function() { report(errors); }, timeout);
  }

}


/***/ }),

/***/ 7413:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII=";

/***/ })

}]);
//# sourceMappingURL=812.c9a4480d01b9c8cf1122.js.map?v=c9a4480d01b9c8cf1122