const addTaskbtn = document.querySelector('#addTask');

const board = document.querySelector('.board');

const tasks = document.querySelectorAll('.task');

const addFlyingClass = (element) => {
  element.addEventListener('dragstart', () => {
    element.classList.add('flying');
  });

  element.addEventListener('dragend', () => {
    element.classList.remove('flying');
  });
};

addTaskbtn.addEventListener('click', () => {
  const paragraphTag = document.createElement('p');
  paragraphTag.innerText = prompt('Task name');

  paragraphTag.classList.add('task');

  board.appendChild(paragraphTag);

  paragraphTag.setAttribute('draggable', true);

  addFlyingClass(paragraphTag);
});

tasks.forEach((task) => {
  addFlyingClass(task);
});

const allBoards = document.querySelectorAll('.board');

allBoards.forEach((singleBoard) => {
  singleBoard.addEventListener('dragover', () => {
    const flyingTask = document.querySelector('.flying');

    singleBoard.appendChild(flyingTask);
  });
});
