import '../scss/main.scss';
import wrapper from './wrapper';
import keyboard from './keyboard';

document.body.append(wrapper());

const textarea = document.querySelector('#textarea');

const keyEvent = (e) => {
  if (e.target.tagName === 'TEXTAREA');
  else {
    switch (e.code) {
      case 'Backspace':
        keyboard.properties.value = keyboard.properties.value.slice(
          0,
          keyboard.properties.value.length - 1
        );
        textarea.value = keyboard.properties.value;
        break;
      case e.code.match(
        /(Digit|Key|Space|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
      )
        ? e.code
        : true:
        keyboard.properties.value += e.key;
        textarea.value = keyboard.properties.value;
        break;
      case 'ArrowLeft':
        keyboard.properties.value += String.fromCharCode(8592);
        textarea.value = keyboard.properties.value;
        break;
      case 'ArrowRight':
        keyboard.properties.value += String.fromCharCode(8594);
        textarea.value = keyboard.properties.value;
        break;
      case 'ArrowUp':
        keyboard.properties.value += String.fromCharCode(8593);
        textarea.value = keyboard.properties.value;
        break;
      case 'ArrowDown':
        keyboard.properties.value += String.fromCharCode(8595);
        textarea.value = keyboard.properties.value;
        break;
      default:
    }
  }
};

document.addEventListener('keydown', keyEvent);
textarea.onblur = () => {
  keyboard.properties.value = textarea.value;
};

document.addEventListener('click', (e) => {
  if (
    e.target.id.match(
      /(Digit|Key|Space|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Semicolon|Quote|Comma|Period|Slash)/
    )
  ) {
    keyboard.properties.value += e.target.innerText;
  }
  if (e.target.id === 'Backspace') {
    keyboard.properties.value = keyboard.properties.value.slice(
      0,
      keyboard.properties.value.length - 1
    );
  }
  if (e.target.closest('#ArrowLeft')) {
    keyboard.properties.value += String.fromCharCode(8592);
  }
  if (e.target.closest('#ArrowRight')) {
    keyboard.properties.value += String.fromCharCode(8594);
  }
  if (e.target.closest('#ArrowUp')) {
    keyboard.properties.value += String.fromCharCode(8593);
  }
  if (e.target.closest('#ArrowDown')) {
    keyboard.properties.value += String.fromCharCode(8595);
  }
  textarea.value = keyboard.properties.value;
});
