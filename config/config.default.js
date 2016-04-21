var path = require('path');
module.exports = {
  "openDevTools": false,
  "board":{
    "size": {'x': 30, 'y': 25}
  },
  "updateInterval": 400,
  "window": { // This is just the option object for electron
    "width": 800,
    "height": 600
  },
  "boardTemplates": path.resolve(__dirname, '../starterBoards')
};