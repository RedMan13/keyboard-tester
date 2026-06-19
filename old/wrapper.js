const { ImageData } = require('canvas');
const Image = require('image-raub');
global.window = {};
global.window.ImageData = ImageData;
global.self = global;
global.ImageData = ImageData;
const { init: initFrame } = require("3d-core-raub");

const { window, canvas } = initFrame({
    isWebGL2: true,
    isGles3: true,
    title: 'Rag Nag',
    msaa: 3
});
const icon = new Image('./icon.png');
icon.onload = () => window.icon = icon;
window.ImageData = ImageData;
/** @type {import('./src/index.js')} */
const MainGame = require('./src/index.js');
const game = new MainGame(window, canvas);
global.assets = game.assets;
game._initRenderer();
game.loadAssets()
    .then(() => {
        game.start();
    });