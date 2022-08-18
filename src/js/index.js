import '../scss/main.scss';
import wrapper from './wrapper';
import keyboard from './keyboard';

document.body.append(wrapper());

const textarea = document.querySelector('#textarea');

const keyEvent = (e) => {
  switch (e.code) {
    case 'Backspace':
      if (e.target.tagName !== 'TEXTAREA') {
        keyboard.properties.value = keyboard.properties.value.slice(
          0,
          keyboard.properties.value.length - 1
        );
        textarea.value = keyboard.properties.value;
      } else keyboard.properties.value = textarea.value;
      break;
    case e.code.match(
      /(Digit|Key|Space|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
    )
      ? e.code
      : true:
      e.preventDefault();
      if (!keyboard.properties.langRu) {
        const currIndexEnKey = keyboard.keys.findIndex(
          (key) => key[0] === e.code
        );
        const currShiftIndexEnKey = keyboard.shiftKeys.findIndex(
          (key) => key === e.code
        );
        const upperKeys = keyboard.keys[currIndexEnKey][1].toUpperCase();

        if (!keyboard.properties.shift && keyboard.properties.capsLock) {
          keyboard.properties.value += upperKeys;
          textarea.value = keyboard.properties.value;
        }
        if (keyboard.properties.shift && !keyboard.properties.capsLock) {
          const currKey =
            currShiftIndexEnKey !== -1
              ? keyboard.shiftKeys[currShiftIndexEnKey + 1]
              : upperKeys;
          keyboard.properties.value += currKey;
          textarea.value = keyboard.properties.value;
        }
        if (keyboard.properties.shift && keyboard.properties.capsLock) {
          const currKey =
            currShiftIndexEnKey !== -1
              ? keyboard.shiftKeys[currShiftIndexEnKey + 1]
              : keyboard.keys[currIndexEnKey][1].toLowerCase();
          keyboard.properties.value += currKey;
          textarea.value = keyboard.properties.value;
        }
        if (!keyboard.properties.shift && !keyboard.properties.capsLock) {
          keyboard.properties.value += keyboard.keys[currIndexEnKey][1];
          textarea.value = keyboard.properties.value;
        }
      } else if (keyboard.properties.langRu) {
        const currIndexRuKey = keyboard.ruKeys.findIndex(
          (key) => key[0] === e.code
        );
        const currShiftIndexRuKey = keyboard.shiftRuKeys.findIndex(
          (key) => key === e.code
        );
        if (keyboard.properties.shift && !keyboard.properties.capsLock) {
          const currKey =
            currShiftIndexRuKey !== -1
              ? keyboard.shiftRuKeys[currShiftIndexRuKey + 1]
              : keyboard.ruKeys[currIndexRuKey][1].toUpperCase();
          keyboard.properties.value += currKey;
          textarea.value = keyboard.properties.value;
        }
        if (!keyboard.properties.shift && keyboard.properties.capsLock) {
          const currKey =
            currIndexRuKey !== -1
              ? keyboard.ruKeys[currIndexRuKey][1].toUpperCase()
              : e.key;
          keyboard.properties.value += currKey;
          textarea.value = keyboard.properties.value;
        }
        if (keyboard.properties.shift && keyboard.properties.capsLock) {
          const currKey =
            currShiftIndexRuKey !== -1
              ? keyboard.shiftRuKeys[currShiftIndexRuKey + 1]
              : keyboard.ruKeys[currIndexRuKey][1];
          keyboard.properties.value += currKey;
          textarea.value = keyboard.properties.value;
        }
        if (!keyboard.properties.shift && !keyboard.properties.capsLock) {
          const currKey =
            currIndexRuKey !== -1 ? keyboard.ruKeys[currIndexRuKey][1] : e.key;
          keyboard.properties.value += currKey;
          textarea.value = keyboard.properties.value;
        }
      }
      break;
    case 'Enter':
      if (e.target.tagName !== 'TEXTAREA') {
        keyboard.properties.value += '\n';
      }
      break;
    case e.code.match(/(Tab|AltLeft|AltRight)/) ? e.code : true:
      e.preventDefault();
      break;
    case e.code.match(/(ShiftLeft|ShiftRight)/) ? e.code : true:
      break;
    case 'ArrowLeft':
      e.preventDefault();
      keyboard.properties.value += String.fromCharCode(8592);
      textarea.value = keyboard.properties.value;
      break;
    case 'ArrowRight':
      e.preventDefault();
      keyboard.properties.value += String.fromCharCode(8594);
      textarea.value = keyboard.properties.value;
      break;
    case 'ArrowUp':
      e.preventDefault();
      keyboard.properties.value += String.fromCharCode(8593);
      textarea.value = keyboard.properties.value;
      break;
    case 'ArrowDown':
      e.preventDefault();
      keyboard.properties.value += String.fromCharCode(8595);
      textarea.value = keyboard.properties.value;
      break;
    default:
  }
};

document.addEventListener('keydown', keyEvent);
textarea.oninput = () => {
  keyboard.properties.value = textarea.value;
};

document.addEventListener('click', (e) => {
  switch (e.target) {
    case e.target.id.match(
      /(Digit|Key|Space|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
    )
      ? e.target
      : true:
      keyboard.properties.value += e.target.innerText;
      break;
    case e.target.id === 'Backspace' ? e.target : true:
      keyboard.properties.value = keyboard.properties.value.slice(
        0,
        keyboard.properties.value.length - 1
      );
      break;
    case e.target.id === 'Enter' ? e.target : true:
      keyboard.properties.value += '\n';
      break;
    case e.target.closest('#ArrowLeft') ? e.target : true:
      keyboard.properties.value += String.fromCharCode(8592);
      break;
    case e.target.closest('#ArrowRight') ? e.target : true:
      keyboard.properties.value += String.fromCharCode(8594);
      break;
    case e.target.closest('#ArrowUp') ? e.target : true:
      keyboard.properties.value += String.fromCharCode(8593);
      break;
    case e.target.closest('#ArrowDown') ? e.target : true:
      keyboard.properties.value += String.fromCharCode(8595);
      break;
    default:
  }
  textarea.value = keyboard.properties.value;
});
