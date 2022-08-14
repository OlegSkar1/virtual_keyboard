import keyboard from './keyboard';

const wrapper = () => {
  const div = document.createElement('div');
  div.classList.add('wrapper');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Виртуальная клавиатура';

  const textarea = document.createElement('textarea');
  textarea.classList.add('body__textarea');
  textarea.id = 'textarea';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Клавиатура создана в операционной системе Windows';

  const language = document.createElement('p');
  language.classList.add('language');
  language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

  div.append(title, textarea, keyboard.init(), description, language);
  return div;
};

export default wrapper;
