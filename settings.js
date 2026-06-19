const { UiohookKey } = require('uiohook-napi');
const keySwitches = [
    [ // row one
        0,0,
        [[.10,0, 1,.75, 'ESC', UiohookKey['Escape']],
        [1.25,0, 1,.75, 'F1', UiohookKey['F1']],
        [2.25,0, 1,.75, 'F2', UiohookKey['F2']],
        [3.25,0, 1,.75, 'F3', UiohookKey['F3']],
        [4.25,0, 1,.75, 'F4', UiohookKey['F4']],
        [5.75,0, 1,.75, 'F5', UiohookKey['F5']],
        [6.75,0, 1,.75, 'F6', UiohookKey['F6']],
        [7.75,0, 1,.75, 'F7', UiohookKey['F7']],
        [8.75,0, 1,.75, 'F8', UiohookKey['F8']],
        [10.25,0, 1,.75, 'F9', UiohookKey['F9']],
        [11.25,0, 1,.75, 'F10', UiohookKey['F10']],
        [12.25,0, 1,.75, 'F11', UiohookKey['F11']],
        [13.25,0, 1,.75, 'F12', UiohookKey['F12']]],
    ],
    [ // row two
        3,1,
        [[.60,.75, 1,.75, 'F13', UiohookKey['F13']],
        [1.75,.75, 1,.75, 'F14', UiohookKey['F14']],
        [2.75,.75, 1,.75, 'F15', UiohookKey['F15']],
        [3.75,.75, 1,.75, 'F16', UiohookKey['F16']],
        [4.75,.75, 1,.75, 'F17', UiohookKey['F17']],
        [6.375,.75, 1,.75, 'F18', UiohookKey['F18']],
        [7.375,.75, 1,.75, 'F19', UiohookKey['F19']],
        [8.375,.75, 1,.75, 'F20', UiohookKey['F20']],
        [9.375,.75, 1,.75, 'F21', UiohookKey['F21']],
        [11,.75, 1,.75, 'F22', UiohookKey['F22']],
        [12,.75, 1,.75, 'F23', UiohookKey['F23']],
        [13,.75, 1,.75, 'F24', UiohookKey['F24']],
        [14,.75, 1,.75, 'F25', UiohookKey['F25']],
        [17,.75, 1,.75, 'Pause', UiohookKey['Pause']],
        [15,.75, 1,.75, 'PrtScr', UiohookKey['PrintScreen']],
        [16,.75, 1,.75, 'Scroll', UiohookKey['ScrollLock']]]
    ],
    [ // row three
        6,2,
        [[0,2, 1,1, '~\n`', UiohookKey['Backquote']],
        [1,2, 1,1, '!\n1', UiohookKey['1']],
        [2,2, 1,1, '@\n2', UiohookKey['2']],
        [3,2, 1,1, '#\n3', UiohookKey['3']],
        [4,2, 1,1, '$\n4', UiohookKey['4']],
        [5,2, 1,1, '%\n5', UiohookKey['5']],
        [6,2, 1,1, '^\n6', UiohookKey['6']],
        [7,2, 1,1, '&\n7', UiohookKey['7']],
        [8,2, 1,1, '*\n8', UiohookKey['8']],
        [9,2, 1,1, '(\n9', UiohookKey['9']],
        [10,2, 1,1, ')\n0', UiohookKey['0']],
        [11,2, 1,1, '_\n-', UiohookKey['Minus']],
        [12,2, 1,1, '+\n=', UiohookKey['Equal']],
        [13,2, 2,1, '🠔 Back\nSpace', UiohookKey['Backspace']],
        [15.25,2, 1,1, 'Insert', UiohookKey['Insert']],
        [16.25,2, 1,1, 'Home', UiohookKey['Home']],
        [17.25,2, 1,1, 'Page\nUp', UiohookKey['PageUp']],
        [18.75,2, 1,1, 'Num\nLock', UiohookKey['NumLock']],
        [19.75,2, 1,1, '/', UiohookKey['NumpadDivide']],
        [20.75,2, 1,1, '*', UiohookKey['NumpadMultiply']],
        [21.75,2, 1,1, '-', UiohookKey['NumpadSubtract']]],
    ],
    [ // row four
        9,5,
        [[0,3, 1.5,1, 'Tab', UiohookKey['Tab']],
        [1.5,3, 1,1, 'Q', UiohookKey['Q']],
        [2.5,3, 1,1, 'W', UiohookKey['W']],
        [3.5,3, 1,1, 'E', UiohookKey['E']],
        [4.5,3, 1,1, 'R', UiohookKey['R']],
        [5.5,3, 1,1, 'T', UiohookKey['T']],
        [6.5,3, 1,1, 'Y', UiohookKey['Y']],
        [7.5,3, 1,1, 'U', UiohookKey['U']],
        [8.5,3, 1,1, 'I', UiohookKey['I']],
        [9.5,3, 1,1, 'O', UiohookKey['O']],
        [10.5,3, 1,1, 'P', UiohookKey['P']],
        [11.5,3, 1,1, '{\n[', UiohookKey['BracketRight']],
        [12.5,3, 1,1, '}\n]', UiohookKey['BracketLeft']],
        [13.5,3, 1.5,1, '|\n\\', UiohookKey['Backslash']],
        [16.5,3, 1,1, 'End', UiohookKey['End']],
        [15.5,3, 1,1, 'Delete', UiohookKey['Delete']],
        [17.5,3, 1,1, 'Page\nDown', UiohookKey['PageDown']],
        [19,3, 1,1, '7\nHome', UiohookKey['Numpad7']],
        [20,3, 1,1, '8\n🠕', UiohookKey['Numpad8']],
        [21,3, 1,1, '9\nPgUp', UiohookKey['Numpad9']],
        [22,3, 1,2, '+', UiohookKey['NumpadAdd']]],
    ],
    [ // row five
        6,8,
        [[0,4, 1.75,1, 'Caps Lock', UiohookKey['CapsLock']],
        [1.75,4, 1,1, 'A', UiohookKey['A']],
        [2.75,4, 1,1, 'S', UiohookKey['S']],
        [3.75,4, 1,1, 'D', UiohookKey['D']],
        [4.75,4, 1,1, 'F', UiohookKey['F']],
        [5.75,4, 1,1, 'G', UiohookKey['G']],
        [6.75,4, 1,1, 'H', UiohookKey['H']],
        [7.75,4, 1,1, 'J', UiohookKey['J']],
        [8.75,4, 1,1, 'K', UiohookKey['K']],
        [9.75,4, 1,1, 'L', UiohookKey['L']],
        [10.75,4, 1,1, ':\n;', UiohookKey['Semicolon']],
        [11.75,4, 1,1, '"\n\'', UiohookKey['Quote']],
        [12.75,4, 2.25,1, 'Enter ⤶', UiohookKey['Enter']],
        [19,4, 1,1, '4\n🠔', UiohookKey['Numpad4']],
        [20,4, 1,1, '5\n', UiohookKey['Numpad5']],
        [21,4, 1,1, '6\n➞', UiohookKey['Numpad6']]],
    ],
    [ // row six
        3,3,
        [[0,5, 2.5,1, 'Shift', UiohookKey['Shift']],
        [2.5,5, 1,1, 'Z', UiohookKey['Z']],
        [3.5,5, 1,1, 'X', UiohookKey['X']],
        [4.5,5, 1,1, 'C', UiohookKey['C']],
        [5.5,5, 1,1, 'V', UiohookKey['V']],
        [6.5,5, 1,1, 'B', UiohookKey['B']],
        [7.5,5, 1,1, 'N', UiohookKey['N']],
        [8.5,5, 1,1, 'M', UiohookKey['M']],
        [9.5,5, 1,1, '<\n,', UiohookKey['Comma']],
        [10.5,5, 1,1, '>\n.', UiohookKey['Period']],
        [11.5,5, 1,1, '?\n/', UiohookKey['Slash']],
        [12.5,5, 2.5,1, 'Shift', UiohookKey['ShiftRight']],
        [16.25,5, 1,1, '🠕', UiohookKey['ArrowUp']],
        [19.25,5, 1,1, '1\nEnd', UiohookKey['Numpad1']],
        [20.25,5, 1,1, '2\n🠗', UiohookKey['Numpad2']],
        [21.25,5, 1,1, '3\nPgDn', UiohookKey['Numpad3']],
        [22.25,5, 1,1, 'Enter', UiohookKey['NumpadEnter']]],
    ],
    [ // row seven
        0,0,
        [[0,6, 1.5,1, 'Ctrl', UiohookKey['Ctrl']],
        [1.5,6, 1.25,1, '🞑', UiohookKey['Meta']], // meta key, or windows key, or whatever mac calls it
        [2.75,6, 1.5,1, 'Alt', UiohookKey['Alt']],
        [4.25,6, 5.75,1, '', UiohookKey['Space']],
        [10,6, 1.25,1, 'Alt', UiohookKey['AltRight']],
        [11.25,6, 1.25,1, '🞑', UiohookKey['MetaRight']],
        [12.5,6, 1.25,1, '☰', UiohookKey['ContextMenu']],
        [13.75,6, 1.25,1, 'Ctrl', UiohookKey['CtrlRight']],
        [15.5,6, 1,1, '🠔', UiohookKey['ArrowLeft']],
        [16.5,6, 1,1, '🠗', UiohookKey['ArrowDown']],
        [17.5,6, 1,1, '➞', UiohookKey['ArrowRight']],
        [19.25,6, 2.25,1, '0\nInsert', UiohookKey['Numpad0']],
        [21.5,6, 1,1, '.\nDel', UiohookKey['NumpadDecimal']],
        [22.5,6, 1,1, '=', UiohookKey['NumpadEqual']]],
    ],
];
class Settings {
    static width = 1100;
    static height = 266;
    static fadeTime = 2000;
    /** @type {import('skia-canvas').Window} */
    window = null;
    /** @type {import('skia-canvas').CanvasRenderingContext2D} */
    ctx = null;
    key = {};
    constructor(ctx, window) {
        this.ctx = ctx;
        this.window = window;
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.labelsUp = true;
        this.leftList = true;
        this.nameRowTopLeft = 0;
        this.nameRowTopRight = 0;
        this.nameRowBottomLeft = 0;
        this.nameRowBottomRight = 0;
        this.labelsUp = true;
        this.linePoses = [];
        for (let i = 0; i < keySwitches.length / 2; i++) {
            const row = keySwitches[i];
            this.nameRowTopLeft = row[0];
            this.nameRowTopRight = row[1];
            this.leftList = true;
            for (let j = 0; j < row[2].length / 2; j++)
                this.drawKey(row[2][j][0], row[2][j][1], row[2][j][2], row[2][j][3], row[2][j][4], row[2][j][5], false, '');
            this.leftList = false;
            for (let j = row[2].length -1; j >= row[2].length / 2; j--)
                this.drawKey(row[2][j][0], row[2][j][1], row[2][j][2], row[2][j][3], row[2][j][4], row[2][j][5], false, '');
        }
        // tack on the mouse
        this.drawKey(24.5, 0, 1.5,2, 'L', 'Mouse1', false, '');
        this.drawKey(26, 0, .5,2, 'M', 'Mouse3', false, '');
        this.drawKey(26.5, 0, 1.5,2, 'R', 'Mouse2', false, '');
        this.drawKey(24.5, 2, 3.5,3, '', '', false);
        this.drawKey(27.84, 2.6, .32,2.4, '', '', false);
        this.drawKey(28, 3.2, .32,1.8, '', '', false);
        this.drawKey(28.16, 3.8, .34,1.2, '', '', false);
        this.drawKey(28.34, 4.4, .34,.6, '', '', false);
        this.drawKey(28, 2, .31,.6, '4', 'Mouse4', false, '');
        this.drawKey(28.18, 2.6, .31,.6, '5', 'Mouse5', false, '');
        this.drawKey(28.36, 3.2, .31,.6, '6', 'Mouse6', false, '');
        this.drawKey(28.55, 3.8, .31,.6, '7', 'Mouse7', false, '');
        this.drawKey(28.73, 4.4, .31,.6, '8', 'Mouse8', false, '');
        this.labelsUp = false;
        for (let i = keySwitches.length -1; i >= keySwitches.length / 2; i--) {
            const row = keySwitches[i];
            this.nameRowBottomLeft = row[0];
            this.nameRowBottomRight = row[1];
            this.leftList = true;
            for (let j = 0; j < row[2].length / 2; j++)
                this.drawKey(row[2][j][0], row[2][j][1], row[2][j][2], row[2][j][3], row[2][j][4], row[2][j][5], false, '');
            this.leftList = false;
            for (let j = row[2].length -1; j >= row[2].length / 2; j--)
                this.drawKey(row[2][j][0], row[2][j][1], row[2][j][2], row[2][j][3], row[2][j][4], row[2][j][5], false, '');
        }
    }
    drawKey(x,y, w,h, label, code, filled, name = 'no name') {
        const scale = Math.min(this.ctx.canvas.width / Settings.width, this.ctx.canvas.height / Settings.height);
        x *= 38;
        y *= 38;
        x *= scale;
        y *= scale;
        x += (this.ctx.canvas.width / 2) - ((Settings.width / 2) * scale);
        y += (this.ctx.canvas.height / 2) - ((Settings.height / 2) * scale);
        w *= 38;
        h *= 38;
        w -= 6;
        h -= 6;
        w *= scale;
        h *= scale;
        this.ctx.font = `${10 * scale}px sans-serif`;
        this.ctx.fillStyle = typeof this.key[code] === 'boolean'
            ? '#EEEA' 
            : code in this.key 
                ? '#' + Math.floor((5 * Math.max(1- ((Date.now() - this.key[code]) / Settings.fadeTime), 0)) + 11).toString(16).repeat(3) + '8'
                : '#9998';
        this.ctx.strokeWidth = 0;
        this.ctx.fillRect(x,y, w,h);
        this.ctx.fillStyle = '#EEEF';
        this.ctx.textBaseline = 'bottom';
        let yOff = 0;
        for (const line of label.split('\n')) {
            const measures = this.ctx.measureText(line);
            const textX = (x + (w / 2)) - (measures.width / 2);
            const textY = (y + (h / 2)) + yOff;
            this.ctx.fillText(line, textX,textY);
            yOff += measures.fontBoundingBoxAscent;
            yOff += measures.fontBoundingBoxDescent;
        }
        this.ctx.fillStyle = '#0000';
        this.ctx.strokeWidth = 1;
        this.ctx.strokeStyle = '#EEEA';
        if (filled) {
            const xPos = x + (w / 2) // Math.floor((x + (w / 2)) * TextLayer.tileSize[0]) / TextLayer.tileSize[0];
            const nameWidth = name.split('\n').reduce((c,v) => Math.max(c, v.length), 0);
            const lines = name.split('\n').length;
            if (this.labelsUp) {
                let yPos = -lines;
                for (let i = 0; i < this.linePoses.length; i++) {
                    const pos = this.linePoses[i];
                    if ((pos[1] >= yPos && pos[1] <= (yPos + lines)) || 
                        ((pos[1] + pos[3]) >= yPos && (pos[1] + pos[3]) <= (yPos + lines)) ||
                        (yPos >= pos[1] && yPos <= (pos[1] + pos[3])) || 
                        ((yPos + lines) >= pos[1] && (yPos + lines) <= (pos[1] + pos[3]))) {
                        if ((pos[0]           >= xPos && pos[0]            <= (xPos + nameWidth)) ||
                            ((pos[0] + pos[2]) >= xPos && (pos[0] + pos[2]) <= (xPos + nameWidth)) ||
                            (xPos              >= pos[0] && xPos               <= (pos[0] + pos[2])) ||
                            ((xPos + nameWidth) >= pos[0] && (xPos + nameWidth) <= (pos[0] + pos[2])))
                            yPos -= lines;
                    }
                }
                this.linePoses.push([xPos + 2,yPos,nameWidth,lines]);
                yPos += (this.ctx.canvas.height / 2) - (Settings.height / 2);
                this.ctx.beginPath();
                this.ctx.moveTo(xPos, y);
                this.ctx.lineTo(xPos, yPos);
                this.ctx.stroke();
                this.ctx.fillStyle = '#EEEF';
                this.ctx.fillText(name, xPos + 2, yPos);
            } else {
                let yPos = lines;
                for (let i = 0; i < this.linePoses.length; i++) {
                    const pos = this.linePoses[i];
                    if (((pos[1] >= yPos && pos[1] <= (yPos + lines)) || 
                        ((pos[1] + pos[3]) >= yPos && (pos[1] + pos[3]) <= (yPos + lines))) ||
                        ((yPos >= pos[1] && yPos <= (pos[1] + pos[3])) || 
                        ((yPos + lines) >= pos[1] && (yPos + lines) <= (pos[1] + pos[3])))) {
                        if (((pos[0]           >= xPos && pos[0]            <= (xPos + nameWidth)) ||
                            ((pos[0] + pos[2]) >= xPos && (pos[0] + pos[2]) <= (xPos + nameWidth))) ||
                            ((xPos              >= pos[0] && xPos               <= (pos[0] + pos[2])) ||
                            ((xPos + nameWidth) >= pos[0] && (xPos + nameWidth) <= (pos[0] + pos[2]))))
                            yPos += lines;
                    }
                }
                this.linePoses.push([xPos + 2,yPos,nameWidth,lines]);
                yPos += (this.ctx.canvas.height / 2) + 151.98;
                this.ctx.beginPath();
                this.ctx.moveTo(xPos, y + h);
                this.ctx.lineTo(xPos, yPos);
                this.ctx.stroke();
                this.ctx.fillStyle = '#EEEF';
                this.ctx.fillText(name, xPos + 2, yPos);
            }
        }
    }
}
module.exports = Settings;