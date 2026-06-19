const Settings = require('./settings');
const { Window, App } = require('skia-canvas');
const { uIOhook, UiohookKey } = require('uiohook-napi');
const fs = require('fs');
if (!fs.existsSync('./settings.json')) fs.writeFileSync('./settings.json', 'null');
const settings = JSON.parse(fs.readFileSync('./settings.json', 'utf8')) || {
    border: 10,
    width: Settings.width,
    height: Settings.height,
    left: 0,
    top: 0,
    background: 'black'
};

const record = [];
App.eventLoop = 'node';
uIOhook.start();
let holding = null;
let x = 0, y = 0;
let cx = 0, cy = 0;
const border = settings.border;

const win = new Window(settings);
win.borderless = true;
win.resizable = true;
const set = new Settings(win.canvas.getContext('2d'), win);
uIOhook.on('keydown', e => set.key[e.keycode] = true);
uIOhook.on('keyup', e => set.key[e.keycode] = Date.now());
uIOhook.on('mousedown', e => {
    ({x,y} = e);
    win.right = win.left + win.width;
    win.bottom = win.top + win.height;

    set.key['Mouse' + e.button] = true;
})
uIOhook.on('mouseup', e => set.key['Mouse' + e.button] = Date.now())
uIOhook.on('mousemove', e => ({x,y} = e));
win.on('mousedown', e => {
    ({x: cx, y: cy} = e);
    const left = e.x < border;
    const right = e.x > (win.width - border);
    const top = e.y < border;
    const bottom = e.y > (win.height - border);
    // not used, since you cant have uneven dimensions
    // if (left) win.cursor = 'w-resize';
    // if (right) win.cursor = 'e-resize';
    // if (top) win.cursor = 'n-resize';
    // if (bottom) win.cursor = 's-resize';
    // if (top && left) holding = 'nw-resize';
    // if (top && right) holding = 'ne-resize';
    // if (bottom && left) holding = 'sw-resize';
    if (bottom && right) holding = 'se-resize';
    if (!holding?.endsWith?.('resize')) holding = 'move';
});
win.on('mouseup', () => holding = null);
win.on('mousemove', e => {
    const left = e.x < border;
    const right = e.x > (win.width - border);
    const top = e.y < border;
    const bottom = e.y > (win.height - border);
    win.cursor = 'default';
    // not used, since you cant have uneven dimensions
    // if (left) win.cursor = 'w-resize';
    // if (right) win.cursor = 'e-resize';
    // if (top) win.cursor = 'n-resize';
    // if (bottom) win.cursor = 's-resize';
    // if (top && left) win.cursor = 'nw-resize';
    // if (top && right) win.cursor = 'ne-resize';
    // if (bottom && left) win.cursor = 'sw-resize';
    if (bottom && right) win.cursor = 'se-resize';
    if (!holding) return;
    win.cursor = holding;
    switch (holding) {
    // case 'nw-resize':
    //     win.width = x - win.right;
    //     win.height = y - win.bottom;
    //     win.left = x;
    //     win.top = y;
    //     break;
    // case 'ne-resize':
    //     win.width = x - win.left;
    //     win.height = y - win.bottom;
    //     win.top = y;
    //     break;
    // case 'sw-resize':
    //     win.width = x - win.right;
    //     win.height = y - win.top;
    //     win.left = x;
    //     break;
    case 'se-resize':
        win.width = x - win.left;
        win.height = y - win.top;
        if (win.height < border * 3) win.height = border * 3;
        const width = win.width / Settings.width;
        const height = win.height / Settings.height;
        if (width > height)
            win.width = Settings.width * height;
        if (height > width)
            win.height = Settings.height * width;
        break;
    case 'move':
        win.left = x - cx;
        win.top = y - cy;
        break;
    }
});
win.on('close', () => {
    settings.left = win.left;
    settings.top = win.top;
    settings.width = win.width;
    settings.height = win.height;
    fs.writeFileSync('./settings.json', JSON.stringify(settings));
    process.exit();
});


setInterval(() => {
    win.canvas.width = win.width;
    win.canvas.height = win.height;
    set.draw();
}, 1000 / 60);