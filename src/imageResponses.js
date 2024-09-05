// Requires
const fs = require('fs');

// Constant Page Locations
const index = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Method for Index html
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(index);
  response.end();
};

// Export
module.exports.getImage = getImage;
