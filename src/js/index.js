import '../scss/main.scss';
import wrapper from './wrapper';
import keyboard from './keyboard';

document.body.append(wrapper());

const textarea = document.querySelector('#textarea');

const keyEvent = (e) => {
  if (
    keyboard.properties.langRu &&
    e.code.match(
      /(Digit|Key|Space|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
    )
  ) {
    const currKey = keyboard.ruKeys.flat().findIndex((key) => key === e.code);
    const value =
      currKey !== -1
        ? (keyboard.properties.value += keyboard.ruKeys.flat()[currKey + 1])
        : (keyboard.properties.value += e.key);
    textarea.value = value;
  }
  switch (e.code) {
    case 'Backspace':
      if (e.target.tagName !== 'TEXTAREA') {
        keyboard.properties.value = keyboard.properties.value.slice(
          0,
          keyboard.properties.value.length - 1
        );
      } else keyboard.properties.value = textarea.value;
      textarea.value = keyboard.properties.value;
      break;
    case e.code.match(
      /(Digit|Key|Space|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
    )
      ? e.code
      : true:
      if (e.target.tagName !== 'TEXTAREA' && !keyboard.properties.langRu) {
        keyboard.properties.value += e.key;
        textarea.value = keyboard.properties.value;
      } else if (
        e.target.tagName === 'TEXTAREA' &&
        !keyboard.properties.langRu
      ) {
        keyboard.properties.value = textarea.value;
        textarea.value = keyboard.properties.value;
      } else if (keyboard.properties.langRu) {
        const currKey = keyboard.ruKeys
          .flat()
          .findIndex((key) => key === e.code);
        const value =
          currKey !== -1
            ? (keyboard.properties.value += keyboard.ruKeys.flat()[currKey + 1])
            : (keyboard.properties.value += e.key);
        textarea.value = value;
      }
      break;
    case 'Enter':
      if (e.target.tagName !== 'TEXTAREA') {
        keyboard.properties.value += '\n';
      } else keyboard.properties.value = textarea.value;
      textarea.value = keyboard.properties.value;

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
// textarea.oninput = () => {
//   keyboard.properties.value = textarea.value;
// };

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
