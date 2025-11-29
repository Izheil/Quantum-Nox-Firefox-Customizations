// skip 1st line
lockPref('xpinstall.signatures.required', false);
lockPref('extensions.install_origins.enabled', false);

try {
  const cmanifest = Services.dirsvc.get('UChrm', Ci.nsIFile);
  cmanifest.append('utils');
  cmanifest.append('chrome.manifest');
  Components.manager.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);
} catch (e) {
  Components.utils.reportError(e);
}

try {
  Services.scriptloader.loadSubScript('chrome://userchromejs/content/userChrome.js');
} catch(e) {
	Components.utils.reportError(e);
}
