const { Assets } = require("./assets.js");
const WebGLRenderer = require('./renderer/src/index.js');
const path = require('node:path');
const Settings = require('../../settings.js');
const TextLayer = require('./text-layer.js');
const { handleKeys } = require('./key-actions.js');

// find a somewhere to expect our none-code files to exist in
const hostDir = process.env.HOST || path.resolve('.');

class MainGame {
    static layers = { text: TextLayer.layer };

    assets = new Assets(path.resolve(hostDir, 'assets'));
    /** @type {import('glfw-raub').Window} */
    window = null;
    /** @type {import('webgl-raub')} */
    canvas = null;
    /** @type {WebGLRenderer} */
    render = null;
    /** @type {Settings} */
    settings = null;
    /** @type {TextLayer} */
    text = null;

    constructor(window, canvas) {
        this.window = window;
        this.canvas = canvas;
    }
    _initRenderer() {
        this.render = new WebGLRenderer(this.canvas, -this.window.width / 2, this.window.width / 2, this.window.height / 2, -this.window.height / 2);
        this.render.renderOffscreen = true;
        this.render.setBackgroundColor(0,0,0,0);
        this.render.setLayerGroupOrdering(Object.values(MainGame.layers));

        this.window.on('resize', () => {
            this.render.setStageSize(
                -this.window.width / 2,
                this.window.width / 2,
                -this.window.height / 2,
                this.window.height / 2
            );
            this.text.resizeViewport(this.window.width, this.window.height);
            this.settings.draw();
        });
    }
    async loadAssets() {
        await Promise.all([
            this.assets.registerAsset('sprite-vert', 'shaders/sprite.vert.glsl'),
            this.assets.registerAsset('sprite-frag', 'shaders/sprite.frag.glsl'),

            ...(new Array(256).fill(0)
                .map((_,i) => this.assets.registerAsset(`char-${i}`, `tiles/text/tile${i.toString().padStart(3, '0')}.png`))),
        ]);
    }
    start() {
        this.text = new TextLayer(this.window, this.render);
        this.text.loadAssets(this.assets);
        this.settings = new Settings(this.text, window);
        this.window.loop(this.drawFrame.bind(this));
    }
    drawFrame() {
        // draw frame
        this.render.draw();
        handleKeys(this.window);
    }
}

module.exports = MainGame;