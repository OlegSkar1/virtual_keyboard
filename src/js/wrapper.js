const paragraph = () => {
  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Виртуальная клавиатура';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Клавиатура создана в операционной системе Windows';

  const language = document.createElement('p');
  language.classList.add('language');
  language.textContent = 'Для переключения языка комбинация: левыe shift + alt';
  return [title, description, language];
};

const wrapper = () => {
  const div = document.createElement('div');
  div.classList.add('wrapper');
};

export default wrapper;
