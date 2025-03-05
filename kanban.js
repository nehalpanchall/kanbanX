const addTaskbtn = document.querySelector('#addTask');

const board = document.querySelector('.board');

const tasks = document.querySelectorAll('.task');

addTaskbtn.addEventListener('click', () => {
  const paragraphTag = document.createElement('p');
  paragraphTag.innerText = prompt('Task name');

  paragraphTag.classList.add('task');

  board.appendChild(paragraphTag);

  paragraphTag.setAttribute('draggable', true);

  paragraphTag.addEventListener('dragstart', () => {
    paragraphTag.classList.add('flying');
  });

  paragraphTag.addEventListener('dragend', () => {
    paragraphTag.classList.remove('flying');
  });
});

tasks.forEach((task) => {
  task.addEventListener('dragstart', () => {
    task.classList.add('flying');
  });

  task.addEventListener('dragend', () => {
    task.classList.remove('flying');
  });
});
