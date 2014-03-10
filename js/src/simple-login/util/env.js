goog.provide('fb.simplelogin.util.env');

/**
 * Determines if LocalStorage is enabled and working in the current environment.
 * @return {boolean} Whether or not LocalStorage is available.
 */
 fb.simplelogin.util.env.hasLocalStorage = function(str) {
  try {
    if (localStorage) {
      localStorage.setItem('firebase-sentinel', 'test');
      var result = localStorage.getItem('firebase-sentinel');
      localStorage.removeItem('firebase-sentinel');
      return result === 'test';
    }
  } catch(e) {}
  return false;
};

/**
 * Determines if SessionStorage is enabled and working in the current environment.
 * @return {boolean} Whether or not SessionStorage is available.
 */
 fb.simplelogin.util.env.hasSessionStorage = function(str) {
  try {
    if (sessionStorage) {
      sessionStorage.setItem('firebase-sentinel', 'test');
      var result = sessionStorage.getItem('firebase-sentinel');
      sessionStorage.removeItem('firebase-sentinel');
      return result === 'test';
    }
  } catch(e) {}
  return false;
};

/**
 * @return {boolean} isMobileCordovaInAppBrowser
 */
fb.simplelogin.util.env.isMobileCordovaInAppBrowser = function() {
  return (window['cordova'] || window['CordovaInAppBrowser'] || window['phonegap'])
    && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
};

/**
 * @return {boolean} isMobileTriggerIoTab
 */
fb.simplelogin.util.env.isMobileTriggerIoTab = function() {
  return (window['forge'])
    && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
};

/**
 * @return {boolean} isWindowsMetro
 */
fb.simplelogin.util.env.isWindowsMetro = function() {
  return !!window['Windows']
    && /^ms-appx:/.test(location.href);
};

/**
 * @return {boolean} isChromeiOS
 */
fb.simplelogin.util.env.isChromeiOS = function() {
  return !!navigator.userAgent.match(/CriOS/);
};

/**
 * @return {boolean} isTwitteriOS
 */
fb.simplelogin.util.env.isTwitteriOS = function() {
  return !!navigator.userAgent.match(/Twitter for iPhone/);
};

/**
 * @return {boolean} isFacebookiOS
 */
fb.simplelogin.util.env.isFacebookiOS = function() {
  return !!navigator.userAgent.match(/FBAN\/FBIOS/);
};

/**
 * @return {boolean} isWindowsPhone
 */
fb.simplelogin.util.env.isWindowsPhone = function() {
  return !!navigator.userAgent.match(/Windows Phone/);
};

/**
 * @return {boolean} isStandaloneiOS
 */
fb.simplelogin.util.env.isStandaloneiOS = function() {
  return !!window.navigator.standalone;
};

/**
 * @return {boolean} isPhantomJS
 */
fb.simplelogin.util.env.isPhantomJS = function() {
  return !!navigator.userAgent.match(/PhantomJS/);
};
