const addTaskbtn = document.querySelector('#addTask');

const board = document.querySelector('.board');

addTaskbtn.addEventListener('click', () => {
  const paragraphTag = document.createElement('p');
  paragraphTag.innerText = prompt('Task name');

  paragraphTag.classList.add('task');

  board.appendChild(paragraphTag);
});
