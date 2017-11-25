const fs = require('fs-extra');
const path = require('path');
require('colors');

const configFiles = [
  path.join('examples', '016', 'config.example.json'),
  path.join('examples', '018', 'config.example.json'),
  path.join('examples', '015', 'config.example.json'),
];

configFiles.map((configFileExample) => {
  const newConfig = configFileExample.replace('.example', '');
  return fs.copy(configFileExample, newConfig)
    .then(() => console.log(`Successfully created ${newConfig}`.green))
    .catch(err => console.error(err));
});
