const createMsi = require('msi-packager');

const options = {
  // required
  source: '../run/localclient',
  output: `SacredHavenInstaller.msi`,
  name: 'Sacred Haven Meridian59',
  upgradeCode: 'sacredhaven-guid-here',
  version: 1.1,
  manufacturer: 'SacredHaven',
  iconPath: 'SacredHavenIcon.ico',
  executable: 'meridian.exe',

  // optional
  description: "Meridian 59",
  arch: 'x86',
  localInstall: true
};

createMsi(options, function (err) {
  if (err) {
    console.error(err);
  }
  // const command = `wrangler r2 object put foodstorageplanner/FSPwin32-${ packageData.version }.msi --file=dist/electron/FSPwin32-${ packageData.version }.msi`;
});
