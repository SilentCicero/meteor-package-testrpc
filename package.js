/* jshint ignore:start */
Package.describe({
    name: 'silentcicero:testrpc',
    version: '1.0.0-1',
    summary: 'Fast Ethereum RPC client for testing and development wrapped for Meteor =D.',
    git: 'https://github.com/SilentCicero/meteor-package-testrpc',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.2');
    
    Npm.depends({
      'ethereumjs-testrpc': '1.0.0',
    });
    
    api.export(['TestRPC']);
    api.addFiles('package-init.js', 'client');
    api.addFiles('package-init.js', 'server');
});

Package.onTest(function (api) {
  api.addFiles(['package-init.js'], 'server');
  api.addFiles(['package-init.js'], 'client');
});
