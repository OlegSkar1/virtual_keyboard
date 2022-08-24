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
    ['Delete', 'Delete'],
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
    ['Space', '\u00A0'],
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
          keyElement.textContent = '\u00A0';
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
        const currentKey = document.querySelector(`#${key[0]}`);

        const currShiftIndexEnKey = keyboard.shiftKeys.findIndex(
          (item) => item === key[0]
        );
        const currKey =
          currShiftIndexEnKey !== -1
            ? keyboard.shiftKeys[currShiftIndexEnKey + 1]
            : key[1].toUpperCase();

        switch (key) {
          case key[0].match(
            /(Key|Digit|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
          )
            ? key
            : true:
            currentKey.textContent = keyboard.properties.capsLock
              ? currKey.toLowerCase()
              : currKey;
            break;
          default:
        }
      });
    } else if (
      !keyboard.properties.shift &&
      e.shiftKey &&
      keyboard.properties.langRu
    ) {
      keyboard.properties.shift = true;
      keyboard.keys.forEach((key) => {
        const currentKey = document.querySelector(`#${key[0]}`);

        const currIndexRuKey = keyboard.ruKeys.findIndex(
          (item) => item[0] === key[0]
        );
        const currShiftIndexRuKey = keyboard.shiftRuKeys.findIndex(
          (item) => item === key[0]
        );

        switch (key) {
          case key[0].match(/(Digit|Backslash|Minus|Equal|Slash)/) ? key : true:
            currentKey.textContent =
              keyboard.shiftRuKeys[currShiftIndexRuKey + 1];
            break;
          case key[0].match(
            /(Backquote|Key|BracketLeft|BracketRight|Semicolon|Quote|Comma|Period)/
          )
            ? key
            : true:
            currentKey.textContent = keyboard.properties.capsLock
              ? keyboard.ruKeys[currIndexRuKey][1].toLowerCase()
              : keyboard.ruKeys[currIndexRuKey][1].toUpperCase();
            break;
          default:
        }
      });
    }
  },

  shiftUnpressed(e) {
    if (
      !keyboard.properties.langRu &&
      keyboard.properties.shift &&
      !e.shiftKey
    ) {
      keyboard.properties.shift = false;
      keyboard.keys.forEach((key) => {
        const currentKey = document.querySelector(`#${key[0]}`);

        switch (key) {
          case key[0].match(
            /(Digit|Key|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
          )
            ? key
            : true:
            currentKey.textContent = keyboard.properties.capsLock
              ? key[1].toUpperCase()
              : key[1].toLowerCase();
            break;
          default:
        }
      });
    } else if (
      keyboard.properties.langRu &&
      keyboard.properties.shift &&
      !e.shiftKey
    ) {
      keyboard.properties.shift = false;
      keyboard.keys.forEach((key) => {
        const currentKey = document.querySelector(`#${key[0]}`);

        const currIndexRuKey = keyboard.ruKeys.findIndex(
          (item) => item[0] === key[0]
        );

        switch (key) {
          case key[0].match(/(Digit|Minus|Equal|Backslash)/) ? key : true:
            currentKey.textContent = key[1];
            break;
          case key[0].match(
            /(Backquote|Key|BracketLeft|BracketRight|Semicolon|Quote|Comma|Period|Slash)/
          )
            ? key
            : true:
            currentKey.textContent = keyboard.properties.capsLock
              ? keyboard.ruKeys[currIndexRuKey][1].toUpperCase()
              : keyboard.ruKeys[currIndexRuKey][1].toLowerCase();
            break;
          default:
        }
      });
    }
  },

  capsLockEvent(e) {
    const capsLock = document.querySelector(`#${e.code}`);
    if (e.code === 'CapsLock' && !keyboard.properties.capsLock) {
      keyboard.properties.capsLock = true;
      capsLock.classList.add('active');

      if (!keyboard.properties.langRu) {
        keyboard.keys.forEach((key) => {
          const currentKey = document.querySelector(`#${key[0]}`);

          switch (key) {
            case key[0].match(
              /(Key|Digit|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
            )
              ? key
              : true:
              currentKey.textContent = key[1].toUpperCase();
              break;
            default:
          }
        });
      } else if (keyboard.properties.langRu) {
        keyboard.keys.forEach((key) => {
          const currentKey = document.querySelector(`#${key[0]}`);

          const currIndexRuKey = keyboard.ruKeys.findIndex(
            (item) => item[0] === key[0]
          );

          switch (key) {
            case key[0].match(
              /(Backquote|Key|BracketLeft|BracketRight|Semicolon|Quote|Comma|Period)/
            )
              ? key
              : true:
              currentKey.textContent =
                keyboard.ruKeys[currIndexRuKey][1].toUpperCase();
              break;
            default:
          }
        });
      }
    } else if (e.code === 'CapsLock' && keyboard.properties.capsLock) {
      keyboard.properties.capsLock = false;
      capsLock.classList.remove('active');

      if (!keyboard.properties.langRu) {
        keyboard.keys.forEach((key) => {
          const currentKey = document.querySelector(`#${key[0]}`);

          switch (key) {
            case key[0].match(
              /(Digit|Key|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
            )
              ? key
              : true:
              currentKey.textContent = key[1].toLowerCase();
              break;
            default:
          }
        });
      } else if (keyboard.properties.langRu) {
        keyboard.keys.forEach((key) => {
          const currentKey = document.querySelector(`#${key[0]}`);

          const currIndexRuKey = keyboard.ruKeys.findIndex(
            (item) => item[0] === key[0]
          );

          switch (key) {
            case key[0].match(
              /(Backquote|Key|BracketLeft|BracketRight|Semicolon|Quote|Comma|Period|Slash)/
            )
              ? key
              : true:
              currentKey.textContent =
                keyboard.ruKeys[currIndexRuKey][1].toLowerCase();
              break;
            default:
          }
        });
      }
    }
  },

  triggerEvent() {
    document.addEventListener('keydown', (e) => {
      this.capsLockEvent(e);
      this.shiftPressed(e);
      this.keys.forEach((key) => {
        if (e.code === key[0] && e.code !== 'CapsLock') {
          const currKey = document.querySelector(`#${e.code}`);
          currKey.classList.add('active');
        }
      });
    });

    document.addEventListener('keyup', (e) => {
      this.shiftUnpressed(e);
      this.keys.forEach((key) => {
        if (e.code === key[0] && e.code !== 'CapsLock') {
          const currKey = document.querySelector(`#${e.code}`);
          currKey.classList.remove('active');
        }
      });
    });

    this.main.addEventListener('click', (e) => {
      if (
        e.target.closest('.key') &&
        e.target.id !== 'CapsLock' &&
        e.target.id !== 'ShiftLeft' &&
        e.target.id !== 'ShiftRight'
      ) {
        e.target.closest('.key').classList.add('active');
        setTimeout(
          () => e.target.closest('.key').classList.remove('active'),
          100
        );
      } else if (e.target.id === 'CapsLock') {
        e.target.closest('.key').classList.toggle('active');

        const capsLockEvent = new KeyboardEvent('keydown', {
          code: 'CapsLock',
          bubbles: true,
        });
        this.main.dispatchEvent(capsLockEvent);
      } else if (
        e.target.id === 'ShiftLeft' &&
        !e.target.classList.contains('active')
      ) {
        const shiftLeftDownEvent = new KeyboardEvent('keydown', {
          code: 'ShiftLeft',
          shiftKey: true,
          bubbles: true,
        });
        this.main.dispatchEvent(shiftLeftDownEvent);
      } else if (
        e.target.id === 'ShiftLeft' &&
        e.target.classList.contains('active')
      ) {
        const shiftLeftUpEvent = new KeyboardEvent('keyup', {
          code: 'ShiftLeft',
          bubbles: true,
        });
        this.main.dispatchEvent(shiftLeftUpEvent);
      } else if (
        e.target.id === 'ShiftRight' &&
        !e.target.classList.contains('active')
      ) {
        const shiftRightDownEvent = new KeyboardEvent('keydown', {
          code: 'ShiftRight',
          shiftKey: true,
          bubbles: true,
        });
        this.main.dispatchEvent(shiftRightDownEvent);
      } else if (
        e.target.id === 'ShiftRight' &&
        e.target.classList.contains('active')
      ) {
        const shiftRightUpEvent = new KeyboardEvent('keyup', {
          code: 'ShiftRight',
          bubbles: true,
        });
        this.main.dispatchEvent(shiftRightUpEvent);
      }
      if (e.target.id === 'Backspace') {
        const backSpaceDownEvent = new KeyboardEvent('keydown', {
          code: 'Backspace',
          bubbles: true,
          cancelable: true,
        });
        this.main.dispatchEvent(backSpaceDownEvent);
      }
      if (e.target.id === 'Tab') {
        const tabDownEvent = new KeyboardEvent('keydown', {
          code: 'Tab',
          bubbles: true,
          cancelable: true,
        });
        this.main.dispatchEvent(tabDownEvent);
      }
    });
  },
};

export default keyboard;
