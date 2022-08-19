/* eslint-disable no-restricted-syntax */
import arrowDown from '../assets/img/chevron-down.png';
import arrowUp from '../assets/img/chevron-up.png';
import arrowLeft from '../assets/img/chevron-left.png';
import arrowRight from '../assets/img/chevron-right.png';
import windows from '../assets/img/windows.png';

const keyboard = {
  main: null,
  keysContainer: null,
  keys: [
    ['Backquote', '`'],
    ['Digit1', '1'],
    ['Digit2', '2'],
    ['Digit3', '3'],
    ['Digit4', '4'],
    ['Digit5', '5'],
    ['Digit6', '6'],
    ['Digit7', '7'],
    ['Digit8', '8'],
    ['Digit9', '9'],
    ['Digit0', '0'],
    ['Minus', '-'],
    ['Equal', '='],
    ['Backspace', 'Backspace'],
    ['Tab', 'Tab'],
    ['KeyQ', 'q'],
    ['KeyW', 'w'],
    ['KeyE', 'e'],
    ['KeyR', 'r'],
    ['KeyT', 't'],
    ['KeyY', 'y'],
    ['KeyU', 'u'],
    ['KeyI', 'i'],
    ['KeyO', 'o'],
    ['KeyP', 'p'],
    ['BracketLeft', '['],
    ['BracketRight', ']'],
    ['Backslash', '\\'],
    ['CapsLock', 'CapsLock'],
    ['KeyA', 'a'],
    ['KeyS', 's'],
    ['KeyD', 'd'],
    ['KeyF', 'f'],
    ['KeyG', 'g'],
    ['KeyH', 'h'],
    ['KeyJ', 'j'],
    ['KeyK', 'k'],
    ['KeyL', 'l'],
    ['Semicolon', ';'],
    ['Quote', "'"],
    ['Enter', 'Enter'],
    ['ShiftLeft', 'Shift'],
    ['KeyZ', 'z'],
    ['KeyX', 'x'],
    ['KeyC', 'c'],
    ['KeyV', 'v'],
    ['KeyB', 'b'],
    ['KeyN', 'n'],
    ['KeyM', 'm'],
    ['Comma', ','],
    ['Period', '.'],
    ['Slash', '/'],
    ['ShiftRight', 'Shift'],
    ['ControlLeft', 'Control'],
    ['MetaLeft', 'Meta'],
    ['AltLeft', 'Alt'],
    ['Space', ' '],
    ['AltRight', 'Alt'],
    ['ControlRight', 'Control'],
    ['ArrowLeft', 'ArrowLeft'],
    ['ArrowDown', 'ArrowDown'],
    ['ArrowUp', 'ArrowUp'],
    ['ArrowRight', 'ArrowRight'],
  ],
  ruKeys: [
    ['Backquote', 'ё'],
    ['KeyQ', 'й'],
    ['KeyW', 'ц'],
    ['KeyE', 'у'],
    ['KeyR', 'к'],
    ['KeyT', 'е'],
    ['KeyY', 'н'],
    ['KeyU', 'г'],
    ['KeyI', 'ш'],
    ['KeyO', 'щ'],
    ['KeyP', 'з'],
    ['BracketLeft', 'х'],
    ['BracketRight', 'ъ'],
    ['KeyA', 'ф'],
    ['KeyS', 'ы'],
    ['KeyD', 'в'],
    ['KeyF', 'а'],
    ['KeyG', 'п'],
    ['KeyH', 'р'],
    ['KeyJ', 'о'],
    ['KeyK', 'л'],
    ['KeyL', 'д'],
    ['Semicolon', 'ж'],
    ['Quote', 'э'],
    ['KeyZ', 'я'],
    ['KeyX', 'ч'],
    ['KeyC', 'с'],
    ['KeyV', 'м'],
    ['KeyB', 'и'],
    ['KeyN', 'т'],
    ['KeyM', 'ь'],
    ['Comma', 'б'],
    ['Period', 'ю'],
    ['Slash', '.'],
  ],
  shiftKeys: [
    'Backquote',
    '~',
    'Digit1',
    '!',
    'Digit2',
    '@',
    'Digit3',
    '#',
    'Digit4',
    '$',
    'Digit5',
    '%',
    'Digit6',
    '^',
    'Digit7',
    '&',
    'Digit8',
    '*',
    'Digit9',
    '(',
    'Digit0',
    ')',
    'Minus',
    '_',
    'Equal',
    '+',
    'BracketLeft',
    '{',
    'BracketRight',
    '}',
    'Backslash',
    '|',
    'Semicolon',
    ':',
    'Quote',
    '"',
    'Comma',
    '<',
    'Period',
    '>',
    'Slash',
    '?',
  ],
  shiftRuKeys: [
    'Digit1',
    '!',
    'Digit2',
    '"',
    'Digit3',
    '№',
    'Digit4',
    ';',
    'Digit5',
    '%',
    'Digit6',
    ':',
    'Digit7',
    '?',
    'Digit8',
    '*',
    'Digit9',
    '(',
    'Digit0',
    ')',
    'Minus',
    '_',
    'Equal',
    '+',
    'Backslash',
    '/',
    'Slash',
    ',',
  ],

  properties: {
    value: '',
    capsLock: false,
    shift: false,
    langRu: false,
  },

  init() {
    this.main = document.createElement('div');
    this.main.classList.add('keyboard', '1hidden');

    this.keysContainer = document.createElement('div');
    this.keysContainer.classList.add('keys_container');

    this.main.append(this.keysContainer);
    this.createKeys();
    this.triggerEvent();
    this.isPressedKey(this.toggleLang.bind(keyboard), 'ControlLeft', 'AltLeft');

    return this.main;
  },

  createKeys() {
    this.keys.forEach((key) => {
      const keyElement = document.createElement('span');
      keyElement.classList.add('key');
      keyElement.id = key[0];
      const br = document.createElement('br');

      const wideKey =
        ['Backspace', 'CapsLock', 'ShiftLeft', 'Tab'].indexOf(key[0]) !== -1;

      const semiWideKey =
        ['ControlLeft', 'AltLeft', 'ControlRight', 'AltRight'].indexOf(
          key[0]
        ) !== -1;

      const brKey =
        ['Backspace', 'Backslash', 'Enter', 'ShiftRight'].indexOf(key[0]) !==
        -1;

      if (wideKey) {
        keyElement.classList.add('wide_key');
      }

      if (semiWideKey) {
        keyElement.classList.add('semi-wide_key');
      }

      switch (key[0]) {
        case 'ShiftRight':
          keyElement.style.width = '142px';
        case 'ShiftLeft':
          keyElement.textContent = 'Shift';
          break;
        case 'ControlRight':
        case 'ControlLeft':
          keyElement.textContent = 'Ctrl';
          break;
        case 'AltRight':
        case 'AltLeft':
          keyElement.textContent = 'Alt';
          break;
        case 'Space':
          keyElement.classList.add('extra-wide_key');
          break;
        case 'Enter':
          keyElement.style.width = '93px';
          keyElement.textContent = 'Enter';
          break;
        case 'Backslash':
          keyElement.textContent = '\\';
          break;
        case 'ArrowUp':
          keyElement.innerHTML = `<img src="${arrowUp}">`;
          break;
        case 'ArrowDown':
          keyElement.innerHTML = `<img src="${arrowDown}">`;
          break;
        case 'ArrowLeft':
          keyElement.innerHTML = `<img src="${arrowLeft}">`;
          break;
        case 'ArrowRight':
          keyElement.innerHTML = `<img src="${arrowRight}">`;
          break;
        case 'MetaLeft':
          keyElement.innerHTML = `<img src="${windows}">`;
          break;
        case key[0].match(/Digit/) ? key[0] : true:
          keyElement.textContent = key[0].split(/Digit/).join('');
          break;
        case 'Backquote':
          keyElement.textContent = '`';
          break;
        case 'Minus':
          keyElement.textContent = '-';
          break;
        case 'Equal':
          keyElement.textContent = '=';
          break;
        case 'BracketLeft':
          keyElement.textContent = '[';
          break;
        case 'BracketRight':
          keyElement.textContent = ']';
          break;
        case 'Semicolon':
          keyElement.textContent = ';';
          break;
        case 'Quote':
          keyElement.textContent = "'";
          break;
        case 'Comma':
          keyElement.textContent = ',';
          break;
        case 'Period':
          keyElement.textContent = ',';
          break;
        case 'Slash':
          keyElement.textContent = '/';
          break;
        case key[0].match(/Key/) ? key[0] : true:
          keyElement.textContent = key[0].split(/Key/).join('').toLowerCase();
          break;
        default:
          keyElement.textContent = key[0];
      }

      return brKey
        ? this.keysContainer.append(keyElement, br)
        : this.keysContainer.append(keyElement);
    });
  },

  createRuKeys() {
    keyboard.keys.forEach((key) => {
      for (let i = 0; i < keyboard.ruKeys.length; i++) {
        if (keyboard.ruKeys[i][0] === key[0]) {
          const keyElement = document.querySelector(`#${key[0]}`);
          keyElement.textContent = keyboard.ruKeys[i][1];
        }
      }
    });
  },

  toggleLang() {
    if (!this.properties.langRu) {
      this.properties.langRu = true;

      this.createRuKeys();
    } else if (this.properties.langRu) {
      this.properties.langRu = false;
      this.keysContainer.innerHTML = '';
      this.createKeys();
    }
  },

  isPressedKey(func, ...keys) {
    const pressed = new Set();
    document.addEventListener('keydown', (e) => {
      pressed.add(e.code);
      for (const key of keys) {
        if (!pressed.has(key)) {
          return;
        }
      }
      pressed.clear();
      func();
    });

    document.addEventListener('keyup', (e) => {
      pressed.delete(e.code);
    });
  },

  shiftPressed(e) {
    if (
      !keyboard.properties.shift &&
      e.shiftKey &&
      !keyboard.properties.langRu
    ) {
      keyboard.properties.shift = true;
      keyboard.keys.forEach((key) => {
        const currKey = document.querySelector(`#${key[0]}`);
        if (key[0].match(/Key/)) {
          currKey.textContent = key[0].split(/Key/).join('').toUpperCase();
        }
      });
    } else if (
      !keyboard.properties.shift &&
      e.shiftKey &&
      keyboard.properties.langRu
    ) {
      keyboard.properties.shift = true;
      keyboard.keys.forEach((key) => {
        for (let i = 0; i < keyboard.ruKeys.length; i++) {
          if (keyboard.ruKeys[i][0] === key[0]) {
            const keyElement = document.querySelector(`#${key[0]}`);
            keyElement.textContent = keyboard.ruKeys[i][1].toUpperCase();
          }
        }
      });
    }
  },

  shiftUnpressed(e) {
    if (
      !keyboard.properties.langRu &&
      !e.shiftKey &&
      keyboard.properties.shift
    ) {
      keyboard.properties.shift = false;
      keyboard.keys.forEach((key) => {
        if (key[0].match(/Key/)) {
          const currKey = document.querySelector(`#${key[0]}`);
          currKey.textContent = key[0].split(/Key/).join('').toLowerCase();
        }
      });
    } else if (
      keyboard.properties.langRu &&
      !e.shiftKey &&
      keyboard.properties.shift
    ) {
      keyboard.properties.shift = false;
      keyboard.keys.forEach((key) => {
        for (let i = 0; i < keyboard.ruKeys.length; i++) {
          if (keyboard.ruKeys[i][0] === key[0]) {
            const keyElement = document.querySelector(`#${key[0]}`);
            keyElement.textContent = keyboard.ruKeys[i][1].toLowerCase();
          }
        }
      });
    }
  },

  triggerEvent() {
    document.addEventListener('keydown', this.shiftPressed);
    document.addEventListener('keydown', (e) => {
      this.keys.forEach((key) => {
        if (e.code === key[0]) {
          const currKey = document.querySelector(`#${e.code}`);
          currKey.classList.add('active');
        }
      });
    });

    document.addEventListener('keyup', (e) => {
      this.shiftUnpressed(e);
      this.keys.forEach((key) => {
        if (e.code === key[0]) {
          const currKey = document.querySelector(`#${e.code}`);
          currKey.classList.remove('active');
        }
      });
    });

    this.main.addEventListener('click', (e) => {
      if (e.target.closest('.key')) {
        e.target.closest('.key').classList.add('active');
        setTimeout(
          () => e.target.closest('.key').classList.remove('active'),
          100
        );
      }
    });
  },
};

export default keyboard;
