import arrowDown from '../assets/img/chevron-down.png';
import arrowUp from '../assets/img/chevron-up.png';
import arrowLeft from '../assets/img/chevron-left.png';
import arrowRight from '../assets/img/chevron-right.png';
import windows from '../assets/img/windows.png';

const keyboard = {
  main: null,
  keysContainer: null,
  keys: [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ShiftRight',
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
  ],

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    this.main = document.createElement('div');
    this.main.classList.add('keyboard', '1hidden');

    this.keysContainer = document.createElement('div');
    this.keysContainer.classList.add('keys_container');

    this.main.append(this.keysContainer);
    this.createKeys();
    this.triggerEvent();

    return this.main;
  },

  createKeys() {
    this.keys.forEach((key) => {
      const keyElement = document.createElement('span');
      keyElement.classList.add('key');
      keyElement.id = key;

      const br = document.createElement('br');

      const wideKey =
        ['Backspace', 'CapsLock', 'ShiftLeft', 'Tab'].indexOf(key) !== -1;

      const semiWideKey =
        ['ControlLeft', 'AltLeft', 'ControlRight', 'AltRight'].indexOf(key) !==
        -1;

      const brKey =
        ['Backspace', 'Backslash', 'Enter', 'ShiftRight'].indexOf(key) !== -1;

      if (wideKey) {
        keyElement.classList.add('wide_key');
      }

      if (semiWideKey) {
        keyElement.classList.add('semi-wide_key');
      }

      switch (key) {
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
        case key.match(/Digit/) ? key : true:
          keyElement.textContent = key.split(/Digit/).join('');
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
        case key.match(/Key/) ? key : true:
          keyElement.textContent = key.split(/Key/).join('').toLowerCase();
          break;
        default:
          keyElement.textContent = key;
      }

      return brKey
        ? this.keysContainer.append(keyElement, br)
        : this.keysContainer.append(keyElement);
    });
  },

  triggerEvent() {
    document.addEventListener('keydown', (e) => {
      this.keys.forEach((key) => {
        if (e.code === key) {
          const currKey = document.querySelector(`#${key}`);
          currKey.classList.add('active');
        }
      });
    });

    document.addEventListener('keyup', (e) => {
      this.keys.forEach((key) => {
        if (e.code === key) {
          const currKey = document.querySelector(`#${key}`);
          currKey.classList.remove('active');
        }
      });
    });

    this.main.addEventListener('click', (e) => {
      if (e.target.closest('.key')) {
        e.target.classList.add('active');
        setTimeout(() => e.target.classList.remove('active'), 200);
      }
    });
  },
};

export default keyboard;
