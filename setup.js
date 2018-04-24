const fse = require('fs-extra');
const path = require('path');
require('colors');

const configFiles = [
  path.join('examples', '011', 'config.example.json'),
  path.join('examples', '012', 'config.example.json'),
  path.join('examples', '013', '.reminders.example.json'),
  path.join('examples', '016', 'config.example.json'),
  path.join('examples', '018', 'config.example.json'),
  path.join('examples', '015', 'config.example.json'),
];

configFiles.map((configFileExample) => {
  const newConfig = configFileExample.replace('.example', '');
  if (fse.existsSync(newConfig)) {
    return;
  }
  return fse.copy(configFileExample, newConfig)
    .then(() => console.log(`Successfully created ${newConfig}`.green))
    .catch(err => console.error(err));
});
