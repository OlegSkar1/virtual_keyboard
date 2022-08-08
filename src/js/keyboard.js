import arrowDown from '../assets/img/chevron-down.png';
import arrowUp from '../assets/img/chevron-up.png';
import arrowLeft from '../assets/img/chevron-left.png';
import arrowRight from '../assets/img/chevron-right.png';
import windows from '../assets/img/windows.png';

const keyboard = {
  main: null,
  keysContainer: null,
  keys: [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'CapsLock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "'",
    'Enter',
    'ShiftLeft',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    'ShiftRight',
    'Control',
    'Meta',
    'Alt',
    ' ',
    'Alt',
    'Control',
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

    return this.main;
  },

  createKeys() {
    this.keys.forEach((key) => {
      const keyElement = document.createElement('span');
      keyElement.classList.add('key');
      keyElement.id = key;
      keyElement.textContent = key;

      const br = document.createElement('br');

      const wideKey =
        [
          'Backspace',
          'CapsLock',
          'ShiftRight',
          'ShiftLeft',
          'Enter',
          'Tab',
        ].indexOf(key) !== -1;

      const semiWideKey = ['Control', 'Alt'].indexOf(key) !== -1;

      const brKey =
        ['Backspace', '\\', 'Enter', 'ShiftRight'].indexOf(key) !== -1;

      if (wideKey) {
        keyElement.classList.add('wide_key');
      }

      if (semiWideKey) {
        keyElement.classList.add('semi-wide_key');
      }

      if (key === 'ShiftRight' || key === 'ShiftLeft') {
        keyElement.textContent = 'Shift';
      }
      if (key === 'Control') {
        keyElement.textContent = 'Ctrl';
      }

      if (key === ' ') {
        keyElement.classList.add('extra-wide_key');
      }

      if (key === 'Enter') {
        keyElement.style.width = '93px';
      }

      if (key === 'ShiftRight') {
        keyElement.style.width = '142px';
      }

      if (key === 'ArrowDown') {
        keyElement.innerHTML = `<img src="${arrowDown}">`;
      }

      if (key === 'ArrowUp') {
        keyElement.innerHTML = `<img src="${arrowUp}">`;
      }
      if (key === 'ArrowLeft') {
        keyElement.innerHTML = `<img src="${arrowLeft}">`;
      }
      if (key === 'ArrowRight') {
        keyElement.innerHTML = `<img src="${arrowRight}">`;
      }
      if (key === 'Meta') {
        keyElement.innerHTML = `<img src="${windows}">`;
      }

      return brKey
        ? this.keysContainer.append(keyElement, br)
        : this.keysContainer.append(keyElement);
    });
  },
};

export default keyboard;
