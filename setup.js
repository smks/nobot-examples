const fs = require('fs-extra');
const path = require('path');
require('colors');

const configFiles = [
  path.join('examples', '011', 'config.example.json'),
  path.join('examples', '012', 'config.example.json'),
  path.join('examples', '013', './.reminders.example'),
  path.join('examples', '016', 'config.example.json'),
  path.join('examples', '018', 'config.example.json'),
  path.join('examples', '015', 'config.example.json'),
];

configFiles.forEach(configFileExample => {
  const newConfig = configFileExample.replace('.example', '');
  if (fs.existsSync(newConfig)) {
    return;
  }
  return fs.copy(configFileExample, newConfig)
    .then(() => console.log(`Successfully created ${newConfig}`.green))
    .catch(console.error);
});
