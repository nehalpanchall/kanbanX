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

const darkModeBtn = document.querySelector('.darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  if (darkModeBtn.textContent === 'Dark Mode') {
    document.body.style.backgroundColor = '#3d3d3d';
    document.body.style.color = 'white';

    darkModeBtn.textContent = 'Light Mode';

    tasks.forEach((task) => {
      task.classList.add('toggleTask');
    });

    allBoards.forEach((board) => {
      board.classList.add('toggleBoard');
    });
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    darkModeBtn.textContent = 'Dark Mode';

    tasks.forEach((task) => {
      task.classList.add('task');
      task.classList.remove('toggleTask');
    });

    allBoards.forEach((board) => {
      board.classList.add('board');
      board.classList.remove('toggleBoard');
    });
  }
});
