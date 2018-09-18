const bowser = require('bowser');

const customOutput = true;
const docHead = document.querySelector('html');
const version = bowser.version
  .toLowerCase()
  .replace(' ', '-')
  .split('.', 1)[0];
const name = bowser.name.toLowerCase().replace(' ', '-');

if (customOutput) {
  // Use the switch condition if you want to customize the output
  switch (bowser.name) {
    case 'Microsoft Edge':
      docHead.classList.add('edge', 'edge-' + version);
      break;

    case 'Internet Explorer':
      docHead.classList.add('ie');
      docHead.classList.add('ie-' + version);
      break;

    case 'Firefox':
      docHead.classList.add('firefox', 'firefox-' + version);
      break;

    case 'Safari':
      docHead.classList.add('safari', 'safari-' + version);
      break;

    case 'Chrome':
      docHead.classList.add('chrome', 'chrome-' + version);
      break;

    case 'Opera':
      docHead.classList.add('opera', 'opera-' + version);
      break;
  }
} else {
  // Generate Classes based on Browser and BrowserVersion
  docHead.classList.add(name, name + '-' + version);
}
